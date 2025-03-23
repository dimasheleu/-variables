let age = 19;
console.log(age);

age = 20;
console.log(age);

const name = "Arman";
console.log(name);

// name = "Beka";
// console.log(name); не будет работать

// var не блочный устарелый прошлый век

let number = 1254;
console.log(typeof number);

let string = "Dimash";
console.log(typeof string);

let boolean = true;
console.log(typeof boolean);

let dimash = null;
console.log(typeof dimash);

let notANumber = NaN;
let invalidOperation = 0 / 0;
console.log(invalidOperation);

let block;
console.log(typeof block);

let str = "777";
let numstr = Number(str);
console.log(numstr);

let num = 777;
let strnum = String(num);
console.log(strnum);


// underrfined вы не как не можете переобразить потому что в этом тип данных такие правила не задавать ничего 

let rrr = "null";
let eee = String(rrr);
console.log(typeof eee);
// да здесь работает

// let number = 1254;
// console.log(typeof number);

let stringnum = String(number);
console.log(stringnum);

let user = prompt("What your name?");
console.log("Hi " + user + "!");
