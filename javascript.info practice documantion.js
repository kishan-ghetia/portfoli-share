// ch 2.17 Arrow functions, the basics
// T.1
// c. 1
let func = (arg1,arg2,.....argN) => expression;

//// c. 2 same as
let func = function(arg1,arg2,.....argN) {
    return expression;
};
// c. 3
let sum = (a,b) => a + b;
 //same as
 let sum =function(a,b){
     return a+b;
 }

 alert(sum (1,2));

// c. 4 () can be omited for single parameter
let double = n = > n * 2;
//same as
let double =function(n){
     return n*2
 }
alert(double(3));

//44444444444444444444444444444444444444444444444
// ()  is needed for no arguments
let sayHi = () => alert("hello");
sayHi();


//555555555555555555555555555555555555555555555555555
//can be used same way as function expression

let age = prompt("what is your age?",18);
let welcome = (age <18) ? () =>alert("hello"): () =>alert("greeting");
welcome();


//6666666666666666666666666666666666666666666666666
//multiline line arrow function
let sum = (a,b) => { // needed for multiline line arrow
    let result =a+b;
    return result ;     // need a reutun if we use curly braces
};

//javscript specials -------------------------------------------------------------------------
// recape of all 2.0000000 to 2.nnnnnn topics


//1111111111111111111111111111111111111111111111
//delimited with semicolon;
alert('hello');alert('world');
//usually line break is treated as delimiter but not prefered becuse it always dosent work
eg alert("there will be an errror after this message")
[1,2].forEach(alert)


//2222222222222222222222222222222222222222222222
//semicolons are not required after the code block {......} and syntax contructs with them like loops:
function f(){
    // no semicolon needed after function declaration
}
for (;;){
     //no semicolon needed after the loop
 }



 //3333333333333333333333333333333333333333333333
 // use of mordern javscript
 'use strict';
// at the top of script of a fuction
 ...



 //44444444444444444444444444444444444444444444444
 //variables
// can be declared using
 let x=5;
 var y = 7 ;
 const z = 10;
 //8 types of data types
 number , bigint ,string,boolean,null,undefined,objects and symbol

// typeof returns the type
 typeof null == "object" // error in js
 typeof function(){ } == "function" // function are treated special


//555555555555555555555555555555555555555555555555555
//interection
prompt(question,[default])
confirm(question)
alert(message)

let userName = prompt("your name ?","alice");
let isTeaWanted = confirm('do you want some tea?');

alert ("visitor:" + userName);// alice
alert("Tea wanted:" + isTeawanted);// true



//6666666666666666666666666666666666666666666666666
//operators////////////////

//arithmectical

*+-/ also % and **
string + number  is string
eg alert('1'+ 2);//12
 or alert(1+'2');//12

 //assignments
a=b //simple
a*=2 //complex

//bitwise
//?????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????

//conditional

cond ? resultA : resultB
resultA is true
resultB if false

//logical operators


&& or || //returns the value where is stops not necessary to be
true or false //
logical NOT ! //converts to boolean and returns the inverse value



// nulish coalescing operators

a ?? b ?? c //find the non null vale from the list in order
//check a then b then c
//return a if its not null else b els c

// comparisions



== //checks value of diffenets types converts them to number ((( except null or undefined)))
null == undefined // they equal each other and nothing else {


alert(0 == false );//true
alerr(0 == '');//true


=== // strict equality operator
// no type conversion
// different type means differnet values to it

//greater/less comparisons  compare string character by char other types are converted to number



//77777777777777777777777777777777777777777777777777777777777777777
//loops 3 types

//1
while (condition){
    ...
}

// 2
do {
    ...
}while (condition);

//3
for (let i = 0; i <10; i++){
    ....
}




//88888888888888888888888888888888888888888888888888888888888888
// switch

uses === strict equlity for comparasions

// example
let age = prompt('your age ?',18);

switch(age){
    case 18:
    alert("wont work");
    break;

    case "18":
    alert ("This works");
    break;

    default:
    alert("comman statement");
}


//9999999999999999999999999999999999999999999999999999999999
//fucntion

//1.declaration
function sum(a,b){
    let return = a+b;

    return result ;
}

//2.expression
let sum = function (a,b){
    let result =a+b;

    return result;
}

//3.arrow fucntion

//exprssion on right side
let sum =(a,b)=> a+b;

//mult-line syntax withn {.....} needs a reurn here ;
let sum a = (a,b)=> {
    //....
    return a+b;

}

//without arguments
 let sayHi = () => alert("hello");

 //with a single argument
 let double = n => n *2;

 //:::::::::::::::::::::::::::::::::::::::::: CODE QUALITY ::::::::::::::::::::::::::::::::::::::::::::::::::
 // debugging in chrome -----------------------------------------------------

//1111111111111111111111111111111111111111111111
// the souce panel
 open an example page in chrome
 tuen on developers tools with f12
 select souce panel
[|>] find the icon and click for all souce files

1. file navigator  to selct all files
2. code editor after selecting the file to show souce code of js
3. javascript debugging panel

//2222222222222222222222222222222222222222222222
//console
we can type cmd and then press enter to execute
it will return the result

//3333333333333333333333333333333333333333333333
// breakpoints
click on line number to add breakpoint(and not code)
breakpoint no pause the code
while paused we can examin current variables and execute commands in the console

you can find list of brekpoints added in the right tab under breakpoints

disbale or unbale by cheking/unchek it
remove by right click and remove

CONDITIONAL breakpoint
 RIGHT CLICK ON THE LINE NUMBER ALLOW TO CREATE ONE IT ONLY TRIGGERS WHEN EXPRESSION IS TRUTHY


//44444444444444444444444444444444444444444444444
 //degugger commands

 //paues code with command in CODE
 //eg :-
 function hello (name){
     let pharse = 'hello,${name}!';

     debugger; //stopes here or pauses
     say(phrase);
 }


 //555555555555555555555555555555555555555555555555555
 //pause and look
 f5 to reload the page after adding breakpoints

    watch - shows currnet valuses for any EXPRESSION
        use + symbol to add and expression and debugger will show its value at any moment

    call stack -shows the nested call chain
        at a moement the debugger is indise hello() call, no function there so its called anonymous
        if you clcik on call stack eg:- anonymous the debugger jumps to corresponfding code and all its variables can be examined as well

    scope - current variables
        Local shows local fucnction varaibles
        Global has global variables (out of any fucntion)
        this keyqord is alos shown


//6666666666666666666666666666666666666666666666666
// tracing the executiion
F8 - Resume
    resumes the execution and if there is no more breakpoints the execution contunies and the debugger loses control
F9 -  Step:
    run tthe next command
F10 - Step over
    run but dont go into the function (user defiend)
    it executes the function but dosent shsow the internal working of it
    execution pauses after that fucnction
F11 -  Step into
    similar to step but behaves differently in case of asynchronous fucnvtion calls
    (becuse step cmd ignores async action, such as setTimeout(scheduled function calls that executed later))
    the Step into goes into their code waitikng for them if necessary
shift+F11 - Step out
    contuine execution and stop at the end of the line of current function
|=/=> enable/disable all breakpoints
(||) - enable/disable automatic pause in case of error
        when open & dev tools is open - script erroe auto pauses the exe
        then we can analyze variables to see what went wrong
        so if out script dies with and error we can open debuggers enables this option and reload the page to see where it dies and whats the error

//77777777777777777777777777777777777777777777777777777777777777777
// logging
to output something to console frome our code we have -- console.log --
for eg :-
for (let i=0;i<5;i++{
    console.log("value,",i);
})
regular user dont see that output to see it either open console panel of dev tools or press Esc while on other panel




// Coding styles ------------------------------------------------------------------------------------------
// our code must be clean and easy to red as possible-- its an art

//1111111111111111111111111111111111111111111111
//syntax

function pow(x, n) { //no space btwn func(parantheses and paramenter), A  space between parantheses/parameter, { on same line after a space
    let result = 1; //  indentation
    //a space after for/if/while
    for (let i = 0; i < n; i++) { // sapce around operators
        result += x; //; mandatory
    }

    return result;
}

let x = prompt("x?", "");// space between arguments
let n = prompt("n?", "");
        // an empty line between logical blocks
if (n < 0) {
    alert(`power ${n} is not supported,
        please enter a non-negative integer number`); // lines are not very long
} else { // } else { without a line break
    alert( pow (x, n ) ); //( (space around) nested call );
}

//2222222222222222222222222222222222222222222222
// curly braces
best fit

if (condition) {
    //do This
    // do that
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (n < 0) {alert(`Power ${n} is not supported`);}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
if (n < 0 )
    alert(`power ${n} is not supported`);
// OOOOOOOOOOOOOOOOKKKKKKKKKKKKKKKKKKKK for one line
if (n < 0) alert(`Power ${n} is not supported`);
// the best rrrrrrrrrrrrrrrrrrr
if (n < 0) {
    alert(`Power ${n} is not supported`);
}


//3333333333333333333333333333333333333333333333
// no one likes to read a long single line of code split it MAX LENGTH 80 to 120

// backtick quotes  ```` allow to split the dting into multiple lines
let str = `
    ECMA International's TC39 is a group of JavaScript developers,
    implementers, academics, and more, collaborating with the community
    to maintain and evolve the definition of JavaScript.
`;



if (id === 123 &&
    moonPhase === 'waning Gibbous' &&
    zodiacSign === 'libra'
) {
    letTheSorceryBegin();
}


//44444444444444444444444444444444444444444444444
//indents
show(parameters,
     aligned, // 5 spaces padding at the left
     one,
     after,
     another
  ) {
  // ...
}
// empty lines between logical blocks
function pow(x, n) {
    let result = 1;
    //                <--
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //                <--
    return result;

}

//555555555555555555555555555555555555555555555555555
// semicolons
use it even if it is avoidable may cause issue sometime

//6666666666666666666666666666666666666666666666666
//nesting levels
// avoid nesting code too many times or deep levels

for eg:-

// use this rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

// not his XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}

// simalr way for if els and returns

// option 1
// less prefered
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

//option 2
//// more prefered
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//77777777777777777777777777777777777777777777777777777777777777777
// function placement
// 3 ways
// decalre function above the code use
eg :- 1
// function declaration
function createElement() {
    ....
}

function setHandler(elem) {
    ....

}
function walkAround() {
    ...
}

// the code use
let elem = create Element();
setHandler(elem);
walkAround();

eg :- 2
//the code use
let elem = createElement();
setHandler(elem);
walkAround();

// -- helper function--
function createElement() {
    ...
}

function setHandler(elem) {
    ...
}

function walkAround() {
    ...
}


eg :- 3
    Mixed a function is declared where its first used

//88888888888888888888888888888888888888888888888888888888888888
Style guides
//9999999999999999999999999999999999999999999999999999999999
Automated Linters


// comments  ------------------------------------------------------------------------------------------
// single lines - //
// multiline - /* ... */

//1111111111111111111111111111111111111111111111
// BAD COMMENTS
------------------------------------------
// This code will do this thing (...) and that thing (...)
// ...and who knows what else...
very;
complex;
code;
---------------------------------------------

But in good code, the amount of such “explanatory” comments should be minimal. Seriously, the code should be easy
to understand without them.

There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be
rewritten instead”.

//example
// BAD FORM
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

//GOOD FORM
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

// EXAMPLE 2
//BAD FORM

//HERE WE ADD WISKEY
for (let i = 0; i < 10 ; i++) {
    let drop = getWiskey();
    smell(drop);
    add(drop, glass);
}

// here we add juice
for (let t =0; t <3; t++) {
        let tomato = getTomato();
        examine(tomato);
        let juice = press(tomato);
        add(juice, glass);
}

//....

//good ways

addWiskey(glass);
Addjuice(glass);

function addWiskey(container){
    for (let i = 0; i < 10; i++) {
        let drop = getWiskey();
        //...
    }
}

function addJuice(container) {
    for (let t = 0; t < 3; t++) {
        let tomato = getTomato();
        //...
    }
}

//2222222222222222222222222222222222222222222222
// good comments

Describe the architecture

    Provide a high-level overview of components, how they interact, what’s the control flow in various situations…
    In short – the bird’s eye view of the code. There’s a special language UML to build high-level architecture
    diagrams explaining the code. Definitely worth studying.

Document function parameters and usage

    There’s a special syntax JSDoc to document a function: usage, parameters, returned value.

for instace:

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}



//3333333333333333333333333333333333333333333333

Why is the task solved this way?

    What’s written is important. But what’s not written may be even more important to understand what’s going on.
    Why is the task solved exactly this way? The code gives no answer.

    If there are many ways to solve the task, why this one? Especially when it’s not the most obvious one.

    Without such comments the following situation is possible:

    1.You (or your colleague) open the code written some time ago, and see that it’s “suboptimal”.

    2.You think: “How stupid I was then, and how much smarter I’m now”, and rewrite using the “more obvious and correct” variant.

    3.…The urge to rewrite was good. But in the process you see that the “more obvious” solution is actually lacking.
      You even dimly remember why, because you already tried it long ago. You revert to the correct variant, but the time was wasted.
    Comments that explain the solution are very important. They help to continue development the right way.


// ninja code  ------------------------------------------------------------------------------------------
// testing mocha ----------------------------------------------------------------------------------------
// Polyfills and transpilers ----------------------------------------------------------------------------------------

//:::::::::::::::::::::::::::::::::::::::::: Objects: the basics ::::::::::::::::::::::::::::::::::::::::::::::::::
// Objects  ------------------------------------------------------------------------------------------

Used to store keyed collection of various data and more complex entities

an object can be created with figure brackets {...} with an optional list of properties

A properties is a -- "key:value" -- pair , where key is string(property name) & value can be anything

we can imagine an object as a cabinet with signed files
every piece of data is dtored in the file by the key
its easy to find a file by its name or add/remove a file

an empty object can be created using
2 syntax

let user = new Object(); //"objects construction" syntax
let user = {}; //"object literal" syntax

//1111111111111111111111111111111111111111111111
//literals and properties

we can put some properties into {...} as "key:value" pairs:

let users = {       // an object
    name: "John",   //by key "name" store value "john"
    age: 30         //by key "age" store value 30
};
// i.e. 1st property of user { key,name,identifier : "sting"||number ,
//      2nd property of user   key,name,identifier : "sting"||number
//                       };

We can add, remove and read files from it any time.

Property values are accessiable using the dot NOtation

//get property values of the objects:
alert( user.name ); // john


//any type
user.isAdmin = true;

//remove a Property
delete user.age;

//use multiword propertie names
// the last property in list may end with comma
let user = {
    name: "john",
    age: 30,
    "liked birds" : true, // multiword property name must be quoted
};

//2222222222222222222222222222222222222222222222
//square brackets

//dot acces dosent work for mutiword
user.likes birds = true //this would give a syntax console.error;

//alternative

let user = {};

//set
user["likes birds"] = true;

// get
alert(user["likes birds"]); //true

//delete
delete user["likes birds"];

//property name as a result of experssion
let key = "likes birds"; //same as user["likes birds"] = true;
user[key] =true;

//key calculated at run time
let user = {
    name: "John",
    age: 30
};
let key = propmt("what do you want to know about the user?", "name");
//access by variable
alert( user[key] );

//dot notation cannot be used in similar ways
let user = {
    name: "jhon",
    age: 30
};
let key = "name";
alert( user.key) //undefined

//3333333333333333333333333333333333333333333333
//computed properties

we can use square brackets in an object literal, when creating an object.

let fruit = prompt("which fruit to buy?", "apple");
let bag = {
    [fruit]: 5,//the name is taked from variable fruit
};

alert( bag.apple ); //if fruit="apple"



//works the same as above
let fruit =prompt("which fruit to buy?", "apple");
let bag = {};
//take propertie name from fruit variables
bag[fruit] = 5 ;



//can write more complex expression insdie square brackets
let fruits = 'apple';
let bag {
    [fruit + 'Computer']:5 //bag.appleComputer = 5
}


//444444444444444444444444444444444444444444444444444444444444444444444444444444
//property value shorthand method

let user =  makeUser("john", 30);
alert(user.name);

function makeUser(name,age) {
    return{
        name: name,
        age: age,
    }
}

// function can also be written like this in shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name this is shorthand
    age,  // same as age: age
    // ...
  };
}

//can use both normal and shorthand
let User = {
     name, //same as name:name
     age: 30
}



//555555555555555555555555555555555555555555555555555555555555555555555555555555
// prop names limatation
//variables cannont used language reserved words like for let return
// these properties are all RIGHT
let obj = {
    for: 1,
    let: 2,
    return: 3
};
//no limit on propertie names
alert( obj.for + obj.let + obj.return );


// other types are automatically converted to string
for instace a number 0 can become a string 0  whenused as property key
let obj = {
    0: "test" //same as "0": "test"
};

//both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] );//test
alert( obj[0] );//test


// will cover it in futuere dosent work glitch ignores 5
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

//666666666666666666666666666666666666666666666666666666666666666666666666666666
//property existence test, "in" operator

let user = {};
alert (user.noSuchPropert === undefined ); // true means "no such property"

//there is also a special operator "in" for that

"key" in object


//for eg :-
let user = {name: "John", age: 30};

alert("age" in user ); // true user.age exists
alert(" blabla" in user ); //false dosent exists


//If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:
let user = { age: 30};

let key = "age";
alert( key in user);// true ,property stored as a variable



// Why does the in operator exist? Isn’t it enough to compare against undefined?
let onj = {
    test: undefined
};

alert( obj.test );//its undefined, so - no such property?
alert("test" in obj ); //true

//777777777777777777777777777777777777777777777777777777777777777777777777777777
//the "for-in" loops

for (key in object) {
    // executes the body for each key among object properties
}

let user = {
    name: "John",
    age: 30,
    isadmin: true
};

for (let key in user) {
    //keys
    alert( key );//name,age ,isadmin
    //value for keys
    alert ( user[key] );// john,30,true
}

//888888888888888888888888888888888888888888888888888888888888888888888888888888
//ordered like objects
Are objects ordered? In other words, if we loop over an object, do we get all properties
in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted,
others appear in creation order. The details follow.

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

//Integer properties? What’s that?
The “integer property” term here means a string that can be converted to-and-from an integer without a change.

So, “49” is an integer property name, because when it’s transformed to an integer number and back,
it’s still the same. But “+49” and “1.2” are not:

// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property


…On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}


So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer.
Adding a plus "+" sign before each code is enough.

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}


// Object  references and copying  ------------------------------------------------------------------------------------------
//111111111111111111111111111111111111111111111111111111111111111111111111111111
//vraibales are copied and stored by value type reference
let message = "hello";
let phrase = message;

//but objects are store by reference

//eg :-
let user = {
    name: "john"
};

in above eg the object is stored somewhere in memory ,
while the user variable has a reference to it
ie user has address of object on its paper
when ever we perform action on object user.name
the js engine looks at the adress and perform the operation on objecct


//so why is it importanat
when an object is copied the reference is copied but the object is not duplicated
let user = {name : "John" };
let admin = user; //copy by references

//memorylocation m2139 = user = admin

// due to this we can use either vaiables to acess the object and modify its contents
let user = { name: 'john' };
let admin = user;
admin.name = 'pete'; //changed by admin references
admin(user.name); //'pete',changes can bee seen from user as well



//222222222222222222222222222222222222222222222222222222222222222222222222222222
//comparison by reference
//this ahappens when variables are assigned to other variable
two objects are equal only if they are same object
// for eg :-
let a = {};
let b = a; // copy by references
alert ( a == b);//true
alert (a === b );//true
//eg 2:-
let a = {};
let b = {};
alert( a == b ); //false

//333333333333333333333333333333333333333333333333333333333333333333333333333333
//cloning and merging , object.assign
//create a duplicate copy
//this is done by copying them on primitive level

let user = {
    name: 'john',
    age: 30
}
let clone = {}; // the new empy object
//let's copy all user Property into it
for ( let key in user ){
    clone[key] = user[key];
}
//now clone is a full independent object
clone.name = "pete"; // chang in data
alert ( user.name ); // still john


//we can aslo use object.assign as well
object.assign(dest, [src1, src2, src3...]);
//eg :-
let user = { name: "John" };

let permission1 = { canView:true };
let permission2 = { canEdit:true };
//copies all properties from permission1 and permission2 into user
Object.assign(user, permission1, permission2) // now user = { name: "John", canView: true, canEdit: true }


//if name already exists it gets overwritten
let user = { name:"john"};
Object.assign(user, {name: "pete"} );
alert(user.name); //now user = {name: "peter" }



//object .assign to replace for..in loop
let user = {
    name:"John",
    age: 30
};
let clone = Object.assign({},user)

//444444444444444444444444444444444444444444444444444444444444444444444444444444
 //nested cloning
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
let user = {
    name: "John",
    sizes: {            //properties reference to other object
        height: 182,
        width:50
    }
};
alert( user.sizes.height ) //182


// its not enoufgh to clone.sizes = user.sizes bcause the user.sizes is an objects
//it will be copied by reference

let user = {
    name:"john",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({},user);

alert(user.sizes === clone.sizes); //true //not cloned rather memory references

user.sizes.width++; //change from ONE
alert(clone.sizes.width);//reflects on another //

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

ANOTHER METOD AVAILABLE AT
We can use recursion to implement it. Or, to not reinvent the wheel, take an
existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

// IMPORTANT IDEA IS OBJECT RETURN AS CONSTANT CAN BE MODIFIED

const user = {
    name:"john"
};

user.name ="pete";//
alert(user.name); // pete



// Garbage collection  ------------------------------------------------------------------------------------------
READ document
// object methods,"this" ----------------------------------------------------------------------------------------

//object are usuallty created to represent entities of real world,like user,ordes and so on
//and in real world user can act select something from shopping cart,login etc
//in js action  can be represnt by function as properties

// this action are called method
//111111111111111111111111111111111111111111111111111111111111111111111111111111
// method example
let user = {
    name: "John",
    age: 30
};

user.sayHI = function(){
    alert("hello");
};
user.sayHI();//hello //method is sayHI of object user

//eg 2:-
let user = {
    //...
};
//first declared
fucntion sayHI() {
    alert("hello!";)
};
//then add as a method
user.sayHI = sayHI;
user.sayHI();

//222222222222222222222222222222222222222222222222222222222222222222222222222222
//method shorthand
//these object do the same
user  = {
    sayHI(): fucntion() {
        alert("hello");
    }
};
//method shorthand looks better, right?
user = {
    sayHI() {// same as "sayHI: function()"
    alert("hello");
    }
};

//333333333333333333333333333333333333333333333333333333333333333333333333333333
// " this " in method
used in access information of object by same obj method
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name); // value of this is user
    }
};

//acsess the object without This
let user = {
    name: "John",
    age: 30,
    sayHI() {
        alert(user.name); // user instead of this
    }
};

// such code is unreliable
let user = {
    name: "john",
    age: 30,

    sayHI() {
        alert(user.name);
    }
};

let admin = user;
user = null;
admin.sayHI(); //cannot read property of name of null



//444444444444444444444444444444444444444444444444444444444444444444444444444444
//this is not bound
//it can be used in any function,even if its not a method

function sayHI(){
    alert( this.name );
}

//this is evaluvated during runtime
//same fuction assigned to 2 different object and has different This

let user = {name:"alice merton no roots"};
let admin = {name:"danyeiya Tuleshova"};

fucntion sayHi() {
    alert( this.name );
}

user.f = sayHi();
admin.f =  sayHi();
//this indise function is the object before the dot
user.f();//john
admin.f();//lucifer

admin['f']();//same as . = ['']
//555555555555555555555555555555555555555555555555555555555555555555555555555555
//calling without an object : this == undefined
code red 404
//the consequences of unbound this
code red 404
//666666666666666666666666666666666666666666666666666666666666666666666666666666
//arrow function have no "this"
code red 404
let user = {
    firstname: "Ilya",
    sayHi() {
        let arrow = () = >alert(this.firsname);
        arrow();
    }
};
user.SayHi(); //Ilya

//Constructor operator "new"  ----------------------------------------------------------------------------------------
//OPtion changing '?.'  ----------------------------------------------------------------------------------------

//ch 4.7 symbol type, [ study again ]

//object property keys may be either of string type, or of symbol type.
//Symbols are guaranteed to be unique. Even if we create many symbols with the same description,
//they are different values. The description is just a label that doesn’t affect anything. eg c. 3

//T.1 Symbols

//c.1 symbol represents a unique identifier.
// id is a new symbol
let id = Symbol();

//c.2 id is a symbol with the description "id"
let id = Symbol("id");

//c.3
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

//T.2 sybmols dont auto convert to String

//c.1
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

//c.2
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

//c.3 symbol.description property to show the description only
let id = Symbol("id");
alert(id.description); // id

//T.3 Hidden properties

//Symbols allow us to create “hidden” properties of an object,
//that no other part of code can accidentally access or overwrite.For instance,
//if we’re working with user objects, that belong to a third-party code.
//We’d like to add identifiers to them.

//c.1
let user ={
    name: "john",
};

let id = Symbol("id");

user[id] = 1;
alert( user[id] );//we can acess the data using the symbol as key

//c.2 benefit of Symbol("id") over a string "id"?
//user objects belongs to another code, that code also works with them,
//we shouldn’t just add any fields to it. But a symbol cannot be accessed accidentally,
//the third-party code probably won’t even see it
