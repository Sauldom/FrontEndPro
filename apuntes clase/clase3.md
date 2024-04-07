# errores

al migrar de css a scss tenemos el problemas por ejemplo que los math
no podemos usar la barra alegrremente y tenemos que utilizar las funciones de
math del propio scss
math.div

hay que importarlas con @use "sass:math";

# mixin
sirve para las media query por ejemplo

@mixin tablet {
    @media screen and (max-width: $breakpoint-tablet) {
        @content
    }
}
y el selector de content metemos el contenido del mixin cuando lo llamemos

@include tablet{
    width:100%
}
utilizamos n el scss donde sea el mismo nombre que la media quer que hemos creado por
ejemplo en la carpeta responsive
entonces cuando se llama a la media query table en content pone lo que hemos
puesto en include tablet

# cambiar de javascript a typescript

la palabra reservada as en Ts la typa directamente
        const hours = document.getElementById("hours") as HTMLElement;

si al declarar una variable le asignamos un valor Ts por defecto tipeara esa
variable con el mismo tipo con el que la hemos asignado
asi que si queremos que sea de dos tipos de valor debermos tiparla como tal
porque sino solo aceptara ese valor

pagina json to typecript types
o una extension past json as code

te permite tipar copiando el json y te marca de que tipo es cada
una, si tiene un return con un catch puede salta un error de que devuelve void
por lo que al tipar tendriasmos que añadir void |

ewl ejemplo la tenemos en api.ts porque se pueden tipar las funciones y las arrow 
de manera un poco diferente porque hay un arrow adicional en las arrow a la hora
de tipar

las promesas como pueden ser deficnicas podemos hacer por ejemplo
await getCharacters(house) || []
porque puede devolver un array vacio
al hacer el filter en el main ts de la carga de caracteres 

podemos tipar como ValidityState
keyof(ValidityState)[]

export type ValidityOptions = keyof ValidityState;
Aquí está la explicación paso a paso:

type ValidityOptions: Define un nuevo tipo llamado ValidityOptions.
keyof ValidityState: keyof es un operador en TypeScript que obtiene el tipo de todas las claves en un tipo dado. En este caso, keyof ValidityState devuelve una unión de todas las claves (propiedades) de la interfaz ValidityState.
export: Exporta el tipo ValidityOptions para que pueda ser utilizado en otros archivos TypeScript.
En resumen, ValidityOptions es un tipo que representa las claves disponibles en la interfaz ValidityState, que se utiliza comúnmente para validar el estado de los elementos del formulario en JavaScript y TypeScript.

a la hora de poner un proxy en parcel hay qe mirar que sea secure si queremos acceder a una pagina con https

# Vite




