// Ternary Operator

// ? :

// let products = {
//   eats: {
//     "bread": true,
//     "butter": true,
//     "roltan": false,
//     "chocolate": true
//   },
//   drinks: {
//     "cola": true,
//     "fanta": true,
//     "flash": false
//   }
// }

// console.log(products.eats);

// let a = 10;
// let i = 0;

// while(i <= a){
//     console.log(i);
//     i++;
// }

// let subjects = [
//     "Math",
//     "Physys",
//     "Geometry",
//     "History"
// ];

// window.addEventListener("click", () => {
//     // top.close();
//     // top.console.log("Good bye bitch!!!")
//     document.designMode = "on"
// })
// for(let i = 0; i < )

// let calculator = {
//     read(){
//         this.a = +prompt("a?", "");
//         this.b = +prompt("b?", "");
//     },
//     sum(){
//         return this.a + this.b
//     },
//     mul(){
//         return this.a * this.b
//     }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep: function () { // shows the current step
//         console.log(this.step);
//         return this
//     }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep();

// let makeUser = (name, age) => {
//     return "Hello"
// };

// let user1 = makeUser("Ann", 20);
// let user2 = makeUser("Blblabla", 20);
// console.log(user1);
// console.log(user2);

// console.log(!!{});

// console.log(user1, user2);

// let user11 = {
//     name: "heee"
// }

// console.log(user11);

// function Main(name){
//     // this = {}
//     this.name = name;
//     this.isAdmin = false
// }

// let a = {
//     a: 10,
// },
//     b = {
//         b: 10,
//     };

// console.log(a + b);
// console.log({}) // autoconvert
// console.log("apple" < "pineapple");
let id = Symbol("id");

// let a = {
//     name: "Asal",
//     age: 45,
//     [Symbol.toPrimitive](hint){
//         console.log(hint);
//         return this.age
//     }
// }

// let b = {
//     name: "Asal",
//     age: 45,
//     [Symbol.toPrimitive](hint){
//         console.log(hint);
//         return this.age
//     }

// }

// console.log(a - b);

// let c = {
//     name: "Asal",
//     age: 17,
//     [Symbol.toPrimitive](hint){
//         console.log("Hint: " + hint);
//         return hint == "string" ? `{name: "${this.name}"}` : this.age
//     }
// }
let html = document.querySelectorAll("li");

console.log(html);
// console.log(c);
// console.log(+c + 10)

// let st = "My dog, another dog";

// let tg = "dog";

// let post = st.length;

// while(true){
//     let foundPos = st.lastIndexOf(tg, post);
//     if(foundPos == -1) break;

//     console.log(`FOunds at ${post}`);

//     post = foundPos - 1
// }

// let str = "";

// for (let i = 65; i < 220; i++) {
//   str += String.fromCharCode(i);
// }
// console.log(str);

// function ucFirst(str){
//     let sliced =  str.trim().charAt(0).toUpperCase();
//     str = str.trim().substring(1);
//     sliced += str
//     return sliced;
//   }
//   console.log(ucFirst(" Mezza"));

// nd way

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }

//   console.log( ucFirst("   john") ); // John

// Check spam:

// function checkSpam(str){

// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));
// let fruits = [];

// fruits[99999] = 5; // assign a property with the index far greater than its length

// fruits.age = 25; // create a property with an arbitrary name

// console.log(fruits);

// function getMaxSubSum(arr){

// 3 + 3

// operand bu operatorilarning chap va o'ng tarafidagi sonlar
// Agar operatorning (*, /, + - ) bitta operandi bo'lsa bu unary deb ataladi.

let x = 1; // number

x = -x;

console.log(x);

// Binary

let a = 1,
  y = 3;
console.log(y - a); // 2

// Qollab quvvatlanadigan matematik operatsiyalar:

// + qo'shish
// - ayirish
// * ko'paytirish
// / bo'lish
// % qoldiq hisoblaydigan operator sonni nimadirga bo'lgandagi qoldiq
// ** darajaga oshirish

// console.log(12 % 2); // 0
// console.log(5 ** 3);

// let o = "mening",
//     p = "matnim"

// console.log("mening" +  "matning");

// let s = "my " - "string";

// console.log(s);

// let l = 1 > 10   1 kattami 10
// let l = 1 < 10   1 kichikni 10
// console.log(l);

// console.log("1" + 1);
// console.log(1 + "1");

// console.log("1" / 1);

// console.log(2 + 2 + "1");

// console.log("1" + 2 + 2);

// console.log( '6' / '2e' )

console.log(typeof +"1");

console.log(1 + +"1");

console.log(+"1hello");

// no effect
// let r = 1;

// r = +r;

// console.log(r);

// let l = "10";

// console.log(typeof l);
// console.log(typeof +l);

// Boolean

// true  1
// false 0
// Number() === +unary
// birxil
// console.log(+(true));
// console.log(Number(false));

let apples = "2";
let oranges = "3";

console.log(+apples + +oranges); // "23", the binary plus concatenates strings

console.log((10 * 10) ** 2);

// let o = 10 + 10

// let n = 9;
// n = n * 10

// console.log(n);

let n = 2;

// n = n * 2
// n = n - 2
// n *= 2
// n -= 2
// n += 2
// n **= 2
// console.log(n);

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// console.log(a);

// bitta oshirish

// let l = 1;
// l++
// // console.log(l);

// // bitta kamaytirish --
// l--

// console.log(l);

// let a = 2;

// let x = 1 + (a *= 2);
//  x=5

//10
//2
//1
//2
//6
//45px
//$45
//2
//2px
//14
//4
//Nan
//Nan
//Nan

let users = [
  {
    age: 18,
    name: "Mary",
    [Symbol.toPrimitive](hint) {
      return hint == "string" ? this.name : this.age;
    },
  },
  {
    age: 15,
    name: "John",
    [Symbol.toPrimitive](hint) {
      return hint == "string" ? this.name : this.age;
    },
  },
  { age: 35, name: "Philip" },
  { age: 44, name: "Jones" },
];

let filteredUsr = users.filter((item) => item <= 18),
    unUsedUsr = users.filter((item) => item > 18);

console.log(unUsedUsr);
console.log(filteredUsr);


let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
console.log( arr ); // 8, 5, 2, 1, -10
// arr.sort((a, b) => a - b).reverse()