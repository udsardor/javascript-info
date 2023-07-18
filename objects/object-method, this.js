// Object methods, & "this"

// Ob'ektlar odatda foydalanuvchilar, buyurtmalar va boshqalar kabi haqiqiy dunyo ob'ektlarni ifodalash uchun yaratiladi:

let user = {
  name: "John",
  age: 30,
};

// Haqiqiy dunyoda odamlar(foydalanuvchilar) harakat qilishi mumkin: savatdan biror narsani tanlash, tizimga kirish, chiqish va h.k

// Bu harakatlar ob'ektlarda xususiyatlardagi methodlar ya'ni function'lar orqali amalga oshiriladi.

// Method uchun misol:

let repUser = {
  name: "Sardor",
  age: 19,
};

repUser.sayHI = function () {
  console.log("Hello");
};

repUser.sayHI();

// Biz yuqorida function expression yaratish orqali repUser nomli ob'ektga methodni birlashtirdik va uni pastki qatorda joylashtirdik repUser.sayHI().

// Biz uni chaqirdik va endi u gapira oladi :)

// Ob'ektdagi funksiya method deb nomlanadi.

// Demak bizda repUser nomli ob'ektni ichida sayHI nomli method bor.

// Biz avval funksiya yaratib turib keyin uni ob'ektga copy qilsak ham bo'ladi.

let preUser = {
  //
};

function sayAsSalam() {
  console.log("Assalomu Aleykum");
}

preUser.sayAsSalam = sayAsSalam;

console.log(preUser.sayAsSalam()); // Assalomu Aleykum.

preUser.sayAsSalam(); // Assalomu Aleykum.

// (i) Object-oriented programing - ob'ektga yo'naltirilgan dasturlash.
// Qachonki biz ob'ektlar orqali nimadir qilsak, bu Object-oriented programing, qisqacha "OOP" deyiladi.

// OOP - bu katta narsa, o'ziga xos qiziqarli fan. To'g'ri ob'ektlarni qanday tanlash mumkin? Ularning o'zaro ta'sirini qanday tashkil qilish kerak? Bu arxitektura va bu mavzuda E. Gamma, R. Helm, R. Jonson, J. Vissides tomonidan "Dizayn naqshlari: qayta foydalanish mumkin bo'lgan ob'ektga yo'naltirilgan dasturiy ta'minot elementlari" kabi ajoyib kitoblar mavjud. Ilovalar” muallifi G. Booch va boshqalar.

// Qisqa usuli.

// Ob'ekt method'larini qisqacha yozishning usuli bor:

// Birxil:
let sameUser = {
  sayHi: function () {
    console.log("Hello world");
  },
};

// Qisqa:
let shortUser = {
  // Qisqa usuli yaxshiroq shunday emasmi?
  sayHi() {
    console.log("Hi mdf");
  },
};

// Biz shunchaki "function" kalit so'zini tashlab ketamiz va huddi unga nom bergandek nom yozib qavslar orqali e'lon qilib ketamiz.

// Agar rostini aytadigan bo'lsak aslida ular birxil emas, bu yerda nozik farqlari bor, Lekin bu hozircha muhim emas. Deyarli barcha holatlarda qisqacha ko'rinishi "Syntax"'si avzal ko'riladi.

// "this" in methods
// Tasavvur qiling ob'ekt methodi'ni yaratayabmiz va u method aynan shu ob'ekt ichidagi user ga salom berishi kerak unaqa holatda nima qilamiz.Misol uchun biz ob'ektni ichidagi sayHi methodiga yoki username ni olmoqchi bo'lsak nima qilamiz, user.name, user.sayHi ko'rinishda qilamiz. Lekin aynan ob'ektni ichidagi name yoki age larni olish uchun bizga "this" kalit so'zi kerak bo'ladi.
// this degani aynan manashu ob'ekt degani.




let theUser = {
  fname: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.fname);
  },
};

theUser.sayHi(); // John

// Texnik Jihatdan ob'ektga this siz ha kirsa bo'ladi, ya'ni sirtqi o'zgaruvchi nomi orqali user.name kabi


let outerVar = {
    fname: "Johhny",
    age: 54,
    myFunc(){
        console.log("Hi, my name is: " +  outerVar.fname); // "this" ning o'rniga
    }
}

// Ammo bu kod ishonchsizroq, ya'ni agar biz ob'ektga yangi havola qilmoqchi bo'lsak va misol uchun admin=user va user ni boshqa qiymat bilan qayta yozadigan bo'lsak bu xato ob'ektga kirib qolishi mumkin.

// Mana o'sha xatolik:

let wrongUser = {
    userName: "Milana",
    age: 30,
    sayHi(){
        console.log("hello wrong user: "+this.userName);
    }
};

let nextUser = wrongUser;
wrongUser = null; // qayta yozildi.

nextUser.sayHi() // TypeError: Cannot read property 'name' of null.

// Lekin wrongUser.userName ni o'rniga this.userName qilsak bu ishlaydi.

// "this" bog'lanmagan. --------------------------

// "this" kalit so'zi object methodi bo'lmasa ham u harqanday funksiya ichida ham ishlatilishi mumkin.

// Bu yerda hechqanday xatolik yo'q:
function myFunc(){
    console.log("Hello: " + this.name);
}

// Bu yerdagi this ning qiymati kodni ishga tushirish jarayonida aniqlanadi.
// Misol uchun manabuyerda funksiya 2 ta ob'ektga bo'glanadi va turli xil this larni chaqiradi: 

let firstUser = {name: "Sardor"};
let secondUser = {name: "Blabla"};

function tellHi(){
    console.log(`Hello, my name is: ${this.name}`);
};

firstUser.f = tellHi;
secondUser.f = tellHi;

// Buyerdagi this ikki hil ob'ektga teng bo'ladi:
firstUser.f(); // this == firstUser
secondUser.f();// this == secondUser

secondUser['f'](); // Nuqta yoki to'rtburchak qavsalar farqlanmaydi ikkalasini ham ishlatsa bo'ladi.

// Shunchaki ob'ektsiz chaqirsak:

function nonValued(){
    console.log(this);
};

nonValued(); // undefined qaytadi.
// Bu undefined qaytishi "strict mode" ya'ni qattiq rejim bo'lganligi uchun qaytayabdi. Lekin agarda this.name qiladigan bo'lsak xatolik qaytadi.

// "strict mode" bo'lmagan payti "this"'ning qiymati "global object window" ga teng bo'ladi. Bu haqida keyingi mavzularda gaplashamiz.Odatda bunday chaqiruv dasturlash xatosidir.Agar "this" funksiya ichida mavjud bo'ladigan bo'lsa, u ob'ekt konteksida chaqirilishini kutadi.

// "this" bog'lanaganliklarining qoibatlari. -------------

// Agarda siz boshqa dasturlash tillaridan kelayotgan bo'lsangiz "bound this" g'oyasini ishlatgan bo'lishingiz mumkin.
// Ammo "this" javascripda erking, uning qiymati chaqiruv vaqtida aniqlanadi va uni qayerda e'lon qilinganligiga bog'liq emas, balki nuqtadan oldin qaysi ob'ekt ekanligiga bog'liq.
// "this"'ning qiymati chaqiruv vaqtida aniqlanganligini plus va minus tomonlari mavjud.Bir tomondan funksiya bir nechta ob'ektlar uchun ham ishlatilishi mumkin.Yoki moslashuvchanlik xatolargaham katta yo'lk ochishi mumkin.
// Bizni holatimizda buni qanday ishlatish va xatolardan qanday qochishni bilsak bo'ldi.


// Arrow function da "this" yo'q.

// Arrow function'larda o'zining maxsus "this"'si yo'q. Lekin biz buni odatiy tashqi funksiyadan olishimiz mumkin.

// Misol uchun: manabuyerda arrow() funksiya ichida this ishlatilgan ammo bu "this" ni tashqi funksiyadan oladi.

let arrowUsing = {
    fName: "Ilya",
    sayHi(){
        let arrow = () => console.log(this.fName);
        arrow();
    }
};

arrowUsing.sayHi();

// Bu o'q funktsiyalarining o'ziga xos xususiyati, biz buni alohida olishni xohlamaganimizda foydali bo'ladi, aksincha uni tashqi kontekstdan olish. Keyinchalik o'q funktsiyalari qayta ko'rib chiqilgan bo'limda biz o'q funktsiyalariga chuqurroq kirib boramiz.

// Xulosa:
// * Ob'ektlar ichida saqlangan funksiyalar methodlar deb ataladi.
// * Methodlar ob'ektni "harakat" qilishiga ruxsat beradi object.doSomething();
// * Method'lar ob'ektlarni "this" orqali reference qila oladi.

// "this" ning qiymati ishlash vaqtida aniqlanadi.
// * Qachonki funksiya e'lon qilinganda, uni ichida "this" ishlatishimiz mumkin, lekin uning qiymati funskiya chaqirilganda aniqlanadi.
// * Qachonki funksiya method qilib orqali elon qilnib chaqirilsa, uning ichidagi this ob'ektning o'ziga murojat qiladi.


// E'tibor bering, o'q funktsiyalari maxsusdir: ularda bunday yo'q. Bunga strelka funksiyasi ichida kirganda, u tashqaridan olinadi.

// Questions:

function makeUser(){
    return {
        name: 'John',
        ref: this
    };
};
let madeUser = makeUser();
console.log(madeUser.ref.name); // Natija nima?

// Calculator tuzib bering, unda read(), sum(), mul() nomli methodlar orqali:

// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// Chaining - Zanjirlash:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this
//   },
//   down() {
//     this.step--;
//     return this
//   },
//   showStep: function() { // shows the current step
//     console.log( this.step ); 
//     return this
//   }
// };

// ladder.up().up().down().showStep().down().showStep();