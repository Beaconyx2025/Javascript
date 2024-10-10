// const arr = [1, 2, 3];
// arr.forEach(console.log);

// var score;
// console.log(score);

// score = 90;
// // var score; (여기는 변수선언 안 먹었어)

// console.log(score);

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
