// JavaScript Only Hoists Declarations not initialisations



// console.log(a);// a cant be called or modified without initialisation 
let a = 10;
console.log(b);
var b = 5;


// let a = 7;// a variable of dicleare with let cant be re defined
// var a = 8;// a variable of dicleare with let cant be re defined
var b = 9;
a = 15;// remember this is aloso allowed

// const c;// cannot define const without declearing
let e;
e = 4;
console.log(e);

const d = 5;
a = 25;
// d = 15;// const cant be reinitialised too
