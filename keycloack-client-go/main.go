package main

import (
	"context"
	"encoding/json"
	oidc "github.com/coreos/go-oidc"
	"golang.org/x/oauth2"
	"log"
	"net/http"
)

var (
	clientId     = "app"
	clientSecret = "ff1b0ecf-28bc-4991-b962-33c5aef46bac"
)

func main() {
	ctx := context.Background()

	provider, err := oidc.NewProvider(ctx, "http://localhost:8080/auth/realms/Demo")

	if err != nil {
		log.Fatal(err)
	}

	config := oauth2.Config{
		ClientID:     clientId,
		ClientSecret: clientSecret,
		Endpoint:     provider.Endpoint(),
		RedirectURL:  "http://localhost:8081/auth/callback",
		Scopes:       []string{oidc.ScopeOpenID, "profile", "email", "roles"},
	}

	state := "magica"

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, config.AuthCodeURL(state), http.StatusFound)
	})

	http.HandleFunc("/auth/callback", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Query().Get("state") != state {
			http.Error(w, "state did not match", http.StatusBadRequest)
			return
		}

		//Token para autorizacao
		oauth2Token, err := config.Exchange(ctx, r.URL.Query().Get("code"))

		if err != nil {
			http.Error(w, "failed to exchange token", http.StatusBadRequest)
			return
		}

		//Token para autenticacao
		rawIdToken, ok := oauth2Token.Extra("id_token").(string)

		if !ok {
			http.Error(w, "failed to exchange token", http.StatusBadRequest)
			return
		}

		resp := struct {
			OAuthToken *oauth2.Token
			RawIdToken string
		}{oauth2Token, rawIdToken}

		data, err := json.MarshalIndent(resp, "", "    ")
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		_, _ = w.Write(data)

	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
