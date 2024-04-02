interface IBook{
    title:string;
    author:string;
    year:number;
    isbn:string;
}

interface IMagazine{
    name:string;
    topic:string;
    year:number;
    barcode: number;
}

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
console.log(bookLibrary.list());
//devuelve un array de Ibooks

const stringLibrary = new Library<String>();
//devuelve un array de strings