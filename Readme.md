# TAX DEV

Proyecto basado en mi antiguo arquetipo **[mkfm-core](https://github.com/jfcaballerop/mkfm-core.git)** actualizado y recortado para la prueba ;)

## Deploy

Se usa *docker-compose* para poder tener el deploy y el live coding simultaneo.
> Para el control de los accesos a BD y demás se usa *dotenv* y el archivo raíz **.env**

> En el caso de que el entorno se establezca fuera de *PROD* con la variable ***NODE_ENV*** el cual debe ser seteado en un entorno productivo.
### Arrancar entorno live coding

*Docker-compose:*
```
$ docker-compose up -d --build

$ docker-compose down
```

> Tener en cuenta que debemos usar *--build* (al tener dentro además nodemon) nos permite ver los cambios de nuestro código, ya que le indica a COMPOSE que reconstruya la imagen para nuestro contenedor de node.

> Por defecto se ha configurado que arranque el entorno de *DEV*, simplemente cambiando el *.dockerfile* o creando varios ficheros para cada entorno se podría usar luego con **Jenkins** para inyectar las variables necesarias.

### Arrancar entorno productivo

Se debe cambiar la ejecución del npm para ejecutar el microservicio de *develop* a *prod*.

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

### Configuracion MongoDB

Para un entorno de testing final, no se debe usar un schema o DB como tal, sino tirar de Mocks, pero para el ejemplo actual se hace uso de un entorno específico:

	MONGODB_DATABASE_TEST=mrknightdbtest




# NOTAS del @utor

- El equipo para el desarrollo usado es sobre una plataforma de **Window$ 11**, aunque para poder hacer un deploy & code sin perder tiempo, se usa docker-compose.
- si sobre este entorno se quisiera hacer uso de las variables de entorno entre diferentes plata formas *Mac, Linux o Windows* se podría hacer uso de la herramienta ***cross-ev***

```
$ npm i cross-env
...
$ cross-env NODE_ENV=dev nodemon index.js
```

- Para el Linter se configura de manera inicial

```
	npm init @eslint/config
```
