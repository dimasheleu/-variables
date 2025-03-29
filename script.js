let age = 19;
console.log(age);

age = 20;
console.log(age);

const name = "Arman";
console.log(name);

// const блочный элемент и в JS ему дает место для хранение из за этого его не возможно изменить
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

let firstnull = null;
let firstundefined = undefined;

let secondnull = Number(firstnull);
console.log(secondnull);
let thirdnull = String(firstnull);
console.log(thirdnull);

let secondundefined = Number(firstundefined);
console.log(secondundefined);
let thirdundefined = String(firstundefined);
console.log(thirdundefined);

// Динамическая типизация позволяет писать код без строгого указания типов, но требует осторожности с преобразованиями.


let tg = 12655561;
let gt = String(tg);
console.log(typeof gt);


let user = prompt("What your name?");
console.log("Hi " + user + "!");
