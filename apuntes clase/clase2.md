# Clase 2 

para ejecutar npm run dev te ejecuta el script de dev

pero con npx lo busca temporalmente para ejecutarlo

## Pre-procesadores de CSS

SASS es el mas usado actualmente.

Que es un pre-procesador: agiliza al escribir los estilos, permite anidar estilos
y lo transforma a codigo reducido

Añade caracteristicas dinamicas o funciones

pero hay que procesar cada vez que hacemos un cambio para obtener el CSS modificado
en angular te pregunta

# SASS
// comentario que no se compila 

/**/ que si se compila en el navegador

 # mirar a partir del minuto 30 
npm install sass --save-dev

"sass:dev": "sass --watch ejemplos/SCSS/styles.scss ejemplos/SCSS/dist/styles.css"

npm run sass:dev

esto seria nombre de la variable con el simbolo de dollar y nombre de la variable
$primary-color: #334;

npm i -D rimraf 
nos permite borrar archivos

sass styles.scss /dist/styles.css me pide ruby

con @import podemos importar un archivo entero 
ejemplo
@import 'partials/config';
se queda en ambito global

con @use podemos importar
con @forward podemos "copiar" css de otra carpeta

npm run sass:build

con porcentaje podemos luego extender de esas propiedades
%image{
    width:$image-w;
    height:auto;
}

@extend %image;

se tienen que declarar en el mismo archivo

# un mixin es una funcion

podemos por ejemplo en una variable 100vh*.3; y 
al compilar saldra 30vh

@each ![alt text](image.png)



