/**
 * Ejercicio 1
 * Define una interfaz product con estas propiedades
 * name string
 * price number
 * description string
 * category string
 * Define un array cont tres productos distintos
 * define la funcion "findeCheapProuct"que recibe un array y devuelve el producto mas barato
 *
 */

interface IProduct {
    name: string;
    price: number;
    description: string;
    category:string;
}

const arrayProducts:IProduct[] = [{
    name: "bicicleta",
    price: 20,
    description: "bici",
    category:"deporte",
},
{
    name: "coche",
    price: 10,
    description: "coche juguete",
    category:"juguete",
},
{
    name: "zapatillas",
    price: 30,
    description: "super zapatillas",
    category:"deporte",
},
]

function findeCheapProduct(products:Array<IProduct>): IProduct{
    let cheaper: IProduct = products[0];

   products.forEach(element => {
        if(element.price < cheaper.price){
            cheaper = element;
        }
    });   
    return cheaper;
}


console.log(findeCheapProduct(arrayProducts));