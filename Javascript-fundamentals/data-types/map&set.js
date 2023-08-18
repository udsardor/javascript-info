// Biz shu paytgacha ikkita complex malumot tuzilasi haqida o'rgandik:

// * Ob'ektlar property va value qilib saqlash uchun
// * Arraylar tartiblangan kolleksiya orqali ma'lumotlarni saqlash

// Lekin bu haqiqiy hayotda yetarli emas, mana nima uchun Map && Set ham mavjud.

// #Map
// Map bu keylangan malumotlardir, huddi ob'ektlarga o'xshab. Lekin asosiy farq shundaki Map bizlarga hohlagan ma'lumot turi orqali key yaratishimizga ruxsat beradi.

// Map'ning method'lari va property'lari:

// new Map() - map yaratadi.
// map.set(key, value) - kalit orqali qiymat saqlaydi.
// map.get(key) - key orqali qiymat qayataradi, undefined bo'ladi agar mapda o'sha key bo'lmasa.
// map.has(key) - agarda ko'rsatilgan key mavjud bo'lsa true qaytaradi aks holda false.
// map.delete(key) - elementlarni (kalit va qiymat) juftligida olib tashlaydi.
// map.clear() - mapda hamma narsani tozalab tashlaydi.
// map.size() - mapdagi mavjud qiymatni sonini qaytaradi.

// Misol uchun:

let map = new Map();

map.set("1", "str1"); // stringli key
map.set(1, "num1"); // numberli key
map.set(true, "bool1"); // booleanli key

// oddiy ob'ektni eslaysizmi? u keylarni stringa konvert qilib yuborardi.
// Map typelarni ham ushlash turadi, va ular ikklasi turlichadir.

console.log(map.get(1)); // num1
console.log(map.get("1")); // str1

console.log(map.size); // 3

// Ko'rib turganimizdek hechbir property string ma'lumot turiga konvert bo'lib ketmadi, hohlagan turdagi malumot turi mumkindir.

// map[key] bu sintaxis Mapdan qiymat olish uchun to'g'ri yo'l emas.

// Garchi map[key] ishlasa ham, misol uchun map[key] = 2, bizga javascript mapga huddi oddiy ob'ekt sifatida qaraydi, va cheklovlar yana joriy qilinadi (faqa string va symbol)...keylarga ruxsat beriladi.
// Shuning uchun biz mapdan: map va set orqali foydalanishimiz kerak map.set(xossa, "qiymat")

// Map hattoki ob'ektlarni ham key sifatida ishlatishga imkon beradi:

let john = { name: "John" };

let visitersCount = new Map();

map.set(john, 123);

console.log(map.get(john)); // 123

// Ob'ektlarni ham key sifatida ishlatish aynan diqqatga sazovor va Mapning eng muhim qisimlaridan biri hisoblanadi. Huddi shu narsa ob'ekt uchun hisobga olinmaydi, string bo'lsa ok, lekin biz Object ni Object key'i sifatida ishlata olmaymiz:

let jogn = { name: "Jogn" },
  ben = { name: "ben" };

let visitersCount1 = {};

visitersCount[ben] = 234;
visitersCount1[jogn] = 123;

console.log(visitersCount1["[object Object]"]); // 123

// visitsCountObjOb'ekt bo'lgani kabi , u va yuqoridagi Objectkabi barcha kalitlarni bir xil satrga o'zgartiradi . Albatta, biz xohlagan narsa emas.johnben"[object Object]"

// Qanday qilib Map keylarni taqqoslaydi

// Map equivalyentlikni tekshirish uchun, SamValueZero nomli algoritmdan foydalanadi. Bu tahminan qattiq tenglikga o'xshaydi, lekin farqi NaN - NaNga teng bo'ladi, va shuning uchun uni ham key sifatida ishlatish mumkin.

// Bu algoritm o'zgartirilmaydi yoki kostumizatsiya bo'lmaydi.

// chaining - zanjirlash
// Harbitta map ni chaqiruv o'sha mapni o'zinin ham qaytaradi, shunday qilib biz mapni chain.chain qilib ishlatishimiz mumkin:
map.set(1, "str").set("str", 1).map(true, "bool");
console.log(map.get(true));

// Map ustida iteratsiya
// Mapni iteratsiya qilish uchun bizda 3 ta method mavjud:
// map.key() - keylar uchun iteratsiya qilib beradi
// map.values() - valuelar uchun iteratsiya qilib beradi
// map.entries() - yozuvlar uchun iteratsiyani qaytaradi [key, value], u default boʻyicha for..of.

// Misol uchun:
// new Map()

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// keylar uchun iteratsiya:

for (let vegetable of recipeMap.keys) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// valuelar uchun iteratsiya:

for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// [key va values lar uchun]:
for (let entry of recipeMap) {
  // recipeMap.entries() bilan birxil
  console.log(entry); // cucumber,500 (and so on)
}

// Takrorlash qiymatlar kiritilgan tartibda davom etadi. Mapodatdagidan farqli o'laroq, bu tartibni saqlaydi Object.

// Bundan tashqari Map da o'rnatilgan forEach methodi mavjud, huddi Array kabi:

// harbitta (key, value) uchun birmarta function ga call qiladi

recipeMap.forEach((value, key, map) => {
  console.log(`${key} : ${value}`); // cucumber: 500, etc
});

// Object.entries: Map from Object

// Qachon Map yaratilsa, biz array ni yoki boshqa iterable llarni e'lon qilayotgan payti key/value sifatida berib ketishimiz mumkin:

// Bilamizki [] massivlar iterable hisoblanadi

let myMap = new Map([
  ["xossa", "qiymat"],
  [1, "1"],
  [true, "boolean"],
]);

console.log(myMap.get("xossa"));

// Agar bizda oddiy ob'ekt bo'lsa va biz undan ob'ekt yaratmoqchi bo'lsak Map, biz o'rnatilgan Object.entries(obj) usulidan foydalanishimiz mumkin , bu ob'ekt uchun aynan shu formatdagi kalit/qiymat juftlari qatorini qaytaradi.

// Shunday qilib, biz bunday ob'ektdan xarita yaratishimiz mumkin:

let obj = {
  name: "AnyBody",
  age: 98,
};

let mapped = new Map(Object.entries(obj));

console.log(mapped.get("name")); // anyBody

// Bu yerda Object.entries(obj) huddi  manashu formatni qaytaradi: [ ["name","John"], ["age", 30] ].

// Mana nima uchun bizga Map kerak.

// Map Biz hozirgina oddiy ob'ektdan qanday yaratishni ko'rdik Object.entries(obj).

// Buning teskarisini amalga oshiradigan usul mavjud Object.fromEntries: juftliklar qatori berilgan holda [key, value], u ulardan ob'ekt yaratadi:

let pieces = Object.fromEntries([
  ["banana", 1],
  ["ananas", 2],
  ["bananass", 3],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(pieces);

// Object.fromEntriesdan oddiy ob'ektni olish uchun foydalanishimiz mumkin Map.

// Lekin biz ko'proq narigi sintaxisga o'rganganimiz uchun uni ishlatishni xoxlaymiz:

let maps = new Map();

maps.set("banana", "10ta");

let obj2 = Object.fromEntries(maps.entries()); //  Map dan oddiy ob'ekt olish uchun

console.log(obj2); // {banana: "10ta"}

// map.entries() ga call qilish key/value uchun to'g'ri formatni qaytaradi Object.fromEntries().

// lekin biz uni qisqartirishimiz mumkin *:
let obj3 = Object.fromEntries(maps); // .entries() ni o'tkazib yuborgan holda

// Bir xil, chunki Object.fromEntries iterable bo'lgan ob'ektni argument sifatida kutadi. Array bo'lishi muhim emas. Va map uchun standart iteratsiya map.entries() bilan birxil key/value qaytaradi.

// #Set - o'rnatish

// Set bu maxsus qiymatlarni keylarsiz o'rnatishga yordam beradi, va unda qiymatlar faqat bitta bo'ladi birxil mumkin emas
// Uning asosiy methodlar:

// new Set([iterable]) - yangi Set yaratadi, agarda iterable object taqdim etilgan bo'lsa (odatda arraylar),undagi qiymatlar setga copy bo'ladi

// set.add(value) - value qo'shadi va uni o'zini qaytaradi.
// set.delete(value) - value ni ochirib tashlaydi, true qaytaradi agarda value qo'ng'iroq paytida mavjud bo'lsa, aks holda false
// set.has(value) - value bor bo'lsa true aks holda, false
// set.clear() - setdan hamma narsani tozalab yuboradi
// set.size() - size ni qayataradi.

// Asosiy xususiyat shundaki, set.add(value)bir xil qiymatdagi takroriy qo'ng'iroqlar hech narsa qilmaydi. Shuning uchun har bir qiymat Setfaqat bir marta paydo bo'ladi.

// Misol uchun, bizga tashrif buyuruvchilar bor va biz hammani eslashni xohlaymiz. Ammo takroriy tashriflar dublikatlarga olib kelmasligi kerak. Mehmon faqat bir marta "hisoblanishi" kerak.

// SetBuning uchun to'g'ri narsa:

let set = new Set();

let johns = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johns);
set.add(pete);
set.add(mary);
set.add(johns);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Bunga muqobil Setfoydalanuvchilar qatori va arr.find yordamida har bir qoʻshishda dublikatlarni tekshirish uchun kod boʻlishi mumkin . Ammo ishlash ancha yomonroq bo'lar edi, chunki bu usul har bir elementni tekshirib, butun massiv bo'ylab yuradi. Setnoyoblikni tekshirish uchun ichki jihatdan ancha yaxshi optimallashtirilgan.

// Set da iteratsiya:

// Biz ikkala for...of va forEach larni iteratsiya qilish uchun ishlatishimmiz mumkin:

let set = new Set(["John", "Mary", "Elizabeth"]);

set.forEach((value, valueAgain, set) => {
  console.log(value);
});

// Qiziqarli narsaga e'tibor bering. Qayta qo'ng'iroq qilish funksiyasi forEach3 ta argumentga ega: a value, keyin bir xil qiymat valueAgain va keyin maqsadli ob'ekt. Darhaqiqat, bir xil qiymat argumentlarda ikki marta paydo bo'ladi.