# Taller Docker

Este taller tiene como objetivo poder realizar una practica para adquirir conocimiento de como usar Docker y EC2 de amazon.

## Correr proyecto

Primero Clonaremos el repositorio, para eso desde nuestro navegador nos dirigiremos al siguiente link

```sh
https://github.com/SoyTiyi/AREP_Lab-5.git
```

Para clonar el repositorio debemos de correr el siguiente comando en cmd o en la terminal 

```sh
git clone https://github.com/SoyTiyi/AREP_Lab-5.git
 ```

 Y luego entraremos a la carperta AREP_Lab-5

```sh
$ cd AREP_Lab-5
 ```
Compilaremos los proyectos taller-cinco y load-balancer con el siguiente comando, debemos de entrar a la carpeta de cada uno

 ```sh
$ mvn package
 ```

 Para ejecutar la aplicación. Nos dirigimos a la carpeta Docker-Compose.

```sh
$ cd Docker-Compose
 ```

Luego ejecutamos el siguiente comando

```sh
$ docker-compose up -d
 ```


### Prerequisitos

* Docker
* Docker Compose
* UNIX / Linux
* Java SE Development Kit 8 -Java SE Runtime Environment 8 -Apache Maven.


## Instancia en AWS 

[Amazon EC2](http://ec2-100-27-18-69.compute-1.amazonaws.com:8080/)

## Integración Continua

[![CircleCI](https://circleci.com/gh/SoyTiyi/LoadBalancer.svg?style=svg)](https://circleci.com/gh/SoyTiyi/LoadBalancer)

[![CircleCI](https://circleci.com/gh/SoyTiyi/Taller-Cinco.svg?style=svg)](https://circleci.com/gh/SoyTiyi/Taller-Cinco)

## Correr Pruebas

Para correr las pruebas, ejecutamos el siguiente comando

```sh
$ mvn test
 ```

### Generar Javadoc

Para generar el javadoc, corremos el siguiente comando

```sh
$ mvn javadoc:javadoc 
 ```

## Construido con

* [Maven](https://maven.apache.org/) - Dependency Management
* [JUnit](https://mvnrepository.com/artifact/junit/junit) - Test framework
* [VIM](https://www.vim.org/download.php) - Editor de Texto VIM

## Author

 - Santiago Martínez Martínez 
 - Estudiante de la Escuela Colombiana De Ingeniería Julio Garavito 
 - Noveno Semestre

## License

Este proyecto está licenciado bajo la GNU v3.0 - ver el archivo LICENSE.md para más detalles
