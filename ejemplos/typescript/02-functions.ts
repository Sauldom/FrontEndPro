function formatUser(name:string, age:number=30): string{
    return `Name : ${name}, Age : ${age}`;
}
//devuelve un string

function printUser(name:string, age?:number): void{
    console.log(`Name : ${name}, Age : ${age}`);
}

const user1: string = formatUser("John Doe", 30);
const user2: string = formatUser("John Doe2");
const user3:void = printUser("John Doe")

console.log(user1);
console.log(user1);