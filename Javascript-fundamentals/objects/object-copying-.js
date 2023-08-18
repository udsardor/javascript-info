// Ob'ektlarga havolalar va nusxalash.


// Ob'ektlarning "primitive" lardan asosiy farqi shundaki, ob'ektlar havolalar orqali saqlanadi va nusxalanadi. "Primitive" lar esa: "number", "string" and etc. Ular to'liq qiymati bilan o'zgaruvchiga saqlanadi.

// Biz ularni nusxalash orqali nima bo'layotganini tushunishimiz osonlashadi.

// Keling "primitive" stringdan boshlasak.

// Masalan quyida "phrase" nomli o'zgaruvchiga "message" ni nusxalayabmiz:

let message = "Hello!";
let phrase = message;

// Biz natijada ikkita yangi "Hello!" qiymatiga ega o'zgaruvchini ko'rishimiz mumkin bo'ladi. Huddiki:

// "Hello!" ========> message
// "Hello!" ========> phrase

// Aniq javob, shunday emasmi?

// Lekin biz bilgan ob'ektlar unaqa emas.

// Ob'ektga tayinlagan o'zgaruvchi ob'ektni o'zini emas uni shunchaki "malumotini" saqlaydi, boshqa so'z bilan aytganda uning "havola" sini saqlaydi.

// Keling bitta misol ko'raylik:

let user = {
    name: "John"
};

// Va u qanday qilib xotiraga saqlanadi:

// user => "ob'ekt" malumotini 

// ob'ekt malumoti esa xotiraning qayeridadir saqlanadi va biz bu ob'ektga uning havolasi(user) orqali murojat qilishimiz mumkin bo'ladi.

// Masalan biz ob'ekt bilan bog'liq amallarni bajarganimizda, masalan user.name, Javascript mexanizimi manashu havolada nima borligini tekshiradi va ob'ekt ustida amal bajaradi.

// Ya'ni endi ob'ekt nusxalanmoqchi bo'lganda unga shunchaki ob'ektning havolasi beriladi xolos va biz bilgan ob'ektdan ikkita emas shunchaki o'sha ob'ektga 2 ta "havola" bo'ladi:


let newUser = { name: "John" };

let newRefer = user; // Ob'ekt havolasi nusxalandi.

// Endi bizda ikkita o'zgaruvchi bor, ularning har biri bir xil ob'ektga havolani saqlaydi. huddi:

/* newUser ===========> {name: "John"} <============== newRefer */

// Ko'rib turganimizdek bizda ikkita ob'ekt emas, bitta ob'ektga 2 ta havola mavjud bo'ladi.
// Biz endi ob'ektning ustida amal bajarish uchun yoki shunchaki uning tarkibini o'zgartirishimiz uchun 2 ta havoladan foydalanashimiz mumkin:

let oldReference = { name: 'John' };

let newReference = oldReference;

newReference.name = 'Pete'; // newReference nomli yangi havola orqali o'zgartirildi.

console.log(oldReference.name); // 'Pete' nomli qiymatga o'zgardi.

// Go'yoki bizda ikkita kalitli bitta shkaf boredi va bi u shkafni qaysi kalit bilan ochishimizga qaramasdan faqat shu shkafdagi narsalargina o'zgaradi.

// Ma'lumoti bo'yicha taqsimlash:

// Ikkita o'zgaruvchi birxil "havola" ga yo'llanma bo'lsagina teng bo'ladi.

// Masalan quyidagi misolda ular bir-biriga tengdir:

let a = {};
let b = a; // ob'ekt havolasi nusxalandi.

console.log(a == b); // true, ikkalasi ham birxil ob'ektga havola bo'ldi.
console.log(a === b); // true

// Ikkala holatdaham true qiymati qaytadi.

// Va bu erda ikkita mustaqil ob'ekt teng emas, garchi ular bir-biriga o'xshash bo'lsa ham (ikkalasi ham bo'sh):

let exa = {};
let exb = {}; // two independent objects

console.log(exa == exb); // false
console.log(exa === exb); // false

// Ikkala holatdaham false qiymati qaytadi.

// Boshqa xolatlarda taqqoslashda, masalan bunga o'xshash (obj1 > obj2), yoki (obj == 5), bunday xolatlarda ob'ektlar "primitive" larga o'giriladi. Bunday taqqoslash juda kamdan-kam uchraydi.

// const kalit so'zi orqali e'lon qilingan obektlarni tarkibi bemalol o'zgartirilishi mumkin bo'ladi:

const referUser = {
    name: "John"
};

referUser.name = "Pete"; // (*)

console.log(referUser.name); // Pete

// Biz bilishimizcha (*) qo'yilgan qatorda qandaydir xatolik bo'lishi kerak edi, lekin ob'ektlarda bunaqa emas. Chunki o'zgaruvchi const orqali e'lon qilingan taqdirdaham u o'zgaruvchi ob'ektning shunchaki havolasini saqlayotgan bo'ladi. Va shu ob'ekt ichidagi malumotini biz bemalol o'zgartirishimiz mumkin.

// Xato qachon sodir bo'ladi, qachonki biz const orqali el'on qilingan o'zgaruvchini to'liq o'zgartirayotganimizda natijada xatoli yuz beradi:

referUser = "Hello!, Primitive";

console.log(referUser); // error, Assignment to constant variable.

// Biz ob'ektni ichidagi malumotni ham huddiki const orqali e'lon qilingandek o'zgartirishni xoxlamasak, buni ham iloji bor, buni "Property flags and descriptors." manashu bobda ko'rib chiqamiz.

// Demak biz ob'ektlarni o'zgaruvchisini nusxalasak biz unga shuncaki yangi havola yaratgan bo'lamiz.

// Lekin biz ob'ektlarni nusxalashimiz kerak bo'lib qolsachi? ya'ni huddi primitive larni nusxalagandek. Ob'ektlarni nusxalashni ko'plab yo'llarni mavjud shulardan biri:

let oldCopy = {
    firstName: "Johhny",
    age: 50
};

let newCopy = {};

for (let key in oldCopy) {
    newCopy[key] = oldCopy[key]
};

newCopy.firstName = "Sardor";

console.log(newCopy.firstName); // "Sardor"
console.log(oldCopy.firstName); // "Johnny"

// Yoki Object.assign syntax dan ham foydalanashimiz ham mumkin. Syntax:

Object.assign(dest, ...sources);

// "dest" bu yangi obe'ktga yo'l.
// "...sources" esa bu malumotlarni nusxalamoqchi qilmoqchi bo'lgan ob'ektimiz.

// Bu biz ...sources orqali ko'rsatgan ob'ektimizdagi malumotlarni, dest o'rniga ko'rsatilganga nusxalaydi.
// Misol uchun bizda assignedObj bor, va keling unga yangi narsalarni Object.assign usuli orqali yangi narsalarni qo'shib ko'ramiz.

let assignedObj = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into assignedObj
Object.assign(assignedObj, permissions1, permissions2);

// now assignedObj = { name: "John", canView: true, canEdit: true }
console.log(assignedObj.name); // John
console.log(assignedObj.canView); // true
console.log(assignedObj.canEdit); // true

// Agarda property lar oldinroq yozilgan bo'lsa va uni Object.assign uni qayta yozadi:

let againNamed = { name: "John" };

Object.assign(againNamed, { name: "Pete" });

console.log(againNamed.name); // now againNamed = { name: "Pete" }

// Va biz Object.assign syntax orqali ob'ektlarni oddiy tarzda nusxlasak bo'ladi:

let assignedCopy = {
    name: "John",
    age: 30
};

let assignedClone = Object.assign({}, assignedCopy);

console.log(assignedClone.name); // John
console.log(assignedClone.age); // 30

// Bu yerdan assignedClone nomli o'zgaruvchiga assignedCopy dagi barcha xususiyatlar copy bo'ladi.

// Ob'ektlarni nusxalashni yana bir yo'li mavjud, biz uni spread operatori deb nomlaymiz clone = {...user}, keyingi darslarda ko'rib chiqamiz.

// Nested cloning - ichki klonlash.

// Biz shu paytgacha bilamizki ob'ekt xususiyatlari o'zida ham primitive va ob'ektlarni ham saqlashi mumkin:

let userNest = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(userNest.sizes.height); // 182

// Va shundan malumki ob'ekt ichidagi ob'ektni ham "clone.sizes = user.sizes" bunday tarzda nusxalay olmaymiz, U bizga shunchaki yana yangi havola yaratadi xolos:

let nestUser = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let nestClone = Object.assign({}, nestUser);

console.log(nestUser.sizes === nestClone.sizes); // true, bitta ob'ekt

// nestUser and nestClone share sizes
nestUser.sizes.width = 60;    // change a property from one place
console.log(nestClone.sizes.width); // 60, get the result from the other one

// Buni tuzatish va ob'ektlarni yaratish user va clone haqiqatan ham ajratish uchun biz klonlash tsiklidan foydalanishimiz kerak, u har bir qiymatini tekshiradi user[key]va agar u ob'ekt bo'lsa, uning tuzilishini ham takrorlaydi. Bu "chuqur klonlash" yoki "tuzilgan klonlash" deb ataladi. Chuqur klonlashni amalga oshiradigan tuzilgan Clone usuli mavjud.

// Structured clone (Global function) - Tuzilgan klonlash. Syntax:

structuredClone(objectName) // barcha ichki xususiyatlar bilan nusxalanadi.

// StructuredClone usuli ko'plab malumot turlarini nusxalaydi. M: objects, arrays, primitives.

let willStruct = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(willStruct);

console.log(willStruct.sizes === clone.sizes); // false, different objects

// willStruct and clone are totally unrelated now
willStruct.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related.

// O'z o'ziga zanjir yoki havola orqali ob'ektlarni ham structuredClone to'g'ri ravishda qo'llab-quvvatlaydi.

let circularUser = {};

// keling o'z-o'ziga havola yaratamiz.
// user.me o'z-o'ziga havola bo'lmoqda:

circularUser.me = circularUser;

let circularClone = structuredClone(circularUser)

console.log(circularClone.me == circularUser); // false, ikkita boshqa-boshqa ob'ektlar.

// Ko'rib turganimizdek circularClone.me circlularUser ga emas circularClone ning o'ziga murojat qiladi.

// Ammo structuredClone(obj) xato ishlaydiga joylari ham mavjud.

// Misol uchun object ichidagi xususiyat function bo'ladigan bo'lsa:

// error
structuredClone({
    f: function() {}
});

// Ya'ni structuredClone function xususiyatlarni qo'llab-quvvatlamaydi.

// Bunday murakkab vaziyatlarni hal qilish uchun biz klonlash usullari kombinatsiyasidan foydalanishimiz, maxsus kod yozishimiz yoki g'ildirakni qayta ixtiro qilmaslik uchun mavjud dasturni olishimiz kerak bo'lishi mumkin, masalan, JavaScript kutubxonasi lodash dan _.cloneDeep(obj) .

// Summary - Xulosa.

// Ob'ektlar mos yozuvlar bo'yicha tayinlanadi va ko'chiriladi. Boshqacha qilib aytganda, o'zgaruvchi "ob'ekt qiymatini" emas, balki qiymat uchun "ma'lumotnoma" (xotiradagi manzil) ni saqlaydi. Shunday qilib, bunday o'zgaruvchidan nusxa ko'chirish yoki uni funktsiya argumenti sifatida topshirish ob'ektning o'zini emas, balki o'sha havolani nusxalaydi.

// Ko'chirilgan havolalar orqali barcha operatsiyalar (xususiyatlarni qo'shish/o'chirish kabi) bir xil ob'ektda amalga oshiriladi.

// "Haqiqiy nusxa" (klon) yaratish uchun biz Object.assign"sayoz nusxa" (ichiga joylashtirilgan ob'ektlar mos yozuvlar bo'yicha ko'chiriladi) yoki "chuqur klonlash" funksiyasi uchun yoki _.cloneDeepstructuredClone kabi maxsus klonlash dasturidan foydalanishimiz mumkin. (obj).