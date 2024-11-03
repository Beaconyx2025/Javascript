// const arr = [1,2,3,4,5]
// arr.indexOf(3) //2
// arr.indexOf(6) //-1 (요소를 찾지 못했다)
// string(문서열)// 유사배열...배열아닌다

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// new arr3 = arr1.concat(arr2)

// 010,1234,5678] // "010-1234-5678"
// [010,1234,5678].join("-") //// "010-1234-5678"

// const arr = "안녕 하세요";
// const result = arr.split(" ");
// console.log(result); //["안녕", "하세요"]

// slice(0,3) // 0,1,2
// slice(3) // //从第三位开始到最后

// -가 붙으면 뒤로부터 시직한뜻
// slice(-1,2) //맨마지막 요소를부터 2번째전까지
// slice(-2,2) //맨마지막에서 두번째 요소부터 2번째 직전까지
// slice(2,-1) //2번째 인덱스부터 맨마지막 직전 (맨마지막에서 두번째)

// const arr = [1,2,3,4,5]
// a =  arr.splice(1,3. "안녕하세요" , "저는")
// console.log (arr) // [1,"안녕하세요", "저는",5]
// console.log(a); //[2,3,4]

// const arr = [1,2,3,4,5];
// const temp_arr = [...arr]; 原件复制并保存
// arr.reverse();
// console.log(arr) //[5,4,3,2,1]

// Un-used map:
// const arr = [1, 2, 3, 4, 5];
// const temp = [];
// for (let i = 0; i < arr.length; i++) {
// temp.push(arr[i] + 10); // 11 -> 12 -> 13 -> 14 -> 15
// }
// use map:
// const map = arr.map((el) => el + 10);
// console.log(map);

// const arr = [1, 2, 3, 4, 5];
// const filter_arr = arr.filter((el) => {
//   return el % 2 === 0;
// });
//   （index    반환하는 결과가 true인 요소만）
//     console.log (filter_arr) // [2,4]

//     const post = [
//       {
//         id: 1,
//         title: "example",
//         content: "example",
//         User: { //종첩객체문
//           name: "z1존성용123",
//         },
//       },
//     ];

//     const findPost = post.find((post) => post.id === 1); //post.id 等于1的post赋值给findpost

//     const finePost = {
//       ...findPost,  // 복사, post 객체 그대로 복사 가능합니다.
//       title: "안녕하세요", //새배열 만들어서 내용 바꾸기
//     };

//     const index = post.findIndex ( (post) => {post.id ===1}) // 返回0，因为id的位置是0,종첩객체문반환 0,只有一个大括号，只有一个元素

//     const index = post.every((post) => post.id === 1); //true 因为只有一个ID而且值是1

//     const isSoem = post.some ( (post) => post.id ===1 ) // true, 只要含有一个1都是true
//     if (!isSoem) return

//    const arr = [5,3,2,1,4] --> 서버에서 온 데이터라면 정렬해서 주세요

//     arr.sort() //【1,2,3,4,5】

//     const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8];

// const total = numbers.reduce((sum, n, index) => {
//   if (index >= 2) { // 开始从 index 2，
//     return sum + n;
//   }
//   return sum; //忽略 index 2之前的，0，1
// }, 0); // Initial value for sum

// console.log(total); // Output: 36 (3 + 4 + 5 + 6 + 6 + 7 + 7 + 8)const totalSum = number.slice(7).reduce((sum, n) => sum + n, 0);// 从第七位开始重新新的数组，最后一个表示sum的初始值

// const array = [ [1,2], [3,4], [5,6], [7,8],[9,10,[11,12]]]
// array.flat() = [1,2,3,4,5,6,7,8,9,10,[11,12]]
// array.flat(2) = [1,2,3,4,5,6,7,8,9,10,11,12] 2단계 풀기

// const arr = [1, 2, 1];
// const map = arr.map((e1) => [2, 2]);
//  //对arr数组里的每一个元素赋值【2，2】，
// [ [ 2, 2 ], [ 2, 2 ], [ 2, 2 ] ]
// const resultflat = map.flat();
// // [ 2, 2, 2, 2, 2, 2 ]//拆中括号
// const aaa = arr.flatMap((e1) => [2, 2]);
// console.log(aaa);

// const numbers = [1, 2, 3, 4, 5];

// // 메서드 체이닝을 사용하여 배열의 각 요소를 변형하고 필터링합니다.
// const result = numbers
//   .map((num) => num * 2) // 각 숫자를 2배로 만듭니다.
//   .filter((num) => num > 5) // 5보다 큰 숫자만 남깁니다.
//   .reduce((sum, num) => sum + num, 0); // 남은 숫자들을 합칩니다.

// console.log(result);

// const arr = [{ title: "name", content: "content" }];

// if (arr.includes({ title: "name", content: "content" })) console.log(arr);//fales
// 객체 arr 와 includes 안에 있는 내용 주소 달라요

// arr.forEach((element, index) => {
//   console.log(`Index: ${index}, Element: ${element}`);
// });
// //Index: 0, Element: x Index: 1, Element: y Index: 2, Element: z

// for (const a of arr) {
//   console.log(a + 10);} //每个元素加10打印

//   const arr = { title: "name", content: "content",};
// for (const entries in arr) {
//   console.log(arr[entries]);} //name content 返回值
// for (const key in arr) {
//   console.log(key);} //title content 返回key

//   const obj = { age: 20, height: "190cm" };
// const entries = Object.entries(obj);
// console.log(entries); //[ ['age', 20], ['height', '190cm'] ]

// console.log(entries); //[ ['age', 20], ['height', '190cm'] ]

const arr = [1, "string", [], {}];

arr.forEach((item, index) => {
  if (Object.prototype.toString.call(item) == "[object Array]") {
    console.log(`arr[${index}] 是一个数组`);
  } else {
    console.log(`arr[${index}] 不是数组`);
  }
});

document.getElementById;
document.getElementsByClassName;
document.getElementsByTagNameNS;

document.querySelector;
