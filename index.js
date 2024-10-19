const arr = [1, 2, 3];
arr.forEach(console.log);

// Chat 4

console.log(score);

score = 90;
var score;
score = "afd";
console.log(score);

let a = 10,
  b = 20,
  c = 30;
var answer = 40;

if (a >= b) {
  answer = a;
} else if (b > a) {
  answer = b;
}
if (c > answer) {
  answer = c;
}

console.log(answer);

console.log(1 === 1.0);

var key = Symbol("key");
console.log(typeof key);

let num = 42;
let str = "Hello";
let isTrue = true;

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof isTrue); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (배열도 객체로 간주)
console.log(typeof null); // "object" (자바스크립트의 오래된 버그)
console.log(typeof undefined); // "undefined"

if (!"") console.log("" + " is falsy value");

var obj = {};

console.log("0" && "0");

function getStringLength(str) {
  str = str || "";
  return str.length;
}

console.log(getStringLength());
console.log(getStringLength("hello"));

var w = "hello";

var length = w?.length;
console.log(length);

var foo = "1" ?? "default string";
console.log(foo);

var obj = {};
var key = "hello";

obj[key] = "world";

console.log(obj);

var person = {
  last_name: "lee",
  1: 10,
};

console.log(person.last_name);

var x = 1,
  y = 2;
const test = { x, y };
console.log(test);
