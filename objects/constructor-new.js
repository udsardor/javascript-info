  // Constructor, operator "new"
// Oddiy ob'ekt syntax'i ya'ni {...}, bu syntax'is bizga faqat bitta ob'ekt yaratishga yordam beradi. Lekin biz bazida ko'plab shunga o'xshash yangi ob'ektlarni yaratishimiz mumkin, masalan, bir nechta foydalanuvchi yoki bir nechta restoran menu'lari va boshqalar.

// Buni biz "Constructor function" lari va "new" operatori yordamida ham bajarishimiz mumkin.

// Constructor function - Konstruktor funksiyasi.
// Constructorlar odatda oddiy funksiyalardir. Bizda ikkita konventatsiyasi mavjud:
// 1 - Ular bosh harf bilan boshlanadi.
// 2 - Ular faqat "new" operatori yordamida bajariladi.

// Misol uchun:

function User(name) {
  this.name = name;
  this.isAdmin = false;
}



let anotherUser = new User("Sardor");
console.log(anotherUser.name); // Sardor
console.log(anotherUser.isAdmin); // False

// Qachonki funksiya "new" operatori yordamida bajarilgan bo'lsa, u manashu ketma-ketlikga amal qiladi:
// 1 - Yangi bo'sh ob'ekt yaratiladi va "this" ga bog'lanadi.
// 2 - Funksiya tanasi bajariladi.Va odatda "this" o'zgartiriladi va yangi xususiyatlar qo'shiladi.
// 3 - This ning qiymati qaytariladi.

// Boshqacha qilib aytganda  "new User(...)" shunday qiladi:

function TheOtherUser(name) {
  // this = {}; //{To'g'ridan to'g'ri} bilvosita

  // this ga yangi xususiyatlar qo'shiladi
  this.name = name;
  this.isAdmin = false;

  // Va shu this qaytariladi. {bilvosita}
}

// Shunday qilib "let user = new User("Jack")" quyidagi bilan birxil natija qaytaradi:
// let user = {
//     name: "Jack",
//     isAdmin: false
//   };

// Va demak biz yangi Userlarni yaratish uchun "new User("Anna")", "new User("Jack")" va h.k.
// Oddiy ob'ekt literallaridan {...}, ancha qisqaroq yaratiladi va o'qishga ham osonroq;
// Bu constructor ning asosiy xususiyati ya'ni qayta yozilishi mumkin bo'lgan ob'ektlar uchun.

// Keling yana bir marta eslatma qilamiz, xoxlagan funskiya constructor bo'lishi mumkin lekin o'qli funksiya ya'ni arrow functionda o'zining this'si yo'qligi sababli bo'la bo'lmaydi. Bosh harf bilan yozish bu shunchaki kelishuv ya'ni aynan new operatori orqali yaratilganligini tezda bilib olish uchun.

// --------------------- new function(){...};

// Qachonki bizda bitta ob'ekt yaratish uchun murakkab kodlar bo'lsa 

// create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

user.name = "Access To object"

console.log(user.name);

// Advanced Stuff - Murakkab narsalar

// (!) Bu bo'limdagi narsalar kamdan-kam ishlatiladi, agar siz hamma narsani bilishga qiziqmasangiz, o'tkazib yuborishingiz mumkin

// Funksiya ichida biz o'sha funksiya "new" operatori yordamida chaqirildimi yo'qmi shuni new.target nomli xossa orqali bilib olishimiz mumkin bo'ladi.

// Bu oddiy funksiyalar chaqiruvi uchun undefined bo'ladi va agar new bilan ishlatilgan bo'lsa bu bizga funksiyani qaytaradi.

function User() {
  console.log(new.target);
}

// without "new": oddiy chaqiruv va console.log undefined ko'rsatadi
User(); // undefined

// with "new": new operatori yordamida chaqirilgan va bu bizga funksiyani o'zini qaytaradi.
new User(); // function User { ... }

// Bizga buni ishlatish funksiya odatiy holatda e'lon qilindimi yoki new orqali e'lon qilinganini bilishimiz uchun yordam beradi.
// Ya'ni konstruktor rejimida yoki odatiy

function AutoCreateUsr(name){
  if(!new.target){ // agar senda konstruktor bo'lmasa men uni sen uchun yarataman
    return new AutoCreateUsr(name) // Men sen uchun yangisini yarataman
  }

  this.name = name
}


let john = AutoCreateUsr("John"); // redirects call to new User
console.log(john.name); // John

// Bu ko'pincha js kutubhonalarida kod syntax'sisini moslashuvchan qilishi mumkin.
// Ehtimol, hamma joyda ham ishlatish mumkin emas, chunki new operatorini tashlab ketish tushunmovchilikka olib kelishi mumkin. Biz hammamiz bilammizki new operatori yangi ob'ektni yaratayotgan bo'ladi.


// Return from constructor - Konstruktor funksiyalaridagi "return"

// Odatda konstruktorlarda return bo'lmaydi. Ularning vazifasi hamma muhim narsalarni this ichiga joylashtirish va avtomatik tarzda natija bo'lish.

// Lekin agar return funksiya ichida bo'lsa , qoida oddiy:

// Agar return ob'ekt qaytarayotgan bo'lsa, o'sha ob'ekt this ning o'rniga qaytadi.
// Agarda return primitive qaytarayotgan bo'lsa bu shunchaki e'tiborga olinmaydi.

// Boshqa so'z bilan aytganda, agar return ob'ekt qaytarayotgan bo'lsa o'sha ob'ektni qaytaradi aks holatda this qaytadi.

// Misol uchun, agarda return ob'ekt qaytarayotgan bo'lsa, bu this'ni bekor qiladi:

function BigUser(){
  this.name = "Johnny";

  return {name: "Godzilla"}; // aynan manashu ob'ekt qaytariladi

}

console.log(BigUser().name) // Godzilla

// Mana agar return bo'sh holatida this ni o'zini qaytaradi:
function SmallUser() {
  this.name = "Stephan"; // Manashu ob'ekt qaytadi.

  return ;
}

console.log(new SmallUser().name); // Stephan

// Boya aytganimizdek odatda konstruktorlarda return bo'lmaydi. Biz buni shunchaki maxsus hatti harakatlarni to'ldirish uchun aytib ketamiz

// (!) Qavslarni olib tashlash

// Qavslarni olib tashlasak ham bo'ladi:

let user = new User; // <-- no parentheses
// same as
let user = new User();

// Bu yerda qavslarni olib tashlash yaxshi deb hisoblanmaydi, lekin syntax'sis spesifikatsiyasiga muvofiq ruhsat beriladi.

// Methods in constructors - Konstruktor funksiyalardagi metodlar

// Ob'ektlarni yaratish uchun konstruktorlardan foydlanish bizga katta moslashuvchanlikni beradi.Konstruktor funktsiyasi ob'ektni qanday qurish va unga nima qo'yish kerakligini aniqlaydigan parametrlarga ega bo'lishi mumkin.

// Albatta biz this ga xususiyatlarni ham qo'shishimiz mumkin.

function methodUsedUser(name){
  // this = {}
  
  this.name = name;

  this.sayHi = function(){
    console.log("Hello " + this.name)
  }
}

let johnny = new methodUsedUser("John");
johnny.sayHi() // Hello john

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

// Murakkab ob'ektlarni yaratish uchun bizda class lar nomli yo'li ham mavjud, bu konstruktorlga qaraganda ham qiyinroq syntax, keyinroq o'rganamiz.

// Xulosa:

// Konstruktor funksiyalar qisqacha aytganda oddiy funksiyalardir, lekin bu yerda o'zaro dasturchilar orasida konstruktor funksiya nomini katta harflar bilan yozish kelishuv bor.

// Konstruktor funksiyalar faqatgina new operatori yordamida chaqirilishi mumkin. This bu boshida bo'sh ob'ekt va keyinchalik to'ldirilishi mumkin.

// Biz bir necha o'xshash ob'ektlarni yaratish uchun konstruktor ishlatishimiz mumkin.

// Javascriptda ko'plab til konstruktor funksiyalar mavjud: bunga o'xshagan Date sanalar uchun, Set o'rnatish uchun va boshqalar.

// (!) Biz ob'ektlar mavzusiga qaytamiz
// Ushbu bobda biz faqat ob'ektlar va konstruktorlar haqida asosiy ma'lumotlarni yoritamiz. Ular keyingi boblarda ma'lumotlar turlari va funktsiyalari haqida ko'proq ma'lumot olish uchun zarurdir.

// Buni o'rganganimizdan so'ng, biz ob'ektlarga qaytamiz va ularni Prototiplar, meros va sinflar bo'limlarida chuqurroq yoritamiz .


// Savollar:

// Ikki funksiya - bitta ob'ekt:

// Yangi kalkulator:

// function Calculator(){
//   this.read = function(){
//     this.a = prompt("A?:")
//     this.b = prompt("B?")
//   }

//   this.sum = function(){
//     return this.a + this.b
//   }

//   this.mul = function(){
//     return this.a * this.b
//   }
// }

// let calculator = new Calculator()
// calculator.read()

// function Accumulator(initialValue){
//   this.value = initialValue;

//   this.read = function(){
//     this.value = this.value + +prompt("How much to add");
//   }
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// console.log(accumulator.value); // shows the sum of these values