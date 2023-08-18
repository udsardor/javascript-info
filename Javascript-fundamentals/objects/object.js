// Objects - Obyektlar
// Umumiy tushuncha, holatlar, ishlatishi.
// Biz Malumot turlari darsidan bilamizki, javascriptda 8 ta malumot turi mavjud. Ularning 7 tasi "primitive"(Ibtidoiy) - lar deyiladi, chunki ular faqatgina o'zini ichiga 1 ta narsa oladi ya'ni "string", "number" va yoki boshqalar.

// Ulardan farqli o'laroq ob'ektlar o'zida turli xil complex malumotlarni kalitli toplamlar orqali saqlash imkonini beradi. Javascriptda ob'ektlar deyarli barcha tomoniga kirib boradi ya'ni javascriptda hamma narsa ob'eklardan iborat bo'ladi. Shuning uchun biz javascriptga chuqurroq sho'ng'ishimiz uchun uni o'rganishimiz kerak.

// Ob'ekt figurali qavslar bilan yaratiladi. Xossa "key: value"'lardan iborat bo'ladi. Agar key o'rnida qo'shtirnoqlar orqali yozilsa ham key hisoblanadi ya'ni keylarni qo'shtirnoq orqali ham yasash mumkin va value ham hohlagan narsa bo'lishi mumkin.

// Harbir value keylar orqali saqlanadi va bu bizga qiymatni tezda topish va o'zgartirish,  o'chirish imkonini beradi.

// Ob'ektlar 2 ta sintaksisdan foydanalishi mumkin:

let currentUser = new Object(); // "object constructor" syntax
let userEmpty = {};  // "object literal" syntax
// Odatda figurali qavs orqali yaratish ishlatilinadi.

// Biz "key: value" orqali darrov obe'kt yaratishimiz mumkin:
// User ob'ektida 2 ta xususiyat mavjud: 
let user = {     // Ob'ekt
    name: "John",  // name key'i orqali "John" value'si saqlangan
    age: 30        // age key'i orqali 30 value'si saqlangan
};

// Value'larga kirish uchun "." belgisi qo'yiladi:

// get property values of the object:
console.log(user.name ); // John
console.log(user.age ); // 30

// Value harqanday turdagi malumot bo'lishi mumkin:

user.isAdmin = true;

// property ni olib tashlash uchun "delete" dan foydalanamiz:

delete user.age

console.log(user);

// Biz keylar uchun uzun so'zlarni ham ishlatishimiz mumkin uning uchun bizga qo'shtirnoqlar kerak bo'ladi:

let availableUser = {
    fName: "Johnny",
    uAge: 45,
    "Like a bird": true // "" - tirnoqlar orqali yaratiladi
}

// Value'ga bunday kirish syntax xatolikka olib keladi:

// this would give a syntax error
// user.likes birds = true

// Js buni tushunmaydi chunki nuqta faqatgina 1 ta so'zdan iborat bo'lgan key'lar uchun ishlatiladi va js buni availableUser.likes deb o'ylaydi va keyingi kodni " " o'qishi bilan syntax error'ga olib keladi

// Biz to'rtburchak qavslar ishlatishimiz kerak bo'ladi:
console.log(availableUser["Like a bird"]);


let mainUser = {};

// set - value o'rnatish:
mainUser[`likes bird`] = true;

// get - value'ni olish:
console.log(mainUser["likes bird"]);

// delete - o'chirish:
delete mainUser['likes bird'];

// E'tibor bering harqanday turdagi "tirnoq" ishlatilishi mumkin.

// O'zgaruvchilar orqali ham kirish mumkin:

let anyKey = "likes bird";

mainUser[anyKey] = false;

// Bu yerda masalan keyni endi foydalanuvchi ham bemalool kiritishi mumkin. Va bu bizga katta moslashuvchanlikni beradi:


let testUser = {
    name: "Johnny",
    age: 67
}

let userKey = prompt("Kalit so'z kiriting", "Any key");

console.log( testUser[userKey] );
// console.log(testUser.age);

// Nuqta beligisini shunga o'xshash tarzda ishlatib bo'lmayd:

let creUser = {
    name: "John",
    age: 30,
  };

let key = "name";
console.log( creUser.key ) 

// Biz object literallarini yaratish uchun [] - qavslardan ham foydalanshimiz mumkin:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // Property ning nomi o'zgaruvchi orqali berilgan, o'zgaruvchining nomi esa "prompt" orqali keladi.
};

console.log( bag.apple ); // Agar [fruit] = "apple" ? unda console.log ga 5 soni chiqadi.

// Yana bir ko'rinishi ya'ni yuqoridagi misol huddi shunga o'xshab ishlaydi.

let anyFruit = prompt("Which fruit to buy?", "apple");
let anyBag = {};

// Property uchun nomni anyFruit nomli o'zgaruvchidan berilgan.
anyBag[anyFruit] = 5;

// Kvadrat qavslar ichida murakkab ifodalardan ham foydalanishimiz mumkin.

let complexFruit = 'apple';

let complexBag = {
  [complexFruit + 'Computers']: 5 // complexBag.appleComputers = 5
};
// console.log(complexBag.appleComputers);
// Endi bizning property nomi "appleComputers" bo'ladi.

// Kvadrat qavslar nuqta belgilaridan ko'ra kuchliroqdir. Ular har qanday xususiyat nomlari va o'zgaruvchilarga ruxsat beradi. Lekin ularni yozish ham qiyinroq.

// Shunday qilib, ko'pincha, mulk nomlari ma'lum va sodda bo'lsa, nuqta ishlatiladi. Va agar bizga murakkabroq narsa kerak bo'lsa, biz kvadrat qavslarga o'tamiz.


// Biz haqiqiy kodda mavjud bo'lgan o'zgaruvchilarni property'ning value lari sifatida ishlatamiz.

function makeUser(name, age){
    return {
        name: name,
        age: age
    }
}

let userInfo = makeUser("Sardor", 18);
console.log(userInfo.name); // "Sardor"

// Yuqoridagi kodda makeUser("Sardor", 18) userInfo nomli o'zgaruvchiga tayinlangan. bizning funksiya esa ob'ekt qaytarayabdi. ya'ni o'sha ob'ekt userInfo nomli o'zgaruvchiga biriktirilgan.
// O'zgaruvchidan xususiyat yaratish shunchalik keng tarqalnganki, uni qisqartirishni ham yo'li bor:

function makeUser(name, age) {
    return {
      name, // "huddi" (name: name) "birxil"
      age,  // "huddi" (age: age)  "birxil"
      // ...
    };
  }

// Ammo bunday holatda o'zgaruvchi nomi va property birxil bo'lishi kerak.

// Xuddi shuni oddiy ob'ektda ham foydalanishimiz mumkin:

let user = {
    Nname,  // birxil: Nname:Nname
    age: 30
};

// Biz o'zgaruvchilar darsidan bilamizki, biz o'zgaruchi nomlari uchun javascript o'zi uchun saqlagan nomlaridan foydalana olmas edik. Forex: let, for, return.

// Ammo ob'ekt xususiyatida bunday cheklov yo'q:

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};
  
console.log( obj.for + obj.let + obj.return );  // 6

// Qisqa qilib aytganda property nomlarida hechqanaqa cheklovlar yo'q. Ular harqanday satr yoki belgilardan iborat bo'lishi mumkin.

// Boshqa data type'lari avtomatik ravishda string'ga o'giriladi:
// Masalan bu misolda ob'ekt property'si nomi uchun berilgan 0 qiymati string "0" ga o'giriladi.

let typeObj = {
    0: "test" // same as "0": "test"
  };
  
  // both console.logs access the same property (the number 0 is converted to string "0")
  console.log( typeObj["0"] ); // test
  console.log( typeObj[0] ); // test (same property)


// Javascriptda maxsus property nomiga ega bo'lga __proto__ bor. Biz uni ob'ekt bo'lmagan qiymatga beraolmaymiz.

let anyObj = {};
anyObj.__proto__ = 5; // assign a number
console.log(anyObj.__proto__); // [object Object] - the value is an object, didn't work as intended

// Kodning kommentidan ko'rib turibmizki __proto__ bizga obe'kt uchun property va primitive'lar qiymat bo'la olmas ekan.

// Keyingi qismlarda batafsil ko'rib chiqamiz.

// Javacript'dagi ob'ektlarning boshqa ko'plab tillarga nisbatan e'tiborga loyiq xususiyati shundaki, u harqanday xususiyatga kirishi mumkin. Agar property bo'lmasa ham bizga xatolikni chiqarmaydi. 
// Mavjud bo'lmagan xususiyatni kiritganda qaytadigan qiymat shunchaki undefined va shu orqali biz property mavjudligini osongina tekshirishimiz mumkin:

let userX = {};

console.log( userX.noSuchProperty === undefined ); // true means "no such property"

// Lekin javascriptda buni aniqlash uchun "in" nomli maxsus operatori mavjud.

// Syntax: 

"key" in object;

// Misol uchun:

let userY = {
  name: "Hi",
  age: "preer"
}

console.log("lastName" in userY); //false: userY.lastName mavjud emas.
console.log("age" in userY) // true: userY.age mavjud.

// Eslatma: in tekshirishimiz kerak bo'lgan property'lar qo'shtirnoqlar ichida bo'lishi kerak.
// Agar qo'shtirnoqlarni tashlab ketadigan bo'lsak javascript o'zgaruvchi qidirishga tushib ketadi. Unday ishlatish uchun o'zgaruvchi ochib ishlatish mumkin:

let uSer = {age: 40};

let usrKey = "age";

console.log(usrKey in uSer);  // true: sababi age nomli property.

// Biz shunchaki solishtirish operatori yordamida ham property mavjud yoki yo'qligini tekshirsak bo'lmaydimi? bo'ladi ammo "in" ning vazifasi aynan property mavjud yoki yo'qligini tekshiradi. Va solishtirish xato ishlaganda "in" to'g'ri ishlaydi:

let tstObj = {
  test: undefined,
};

console.log(tstObj.test) // return undefined

console.log("test" in tstObj) // returns true or false.

// Texnik jihatdan olib qaraganda tstObj.test nomli property mavjud va buyerda "in" operatori to'g'ri ishlaydi.

// Bunaqa Holatlar kamdan kam yuz beradi chunki undefined aniq tayinlangan va biz bo'sh yoki yo'q bo'lgan qiymatlarni tekshirish uchun ko'pincha null dan foydalanamiz. "in" kodda shunchaki exotic mehmon.

// Ob'ektning barcha property'larini yurip chiqish uchun, bizda bitta loop turi mavjud: for...in..; bunda biz ishlatgan for(;;)' dan to'laqonli farqli. 

// Syntax':

for (let key in obj){
  // harbir property ni aylanib chiqadi.
}

let testPobj = {
  name: "Jogn",
  age: 40,
  isAdmin: true,
};

for(let key in testPobj){
  // keylarni olish:
  console.log(key); // name, age, isAdmin
  // qiymatlarni olish:
  console.log(testPobj[key]) // "Jogn", 40, true
}

// Biz key nomli o'zgaruvchi bo'lishi shart emas biz xoxlagan turdagi nom bersak bo'ladi: for(let prop in objName).

// Ob'ektlar tartiblanganmi?, yoki boshqa so'z bilan aytganda biz ob'ektlarni loop iteratsiya qiladigan bo'lsak, biz ob'ektdagi ketma-ketlikni olamizmi yoki sonlardagimi?:

// Misol sifatida bu ob'ektni ko'raylik:

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// Ha qachonki biz ob'ektlarni keylari uchun son ko'rinishidagi nomlarni qo'yadigan bo'lsak shunday natija hosil bo'ladi.

// Bu bizga foydali bo'lishi mumkin masalan te'lefon nomerlarining kodlariga qarasak +1 ya'ni America tartib bo'yicha birinchi keladi keyin esa 41 shveytsariya keladi va boshqalar tartib bo'yicha keladi.

// Agarda biz keylarga bergan sonli nomimiz butun son bo'lmasa unda bu tartiblanmaydi masalan: "+49", "1.2" lar v.hk

// Boshqa bir shaklda agar keylar son bo'lmasa demak u yaratilgandaki tartib orqali ketadi:
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  console.log( prop ); // name, surname, age
}

// Shunday qilib buni tuzatish uchun:

let codec = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let codec in codes) {
  console.log( +codec ); // 49, 41, 44, 1
}

// Xulosa

// Xulosa
