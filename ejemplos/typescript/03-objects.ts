const car:{
    brand:string,
    model:string,
    year?:number
} ={
    brand:"Dacia",
    model:"Sandero",
    year:2010
}

const carYear: number = car.year ?? 10;
//operador que pone algo por defecto


const brands: string[]= ["Toyota", "Dacia", "Seat"];
const brands2: (string|number)[]= ["Toyota", "Dacia", "Seat"];
//tambien se puede tipar con Array<string|number>

const models:any[]=["model3"];
const models2: unknown[]= ["model3"];
