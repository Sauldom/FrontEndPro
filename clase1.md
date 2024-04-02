# Front end avanzado

Arquitecturas frontend

Se suele utilizar un gestor de dependencias y un entorno de desarrollo como webpack

# ECMAscript

Es un estandar oficial para javascript para que el navegador lo interprete de la manera adecuada

sintaxis, semantica, librerias y tecnologias

var siempre es global
const definida en su ambito , 

la mayoria de frameworks suele hacer el codigo retrocompatible

cambian el codigo para minimizar el tamaño del codigo

# Bundle

Es una version de  distribucion, optimizada con todo el codigo de desarrollo
junta el codigo en un solo archivo de distribucion
empaqueta todos los archivos de desarrollo en uno solo 

# Typescript

Un javascript con funcionalidades, como el tipado estático que nos ayuda a escalar
mejor aunque sea un poco verboso

al renombrar cualquier archivo de js lo cambio a ts lo podra ejecutar como ts las extensione son
a titulo informativo porque al ejecutarlo en node ya le estamos diciendo a un programa que lo
ejecute

para instalar typescript:
npm  init -y para iniciar el repo
npm i -D typescript  para instalar la dependencia

en script del packge.json:
"tsc": "tsc ejemplo/typescript/01.example.ts"

npm run tsc

o "dev": "tsc --watch ejemplos/typescript/01-example.ts"
y run dev en modo watch 

crea un archivo js del mismo nombre compilado a js

para ejecutar comando de TS
npx ts-node ejemplos/typescript/01-example.ts


age:number=30 parametro por defec
age?:number parametro opcional

?? operador que pone un valor por defecto si no hay otro

const brands2: (string|number)[]= ["Toyota", "Dacia", "Seat"];
tambien se puede tipar con Array<string|number>
se pueden tipar de las dos maneras

si tenemos que poner sin saber se puede poner
const models:any[] = []

si no declaras un error si tenemos puesto el noIlmpicity no dejara de poner 
tipos any o variables que no hemos controlado de que tipo son

para peticiones se usa unkknown

un enum solo guarda posiciones para ello puedes reasignarlos en el enum
un =

un interfaz es un molde, es parecido que una clase parecido
es como un tipado con esteroides es un modelo a veces en algunas compañias
vienen con una I en el nombre
por ejemplo puede ser un class Car extends Icar


type nos esgloba bajo una palabra diferentes valores y los guarda como un alias
y nos obligara a implementar uno de esos valores y no lo recorre

el enum nos interesa en listas muy largas y que no tenemos muy claro el valor a obtener
si el nombre de un valor es el mismo del valor no seria adecuado usar enum

si queremos usar directamente el valor es mejor un type
el enum se transpila en objeto que se recorre

# clases
la interface no implica funcionalidad pero nos obliga a implementar la forma en la
clase si implementamos  varios tenemos que tener en cuenta que no se pisen el tipado

podemos definir getters y setters

# tipos genéricos

class Library<T>{
    private items: T[]=[];

    add(item: T){
        this.items.push(item);
    }

    list(): T[]{
        return this.items;
    }
}
//reemplaza las Ts dentro de su Scope por la T que he definido al crearla
const bookLibrary = new Library<IBook>();
//le estamos diciendo que bookLibrary en una library de tipo IBook

bookLibrary.add({
    title:"The lord of the rings",
    author:"JRR Tolkien",
    year: 1954,
    isbn:"Qwe1234"
});

const stringLibrary = new Library<String>();

# Hacemos un ejercicio de tipado


lo bueno es que es compilado no nos da errores en tiempo de ejecucion

# JSX

Extension del lenguaje que usa react TSX (Reac+typescript)

# Librerias

Como CDN o descargar son las opciones para las dependencias
CDN es un sistema distribuido
con npm que es un gestor de dependencias
o descargarla directamente

# Toolkits

Herramientas reutilizables como bootstrap
boostrap tienes que cargar todo

tailwind tiene un monton de de funcionalidades pero todo dentro de html

para usarlas mejor mirar las documentaciones

tailwinds en principio no tiene componentes pero
los puedes descargar aparte, sobre todo para layouts

