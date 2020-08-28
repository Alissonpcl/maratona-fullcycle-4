#Executar a partir da pasta anterior a esta
docker run -p 3000:3000 -v "${PWD}:/home/node/app" --name allim-api allim-nest
