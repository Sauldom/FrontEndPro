import { fileURLToPath } from "url";

interface IStudent {
    name:string;
    age:number;
    grade:string;
}

interface IPerson{
    dni?:string;
}

class Student implements IStudent, IPerson{
    name:string;
    age:number;
    grade:string;
    dni?:string;
    surname?:string;

    constructor(
        name:string,
        age:number,
        grade:string
    ){
        this.name=name;
        this.age = age;
        this.grade = grade;
    }
    
    get fullname():string{
        return `${this.name} ${this.surname}`
    }
    set fullname(fullname:string){
        this.name = fullname.split(' ')[0];
        this.surname = fullname.split(' ')[1];
    }
}

const student1 = new Student("Saul", 43, "Keep");
student1.fullname = "Saul Dominguez";
console.log(student1.fullname);