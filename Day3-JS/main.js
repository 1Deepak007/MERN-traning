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

//----------------------------------------------------
// Destructuring the object

const prsn = {
    firstName: 'John',
    lastName: 'Doe',
    age_j: 30
};

const { firstName, lastName, age_j } = prsn;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age_j); // Output: 30

//----------------------------------------------------

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
const todos = [
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


// JSON.stringify() is a method in JS to convert JS objects into JSON strings.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// FOR loop
for(let i=1; i<=5; i++){
    console.log(`For Loop : ${i}`)
}

// WHILE loop
let j=1;
while(j<=5){
    console.log(`While loop : ${j}`)
    j++;
}

for(let i=0; i<todos.length; i++){
    console.log(`${todos[i].id}  ${todos[i].text}.  Completed:${todos[i].isCompleted}`)
}

// for of loop
for(let todo of todos){
    console.log(todo);
}

// foreach 
todos.forEach(function(todo){
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
    return todo.text;
})
console.log(todoText)

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todoCompleted)

todoCompleted.map(function(todo){
    console.log(todo.text)
})

//--------------------------------------------------------------
// == match value; === match value and d.type both.

const ui = '10';
if(ui===10){                 
    console.log('value is 10');
}else{
    console.log('value is not 10')
}


// if   else if     else
const io = 11;
if(io>10){
    console.log(`${io} is greater than 10`)
}
else if(io<10){
    console.log(`${io} is less than 10`)
}
else{
    console.log(`${io} is 10`)
}


const q1 = true;   const q2 = false;
if(q1 == true && q2 == true){
    console.log(`RESULT : true`)
}
else if(q1 == true && q2 == false){
    console.log(`RESULT : false`)
}
else if(q1 == false && q2 == false){
    console.log(`RESULT : false.`)
}else{
    console.log('Something went wrong');
}

//--------------------------------------------------------
// TERNARY OPERATOR
let x = 10;     
let clr = x>10 ? 'red' : 'blue';      // if x is true -> output 'red'    else -> output 'blue'
console.log(clr);

//-----------------------------------------------------------------
// SWITCH STATEMENT
let color = 'white';
switch(color){
    case 'green':
        console.log('color is green')
        break
    case 'yellow':
        console.log('color is yellow')
        break
    default:                           // no above case match then default case runs.
        console.log('color is not green or yellow')
        break
}

//-----------------------------------------------------------------
// FUNCTIONS
function add(num1,num2){
    console.log(`sum if ${num1} and ${num2} is ${num1+num2}`)
}
add(10,10);

function add2(num1,num2){
    return num1+num2;
}
console.log(add2(100,100));

// ARROW FUNCTION
const add4 = (num1,num2) => { return num1+num2 }
console.log(add4(99,99))

const sub = (num1,num2) => num1-num2
console.log(sub(10,8));

todos.forEach((todo)=>console.log(todo.text));          



//-----------------------------------------------------------------
/****************** OBJECT ORIENTED PROGRAMMING *******************/
//-----------------------------------------------------------------

//# Constructor function
function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.GetDetail = function(){
        return `${this.firstname} ${this.lastName} was born on ${this.dob.getFullYear() +'/'+ this.dob.getMonth() +'/'+ this.dob.getDate()}`
    }

    this.GetFullName = function(){
        return `${this.firstname} ${this.lastName}`
    }
}

// note : person1 is Instance object of class Person
const person1 = new Person('John', 'Doe', '4-3-1994');
console.log(person1);
// console.log(`${person1.firstname} ${person1.lastName} was born on ${person1.dob.getFullYear() +'/'+ person1.dob.getMonth() +'/'+ person1.dob.getDate()}`);
console.log(person1.GetDetail());
console.log(person1.GetFullName());

const person2 = new Person('Scot', 'James', '18-6-2000');
console.log(person2.GetDetail());
console.log(person2.GetFullName());

//-----------------------------------------------------------------

//# Class
class People{
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

}

const people1 = new People('Jane','Carls','10-10-1998');
const people2 = new People('Siyara','Sane','10-12-1999');

console.log(people1.getFullName());
console.log(people1.getBirthYear());

//-----------------------------------------------------------------

//window object represents the global window in a browser environment.
console.log(window);    // see o/p in chrome console not on terminal

//=====================> SELECTORS
//============> 1. Single Element Selectors
// window.alert('Hi');
// alert('Hii');
console.log(document.getElementById('my-form'));       // return (whole form) element with name and id of attributes inside it

//# Note : querySelector method "returns the first element that matches the specified CSS selector" within the document.If no matching element is found, it returns null.
console.log(document.querySelector('#my-form'));       // return (whole form) element with name and id of attributes inside it.
//# Note : The querySelectorAll method "returns a NodeList containing all elements that match the specified CSS selector" within the document.
console.log(document.querySelector('.container'));     // return (whole container) element with name and id of attributes inside it

//============> 2. Multiple Element Selectors
console.log(document.querySelectorAll('.fruit'));    // return nodelist which is array of elements with name and id
console.log(document.querySelector('.fruit'));       // return 1st element with name and id of attributes inside it

console.log(document.getElementsByClassName('fruit'));  // return nodelist which is array of elements with name and id
console.log(document.getElementsByTagName('li'));       // return all <li> elements in document with id


let allitems = document.querySelectorAll('.fruit');
allitems.forEach((item) => console.log(item));



//-----------------------------------------------------------------
/********************** Manipulating the DOM *********************/
//-----------------------------------------------------------------

// const ul = document.querySelector('.fruits');
const ul = document.querySelector('#users');
ul.remove();             // deletes the whole ul element

const items = document.querySelector(".fruits");
items.lastElementChild.remove();                     //remove last element

items.firstElementChild.textContent = "Mango";       // changing element
items.children[1].innerHTML = "<h1>Apple</h1>";      // changing element
items.lastElementChild.innerHTML = "<h4>Guava</h4>"; // changing element

const btn = document.querySelector("#subBtn");
btn.style.background = "red";

// add eventlistner
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.warn('Submit button clicked');
    console.log(e.target);                          // return button
    console.log(e.target.id);                       // return button id - similarly get other attributes of button also
    document.querySelector('#my-form').style.background = 'pink';
    document.querySelector('body').classList.add('bg-dark');
});


btn.addEventListener('mouseover',()=>{
    document.querySelector('#my-form').style.background = 'lightblue';
    document.querySelector('#my-form').mouseout = alert('Mouseout event occured');
    document.querySelector('#my-form').mouse = alert('Mousein event occured');
});



const btn1 = document.getElementById('clickEvnt');
btn1.addEventListener('click',()=>{alert('Click event occured')});                      //Fired when a mouse button is clicked

const btn2 = document.getElementById('musDwnEvnt');
btn2.addEventListener('mousedown', ()=>{alert('Mousedown event occured')})                      // Fired when a mouse button is pressed down on an element

const btn3 = document.getElementById('musUpEvnt',()=>{alert('Mouseup event occured')});         // Fired when a mouse button is released on an element.
const btn4 = document.getElementById('musOvrEvnt',()=>{alert('Mouseover event occured')});      // Fired when the mouse pointer enters the bounds of an element
const btn5 = document.getElementById('musOutEvnt',()=>{alert('Mouseout event occured')});       //   Fired when the mouse pointer leaves the bounds of an element
const btn6 = document.getElementById('musMovEvnt',()=>{alert('Mousemove event occured')});      //  Fired when the mouse pointer moves over an element.
const btn7 = document.getElementById('musCntxtEvnt',()=>{alert('Contextmenu event occured')});  //Fired when the right mouse button is clicked (pressed and released) on an element, usually opening a context menu.

//-----------------------------------------------------------------

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const empList = document.querySelector('#employees');

myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('fill all fields');
    }
    else{
        console.log(`Hello ${nameInput.value}. Your email is ${emailInput.value}`)
    }
}


const e_form = document.getElementById('e_form');
const e_msg  =  document.getElementById('e_msg');
const e_name  =  document.getElementById('e_name');
const e_email  =  document.getElementById('e_email');
const e_subBtn  =  document.getElementById('e_subBtn');
const e_list = document.getElementById('users'); 

e_form.addEventListener('submit',on_submit);

function on_submit(e){
    e.preventDefault();
    if( e_email.value === '' && e_name.value === ''){
        e_msg.classList.add('error');
        e_msg.innerHTML = 'All fields are required';


        // alert('All fields are required');
        setTimeout(()=>e_msg.remove(), 3000);
    }
    else if(e_name.value === ''){
        e_msg.classList.add('error');
        e_msg.innerHTML = 'Name field is required';


        // alert('All fields are required');
        setTimeout(()=>e_msg.remove(), 3000);
    }
    else if( e_email.value === ''){
        e_msg.classList.add('error');
        e_msg.innerHTML = 'Email field is required';


        // alert('All fields are required');
        setTimeout(()=>e_msg.remove(), 3000);
    }
    else{
        console.log(`Welcome ${e_name.value}. Your email is ${e_email.value}.`);
        e_msg.innerText = `${e_name.value} you are loggedIn successfully.`;

        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${e_name.value} : ${e_email.value}`));
        e_list.appendChild(li);


        //clear fields
        e_name.value = '';
        e_email.value = '';

    }
}



