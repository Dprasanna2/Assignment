"use strict";
// const message = 'hello world';
// console.log(message);
exports.__esModule = true;
// var num: number = 10
// var numm: number = 20
// var sum :number= num + numm
// console.log(sum)
// class Greeting { 
//     greet(a , b):void { 
//        console.log("Hello World!!!") 
//        var num: number = a + b
//        console.log(num);
//     } 
//  } 
//  var obj = new Greeting(); 
//  obj.greet(20,20);
// var j:any; 
// var n:any = "a b c" 
// for(j in n) {
//    console.log(n[j])  
// }
// var i:number = 1 
// while(i<=10) { 
//    if (i % 5 == 0) {   
//       console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
//       break     //exit the loop if the first multiple is found 
//    } 
//    i++ 
// }
// var i : number = 1
// function test() {   // function definition    
//    console.log("function called") 
// } 
// test()   
// var foo = (x:number)=>10 + x 
// console.log(foo(100))
// function disp(name:string|string[]) { 
//    if(typeof name == "string") { 
//       console.log(name) 
//    } else { 
//       var i; 
//       for(i = 0;i<name.length;i++) { 
//          console.log(name[i])
//       } 
//    } 
// } 
// disp("mark") 
// console.log("Printing names array....") 
// disp(["Mark","Tom","Mary","John"])
// interface Iperson{
//    firstname : string,
//    lastname: string,
//    mtd : ()=>string
// }
// var employee : Iperson = {
//    firstname : "Sam",
//    lastname : "asd",
//    mtd:():string =>{return "interface called"}
// }
// console.log(employee.firstname)
// console.log(employee.lastname)
// console.log(employee.mtd())
// class Employee{
//    name : string;
//    constructor(name:string){
//       this.name =  name
//    }
//    disp():void {
//       console.log("Function displays Engine is  :   "+this.name)
//    }
// }
// var obj = new Employee("Somnath")
// console.log(obj.name)
// obj.disp()
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
