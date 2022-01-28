# TAX DEV

Proyecto basado en mi antiguo arquetipo **[mkfm-core](https://github.com/jfcaballerop/mkfm-core.git)** actualizado y recortado para la prueba ;)

## Deploy

Se usa *docker-compose* para poder tener el deploy y el live coding simultaneo.

### Arrancar entorno live coding

*Docker-compose:*
```
$ docker-compose up -d --build

$ docker-compose down
```

>Tener en cuenta que debemos usar *--build* (al tener dentro además nodemon) nos permite ver los cambios de nuestro código, ya que le indica a COMPOSE que reconstruya la imagen para nuestro contenedor de node.

### Arrancar entorno productivo

Se debe cambiar la ejecución del npm para ejecutar el microservicio de develop a prod.

*Dockerfile:*
```
CMD npm run dev
.....
CMD npm start

```

*Docker-compose:*
```
$ docker-compose up -d --build

$ docker-compose down
```
***
## Configuraciones
### Environment

Hay que crear (o inyectar en caso de despliegue) el fichero .env

*.env sample*

	MONGODB_USER=root
	MONGODB_PASSWORD=123456
	MONGODB_DATABASE=mrknightdb
	MONGODB_LOCAL_PORT=7017
	MONGODB_DOCKER_PORT=27017

	NODE_LOCAL_PORT=3000
	NODE_DOCKER_PORT=3000

### Node

Probar Docker:
```` 
$ docker build -t jfcaballero/tax-dev .
$ docker run -dp 3000:3000 jfcaballero/tax-dev
````

### MongoDB

Se configura a través de docker-compose.
Se podría montar otra instancia con un docker aparte y arrancarla junto a la del Docker de node.
***
## OPEN-API ##

Se deja configurado con swagger la parte de open-api para que sea más fácil su testeo.
Una vez arrancado el entorno se puede probar aquí <http://localhost:3000/api-docs>

***

## TESTs

Se usa el entorno de *jest* para la realizacion de las pruebas.
