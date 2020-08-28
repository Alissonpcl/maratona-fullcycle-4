package main

import (
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Eu sou Full Cycle"))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
