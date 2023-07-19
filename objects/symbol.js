// Symbol Type - Simvol ma'lumot turi

// Spesifikatsiyaga ko'ra, faqat ikkita primitive ma'lumot turlari ob'ekt uchun property sifatida ishlatilishi mumkin.
// * String ma'lumot turi
// * Symbol ma'lumot turi

// Aks holda, raqam kabi boshqa turdan foydalanilsa, u avtomatik ravishda satrga aylantiriladi. Demak, bu obj[1]xuddi shunday obj["1"]va obj[true]bir xil obj["true"].

// Hozirgacha biz faqat string'dan foydalanardik.

// Endi Symbolni o'rganamiz, ular biz uchun nima qilishini ko'rib chiqamiz.

// Symbol

// "Symbol" ma'lumot turi bu noyob identifikatorni bildiradi.
// Bu malumot turini yaratish uchun Symbol() orqali yozamiz.

let id = Symbol();

// Yaratayotgan paytimiz, biz symbol uchun description berishimiz ham mumkin bo'ladi, bunday qilish ko'pincha disk raskavarodkasida yordam beradi:

// createdValue bu symbol va id uning descriptioni hisoblanadi.
let createdValue = Symbol("id");

// Symvollar yagona bo'lishi kafolatlanadi. Hatto biz Symvollarni bir xil descriptionlar bilan nomlasak ham, ularning qiymati turlicha bo'ladi. Description shunchaki yorliq (label) hisoblanadi va u hechnimaga ta'sir o'tkazmaydi.
// Misol uchun mana bu yerda bizda ikkita birxil descriptionga ikkida symvollar bor lekin ular baribir bir-biriga teng emas:

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2); // False

// Eslatma. Agar siz Ruby yoki boshqa tillar bilan tanish bo'lsangiz, ularda ham symbol nomli narsa mavjud, lekin adashmang. Javascriptdagi Symbol'lar boshqachadir.

// Shunday qilib, xulosa uchun, symbol bu primitive noyob qiymatdir va uning descriptioni ixtiyoriydir. Keling endi uni qayerda ishlatilishini ko'ramiz.

// (⚠) Symvollar avtomatik tarzda stringlarga konvert bo'lmaydi.
// Ko'pchilik Javascript qiymatlari string uchun avto konvertatsiyaga ega. Misol uchun biz deyarli hamma qiymatni alert ga chiqara olamiz va bu ishlaydi. Symvollar maxsusdir. Ular konvertatsiyaga duch kelmaydi.

// Misol uchun symbol alert ga chiqmaydi, va xatolik ko'rsatadi:

let IP = Symbol("id");
alert(IP); // TypeError: Cannot convert a Symbol value to a string

// (⚠) Eslatma. Alertga chiqarilgan harbir qiymat string data type ga o'giriladi.

// Bu “language guard” ya'ni tilning chalkashligini oldini olish uchun, chunki symvollar va stringlar tubdan turli xil qiymatdirlar va ular "tasodifan" ham stringa o'girilib qolmaydi.

// Agarda biz symbol malumot turini haqiqatda chiqarishni xoxlasak, biz .toString() methodidan foydalansak bo'ladi.

let changedValue = Symbol("id");
alert(changedValue.toString()); // Symbol(id), Va endi ishlaydi.

// Yoki symbol descriptionini olmoqchi bo'lsak .description dan foydalanamiz.

let needDescr = Symbol("My Description");
alert(needDescr.description); // description bu property hisoblanadi va property'lar chaqirilmaydi bunga o'xshab .description() // error

// Hidden Properties - Yashirin Xususiyatlar.

// Symvollar bizga ob'ektlar ichida yashirin xususiyatlarni yaratishga imkon beradi, kodning boshqa hech bir qismi tasodifan kira olmaydi yoki qayta yozmaydi.

let user = {
  name: "Stenly",
};

let identficator = Symbol("id");

user[identficator] = 10;

console.log(user[identficator]); // 10 // Biz malumotga kirishimiz uchun biz symbol key'idan foydalanishimiz kerak bo'ladi.
console.log(user.identficator); // undefined

// Symbol("id") ni stringni o'rniga ishlatishning foydasi nima?
// Ob'ektlar boshqa kod bazasiga tegishli bo'lganligi uchun, ularga property'lar qo'shish xavfsiz emas, va biz bu kod bazasiga qo'shilgan propertyga kirishimiz mumkin. Lekin, symbol ga shunchaki tasodifan access bo'lmaydi.

// Agar biz ob'ekt ichida symboldan foydalanmoqchi bo'lsak, uni [] chak qavslar ga o'rashimiz kk.
// Huddi manabundek:

let newId = Symbol("id");

let user = {
  name: "John",
  [newId]: 123, // not "id": 123
};

// Mana nima uchun bizga id ni key sifatida ishlatishimiz kerak, string "id" emas.

// Simvollar for..in da o'tkazilib yuboriladi.

// Misol uchun:

let usingSymbol = Symbol("id");

let symbolUsr = {
  name: "Stephan",
  age: 18,
  [usingSymbol]: 123,
};

for (let key in symbolUsr) console.log(key); // age,  name, simvol yo'q!

console.log("Directiv access: " + user[usingSymbol]); // 123

// Object.keys (foydalanuvchi) ham ularga e'tibor bermaydi. Bu umumiy "ramziy xususiyatlarni yashirish" tamoyilining bir qismidir. Agar boshqa skript yoki kutubxona ob'ektimiz ustidan o'tib ketsa, u kutilmaganda ramziy xususiyatga kira olmaydi.

// Ammo bundan farqli o'laroq, Object.assign simvollarni copy qiladi.

let idNew = Symbol("id");
let user = {
  [idNew]: 123,
};

let clone = Object.assign({}, user);

alert(clone[idNew]); // 123

// Bu erda hech qanday paradoks yo'q. Bu dizayn bo'yicha. G'oya shundan iboratki, biz ob'ektni klonlash yoki ob'ektlarni birlashtirganda, biz odatda barcha xususiyatlarning nusxalanishini xohlaymiz (shu jumladan kabi belgilar id).

// Global Symbols.

// Ko'rganimiz kabi, odatda hamma simvollar turlichadir, hattoki ular birxil description ga ega bo'lsalar ham. Lekin ba'zan birxil nomlangan simvollar bir xil bo'lishini xoxlaymiz. Misol uchun, biz web dasturlarimizning turli qisimlarida, misol uchun symbolga aniq bir nom bilan kirishni xoxlasak misol uchun "id", buning iloji bor.

// Bunga erishish uchun, bizda global simvol registratsiyasi mavjud. Biz unda simvollarni yaratamiz va keyinroq unga kirishimiz mumkin bo'ladi va biz ularni bir xil nom bilan takrorlashimiz kafolatlanadi.

// Simvol global registrasiyasi uchun bizga Symbol.for(key) orqali qilishimiz mumkin bo'ladi.

// Bu usul key orqali yaratilgan boshqa simvolni qidiradi va agar u mavjud bo'lsa keyinchalik unga kirishni ta'minlaydi, boshqa holatda esa berilgan key orqali yangisini yaratadi va saqlaydi.

// Misol uchun:

let myId = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(myId === idAgain); // true

// Agar bizga dasturimizda keng ko'lamli simvollar kerak bo'lsa ular aynan shuning uchun.

// Symbol.keyFor
// Ko'rdikki, global belgilar uchun Symbol.for(key)nom bilan belgi qaytariladi. Buning teskarisini qilish uchun - global belgi bo'yicha nomni qaytaring - biz quyidagilarni ishlatishimiz mumkin Symbol.keyFor(sym):

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// Symbol.keyForBelgining kalitini qidirish uchun ichki global belgilar registridan foydalanadi . Shunday qilib, u global bo'lmagan belgilar uchun ishlamaydi. Agar belgi global bo'lmasa, uni topa olmaydi va qaytaradi undefined.

// Ya'ni, barcha belgilar descriptionmulkka ega.

// Masalan; misol uchun:

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name

// System symbols

// JavaScript ichkarida ishlatadigan ko'plab "tizim" belgilari mavjud va biz ulardan ob'ektlarimizning turli tomonlarini nozik sozlash uchun foydalanishimiz mumkin.

// Ular taniqli belgilar jadvalidagi spetsifikatsiyada keltirilgan :

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// …va hokazo.

// Masalan, Symbol.toPrimitiveob'ektni ibtidoiy konvertatsiya qilishni tasvirlash imkonini beradi. Tez orada uning ishlatilishini ko'ramiz.

// Tegishli til xususiyatlarini o'rganganimizda boshqa belgilar ham tanish bo'ladi.

// Xulosa

// Symbolnoyob identifikatorlar uchun ibtidoiy tipdir.
// Symbol()Belgilar qo'ng'iroq bilan ixtiyoriy tavsif (nom) bilan yaratiladi .

// Belgilar bir xil nomga ega bo'lsa ham, har doim turli xil qiymatlardir. Agar biz bir xil nomdagi belgilar teng bo'lishini xohlasak, global registrdan foydalanishimiz kerak: nomi sifatida Symbol.for(key)global belgini qaytaradi (kerak bo'lsa yaratadi) . Bir xil bo'lgan keybir nechta qo'ng'iroqlar aynan bir xil belgini qaytaradi.Symbol.for key

// Belgilar ikkita asosiy foydalanish holatiga ega:

// 1 "Yashirin" ob'ekt xususiyatlari.
// Agar biz boshqa skript yoki kutubxonaga "tegishli" ob'ektga xususiyat qo'shmoqchi bo'lsak, biz belgi yaratishimiz va uni xususiyat kaliti sifatida ishlatishimiz mumkin. Ramziy xususiyat ichida ko'rinmaydi for..in, shuning uchun u tasodifiy boshqa xususiyatlar bilan birga qayta ishlanmaydi. Bundan tashqari, unga to'g'ridan-to'g'ri kirish imkoni bo'lmaydi, chunki boshqa skriptda bizning belgimiz yo'q. Shunday qilib, mulk tasodifiy foydalanish yoki qayta yozishdan himoyalangan bo'ladi.
// Shunday qilib, biz "yashirin" narsalarni o'zimizga kerak bo'lgan narsalarga yashira olamiz, lekin boshqalar ko'rmasligi kerak, ramziy xususiyatlardan foydalangan holda.

// 2 JavaScript tomonidan foydalaniladigan ko'plab tizim belgilari mavjud bo'lib, ularga kirish mumkin Symbol.*. Biz ulardan ba'zi o'rnatilgan xatti-harakatlarni o'zgartirish uchun foydalanishimiz mumkin. Misol uchun, keyingi qo'llanmada biz iterablesSymbol.iterator uchun , ob'ektni ibtidoiyga aylantirishni o'rnatish va hokazolardan foydalanamiz.Symbol.toPrimitive


// Texnik jihatdan, belgilar 100% yashirin emas. O'rnatilgan Object.getOwnPropertySymbols(obj) usuli mavjud bo'lib , u bizga barcha belgilarni olish imkonini beradi. Shuningdek, Reflect.ownKeys(obj) nomli usul mavjud bo'lib , u ob'ektning barcha kalitlarini, shu jumladan ramziy kalitlarni ham qaytaradi . Ammo ko'pchilik kutubxonalar, o'rnatilgan funktsiyalar va sintaksis konstruktsiyalari bu usullardan foydalanmaydi.