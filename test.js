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
//     // top.alert("Good bye bitch!!!")
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
// alert(calculator.sum());
// alert(calculator.mul());

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
// alert({}) // autoconvert
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