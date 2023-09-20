
console.log("hello-world");
let nfagggme:  string = "gdfgfgfdfgdfgdfg";
let c :number = 455;
// function ==> change // "noImplicitAny": false => true in prevous, with no comment   
// function v (s):void  {
//     console.log(s);
// }
//++
// array 
let arr: number[] = [];
arr.forEach(n => n); // when make n.(all method number appear)
//++
// tuples fixed length array and with each element  type
// first element : number second element :string

let user : [number , string  ] =  [2 , "hello"];
let user2 : [number , string , boolean , number  ] =  [2 , "hello" ,  true , 5];
//++
//Enums 
const small = 1 ;
const meduim = 2 ;
const large = 3;

//example pascal case 
// const is best  in declear enum 
const  enum size {small =0, meduim , large };

let mysize : size = size.large;

console.log(mysize);
//++
//function 
function calc(income :number):void {
    console.log(income);
}
//Type Checking  = "noUnusedParameters": true, 
calc(1);
function calc1(income :number):number {
return 0;
}
calc(1);
//strict  = "noImplicitReturns": true,
//example 
function calc2(income :number):number {
if (income > 5 )
    return income*2;
return income
}
calc2(2);

// // "noUnusedLocals": true, 
//example 
function calc3(income :number):number {
    let x;
    if (income > 5 )
        return income*2;
    return income
    }
    calc3(1);

// if parametre is optional ? and use it in function  set default value to it better ?
// function calc4(income :number , taxed?:number):number {  cuse erorrr
function calc4(income :number , taxed=2):number {

    if (income > 5 )
        return taxed*2;
    return income
    }
    calc4(1);
//++
//object 
let employe :{
id : number,
name:string ,
age?:number,
retire:(date:Date) => void
} ={
    id : 1,
    name : "alaa",
    retire:(date:Date) => {
        console.log("HELLO",date);
    }
}
employe.age=5;
console.log(employe)
// ++
//alias specail type
type Employe = {
    id : number,
    name:string ,
    age?:number,
    retire:(date:Date) => void
}
let emp :Employe = {
    id : 1 , 
    name: "salma",
    retire : (data:Date) => {
        console.log("hello");
    }
}
//++
//union type 
// function with many type paramter 
function KgTobs(weight : number | string): number{
    if(typeof weight == "number")
    return weight*2;
    else{
    return parseInt(weight)*2
    }
}
console.log(KgTobs(10));
console.log(KgTobs("10kg"));
//+++
// intersection use ampersand (العطف )
type Draggable ={
    drag:() => void 
}
type Resizable = {
    resize :() =>void 
}
// جمع النوعيتين 
type UIWidget = Draggable & Resizable ;
let textBox:UIWidget = {
    drag : () => {},
    resize : () =>{}
}
//++
// literal type (exact , specific  ) with alis 
type Qantitiy = 50 | 100 ;
let quantity : Qantitiy = 100 ;

type metric =  "cm " | "inch"; 
//++++
// null values , undefine  in function 
function greet (name : string | null | undefined ){
    if(name )
    console.log(name.toUpperCase())
    else{}
    console.log("hola")
}
 //optional chaining 
 type Customer = {
    birthday : Date
 }
 function getCustomer (id : number): Customer |null {
    return id === 0 ? null : {birthday : new Date}
 }

 let customerOne  = getCustomer(0); 
 // optional property acess oprater   ?.
 // يستدعى فقط لما تكون القيمة لا ديفاني و لا نل 
 console.log(customerOne?.birthday);

 let customerTwo  = getCustomer(2);
 console.log(customerTwo?.birthday.getFullYear);
 console.log(customerTwo);
  // لو كانت بيرث دي اختاريه 

 type Customer1 = {
    birthday?: Date
 }
 function getCustomer1 (id : number): Customer1 |null {
    return id === 0 ? null : {birthday : new Date}
 }
 let customerTwo1  = getCustomer(2);
  // يستدعى فقط لما تكون القيمة  البيرث دي لا ديفاني و لا نل getFullYear
 console.log(customerTwo1?.birthday?.getFullYear);

 //optinal element access oprator 
 // customers?.[0]  // array

 //optional call
 let log: any = null;
 log?.('a'); //     اذا لوج فنكشن استدعي اذا  لا القيمه انديفايند
console.log( log?.('a'));







