# TAX DEV

## Deploy
Se usa docker-compose para poder tener el deploy y el live coding simultaneo.

### Arrancar entorno live coding
Docker-compose:
```
$ docker-compose up -d --build

$ docker-compose down
```

Tener en cuenta que debemos usar --build (al tener dentro además nodemon) nos permite ver los cambios de nuestro código, ya que le indica a COMPOSE que reconstruya la imagen para nuestro contenedor de node.

### Arrancar entorno productivo
Se debe cambiar la ejecución del npm para ejecutar el microservicio de develop a prod.
Dockerfile:
```
CMD npm run dev
.....
CMD npm start

```

Docker-compose:
```
$ docker-compose up -d --build

$ docker-compose down
```

## Configuraciones
### Node

Probar Docker:
```` 
$ docker build -t jfcaballero/tax-dev .
$ docker run -dp 3000:3000 jfcaballero/tax-dev
````

### MongoDB

Se configura a través de docker-compose.
Se podría montar otra instancia con un docker aparte y arrancarla junto a la del Docker de node.