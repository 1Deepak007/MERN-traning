console.log("hello");
// alert("hii");

// printing error
console.error("There is some error!");

// printing warning
console.warn("This is a warning !!");

//=================> VARIABLES <=====================
// var    - var declarations are function-scoped or globally scoped.  can be reassigned and re-declared within the same scope.
// let    - let declarations are block-scoped, can be reassigned within the same scope, but not re-declared.
// const  - declarations are block-scoped like let. Initialized during declaration, and their value cannot be reassigned. However, for objects and arrays declared with const, their properties or elements can be modified.

let agee = 20;
agee = 30;
console.log(agee);                                   //30

//===> NOTE --> var vs let          we can define a variable with same name 2 times in var but not in let
var myname = 'Deepak'
var myname = 'Gautam'
let mynamee = 'Deepak'
//let mynamee = 'Gautam'            //ERROR -> already defined, can't define same vari. more than one time
console.log(mynamee)


// Const
const childage = 10;
// childage = 12;                                   // Error : can't redassign
console.log(childage)                               //10

const score = 200;
console.log(score);                                 //200


//=================> DATA TYPES <=====================
// string, numbers, boolean, null, undefined, symbol, object, bigint

let phn = 8374837482;                             //number                
let age1 = 100;                                   //number            
let rating = 3.4;                                 //number            
let isCold = true;                                //boolean                
let con = null;                                   //object    (bug)        
let und = undefined;                              //undefined                
let zi;                                           //undefined
let symbol = Symbol("hoo");                       //symbol
let ary = ['HTML','CSS','JAVASCRIPT']             //array
let obj = {firstname:'DEEPAK',lastname:"GAUTAM"}  //object

console.log(typeof phn);                          //number
console.log(typeof age1);                         //number
console.log(typeof rating);                       //number
console.log(typeof isCold);                       //boolean
console.log(typeof con);                          //object    (bug)
console.log(typeof und);                          //undefined
console.log(typeof zi);                           //undefined
console.log(typeof symbol);                       //symbol
console.log(typeof ary);                          //object
console.log(typeof obj);                          //object



//====================> Strings <======================
let name = 'John Wick';     let J_age = 30;
// Concatination
console.log('My name is '+name+' and I am '+J_age);
// Template string
console.log(`Hello! I am ${name} the killer. I am ${J_age}.`);

// string methods
let s = 'Hello World, This is Deepak, JS is Awesome!';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// string slicing
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());

// split - string in array;
console.log(s.split(' '));          
console.log(s.split(','));          // split by ','


//===================> Arrays <=======================
// arrays are variables that holds multiple values of same or different data types.

// decleration using constructor
let aryCns = new Array(101,202,303,404,505);
console.log(aryCns);

// decleration using array literal
let aryLit = [10,'apple',30.3,'A'];
console.log(aryLit);

let aryLit1 = [10,'apple',30.3,{h1:'hi',h2:'hello'},[1,'a']]
console.log(aryLit1);

// array methods
const fruits = ['apple','mango','orage'];
console.log(fruits[1]);                             // mango

// unshift - add element at the start of array
fruits.unshift('cherry');
console.log(fruits);

// push - add element at the end of array   
fruits.push('banana');
console.log(fruits);

// pop - remove element from the end of array
fruits.pop();
console.log(fruits);

// shift - remove element from the start of array
fruits.shift();
console.log(fruits);

// isArray - tells if it is array or not
console.log(Array.isArray(fruits));             
console.log(Array.isArray('apple'));

// indexOf - tells the index of the element
console.log(fruits.indexOf('apple'));

// includes - tells if the element is present in array or not
console.log(fruits.includes('orange'));




//===================> Object <=======================

const person = {
    fname:'John', lname:'Doe', age:50,
    hobbies:['music','art','craft'],
    address:{
        street:'50 main st',
        city:'New York',
        state:'NY'
    },
    getDetail : function (fname,lname,age,address){
        console.log(`My name is ${fname+' '+lname+' I am '+age+' and lives at '+address}`);
    },
    printForMe(){
        let x = console.log("Hiiiii");
        return x
    }
}

console.log(person.fname);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.city);               
console.log(person.hobbies[1]);                 // art

// destructuring
const {
    fname, lname, age, 
    hobbies:[hoby1,hoby2,hoby3], 
    address:{street,city,state}, 
    func:getDetail
} = person;

console.log(fname);
console.log(hoby1);
console.log(city);
console.log(person.printForMe())
console.log(person.getDetail('Sonu','Singh',20,'22 South Olivander, Carolina'));


//---------------------------------------------------------------
const todos =[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    }
];

