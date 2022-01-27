# TAX DEV

## Deploy

### Node

Probar Docker:
```` 
$ docker build -t jfcaballero/tax-dev .
$ docker run -dp 3000:3000 jfcaballero/tax-dev
````

### MongoDB

Arrancar entorno live coding
Docker-compose:
```
$ docker-compose up -d --build

$ docker-compose down
```

Tener en cuenta que debemos usar --build (al tener dentro además nodemon) nos permite ver los cambios de nuestro código, ya que le indica a COMPOSE que reconstruya la imagen para nuestro contenedor de node.