// const student1 = {
//     name :"Anil",
//     Age :20,
//     Grade :A++,
//     getMarks : function(){
//         return this.Grade;
//     }
// }

// const student2 = {
//     name :"Rohit",
//     Age :20,
//     Grade :A++,
//     getMarks : function(){
//         return this.Grade; 
//     }
// }

// const student3 = {
//     name :"Jatin",
//     Age :20,
//     Grade :A++,
//     getMarks : function(){
//         return this.Grade;
//     }
// }

// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.Sayhello =()=>{
//     console.log("hello");
// }

// arr2.Sayhello =()=>{
//     console.log("hello");
// // }

// function personMaker(name,age){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi , My name is ${name}`);
//         },
//     }; return person;
// }

// function person (name,age){
//     this.name =name;
//     this.age=age;
// }

// let p1 = new person("Anil" , 23);
// let p2 = new person("Rohit " , 23);

class student{
    constructor(name ,age, marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    talk (){
        console.log(`Hi , My name is ${this.name}`);
    }
}

let student1 = new student("Anil" ,23,100);

class Teahcer{
    constructor(name ,age, Sujbect){
        this.name=name;
        this.age=age;
        this.Subject= Subject;  
    }

    talk (){
        console.log(`Hi , My name is ${this.name}`);
    }
}

let Teacher1 = new Teacher("Anil" ,23,100);