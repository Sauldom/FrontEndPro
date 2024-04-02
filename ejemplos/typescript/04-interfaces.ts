enum Brands{
    Tesla,
    Toyota,
    Audi,
    Ford
}
enum Brands2{
    TESLA ="tesla",
    TOYOTA = "toyota",
    AUDI = "audi",
    FORD = "ford"
}

type Brand = "Tesla" | "Toyota" | "Audi" | "Ford";

interface Car{
    brand:Brands;
    //brand: Brand
    model:string;
    year?:number;
    start:()=>void;
}

const car1: Car={
    brand: Brands.Toyota,
    //
    model:"Model 3",
    start: ()=> console.log("Tesla model 3 started")
}

console.log(JSON.stringify(car1));
//sale un enumerable y guarda posiciones
