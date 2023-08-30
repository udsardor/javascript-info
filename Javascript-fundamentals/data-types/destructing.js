// Destructuring assignment
// Javascriptdagi eng ko'p qo'llaniladigan malumot tuzilmalari Object va Arraylardir
// Ob'ektlar keylar orqali qiymatlar saqlash uchun hizmat qiladi
// Arraylar esa harqanday ma'lumot turini tartiblangan holatda saqlash uchun hizmat qiladi.

// Garchi biz ularni funktsiyaga o'tkazsak, u umuman ob'ekt/massiv bo'lishi shart emas. Buning uchun alohida qismlar kerak bo'lishi mumkin.

// Destructuring assignment(Strukturalardan qiymatlarni yechib olish) - arraylar yoki ob'ektlar uchun "unpack" vazifasini o'tovchi sintaxsisdir, ya'ni bizga ularni ishlatishda yanada ko'proq yordam beradi.

// Destructuring, shuningdek, juda ko'p parametrlarga, standart qiymatlarga va boshqalarga ega bo'lgan murakkab funktsiyalar bilan ajoyib ishlaydi. Tez orada buni ko'ramiz.

// Array destructuring:
// Bizda ism va familiyali array bor
let arr = ["John", "Smith"];
// destructuring assignment
// arr[0] ga firstname ni o'rnatadu
// va arr[1] ga surname ni o'rnatadi
let [firstname, surname] = arr;

// Arrayni o'ziga murojat qilib o'tirmay endi darrov biz tenglagan o'zgaruvchilarni ishlatib ketaveramiz.
// Buni boshqacha yo'l bilan ham stringda qilsa bo'ladi split():
let [fName, lName] = "John Smith".split(" ");
console.log(fName);
console.log(lName);
// Ko'rib turganingizdek sintaxis juda oddiy. Biroq yana bir nechta o'ziga hos detallar mavjud. Keling, ularni yaxshiroq tushunish uchun yana bir nechta misollarni ko'rib chiqamiz.

// Destructuring(qayta strukturalash, struktura buzish) - destructive() degani emas.
// U "destrukturizatsiya topshirig'i" deb ataladi, chunki u elementlarni o'zgaruvchilarga nusxalash orqali "destrukturizatsiya qiladi". Ammo massivning o'zi o'zgartirilmagan.
// Bu yozishning qisqaroq yo'li.
// let [firstName, surname] = arr;
let stName = arr[0];
let sName = arr[1];

// Bizga keraksiz bo'lgan elementlarni e'tiborga olmasdan ham o'tib ketsak bo'ladi:

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); //Consul
// Yuqoridagi kodda massivning ikkinchi elementi o'tkazib yuborilgan, uchinchisi ga tayinlangan titleva massivning qolgan elementlari ham o'tkazib yuborilgan (chunki ular uchun o'zgaruvchilar yo'q).

// Harqanday iterablelar bilan ham ishlay oladi.
// Biz aslida harqanday iterablelar bilan ishlatishimiz mumkin, faqat array emas:
let [a, b, c] = "abc" // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// Bu aslida huddi for...of dek ishlaydi, harqnday ong tomondagi qiymatni = orqali birlashtirib, bu sintaxsis sugarning bir turi.

// Chap tarafdagi har qanday narsani tayinlang
// Chap tomonda har qanday "tayinlash" dan foydalanishimiz mumkin.

// Masalan, ob'ekt xususiyati:
let user = {};
[user.name, user.surname] = "Sardor Rajabov".split(" ");
console.log(user.name); // Sardor
console.log(user.surname); // Rajabov

// .entries() bilan aylanish
// Oldingi bobda Object.entries(obj) usulini ko'rdik.
// Ob'ektning kalitlari va qiymatlari ustidan aylanish uchun biz uni tuzilmani buzish bilan ishlatishimiz mumkin:
let uSer = {
    name: 'John',
    age: 18
};

for(let [key, value] of Object.entries(uSer)){
    console.log(key, value);
}

// Mapoddiyroq, chunki u takrorlanadi:
let usr = new Map();
usr.set("name", "john");
usr.set("age", 48);

for(let [key, value] of usr){
    console.log(key + ":" + value);
}

// O'zgaruvchilarni almashtirish hiylasi
// Ikki o'zgaruvchining qiymatlarini tuzilmani buzish topshirig'i yordamida almashtirishning mashhur hiylasi mavjud:

let usr1 = "Smith";
let usr2 = "Smith2";

let [smt1, smt2] = [usr1, usr2];
console.log(smt1);

// Bu erda biz ikkita o'zgaruvchidan iborat vaqtinchalik massivni yaratamiz va uni almashtirilgan tartibda darhol yo'q qilamiz.
// Shu tarzda ikkitadan ortiq o'zgaruvchilarni almashtirishimiz mumkin.

// ...rest operatori:
// Odatda, agar massiv chapdagi ro'yxatdan uzunroq bo'lsa, "qo'shimcha" elementlar o'tkazib yuboriladi.
// Masalan, bu erda faqat ikkita element olinadi, qolganlari esa e'tiborga olinmaydi:

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere

// ...rest
// Aslida bizga ko'p holatlarda arraydan elementlarni destructing qilayotganda extra yani qo'shimcha qiymatlar tushurib qoldiriladi.
// Misol uchun bu yerda faqat 2 ta item olinadi.
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

onnsole.log(name1); // Julius
onnsole.log(name2); // Caesar
// Further items aren't assigned anywhere

// Agar bizga 1 tadan ko'p elementlarni olishni hohlasak bizga harqanday o'zgaruvchi nomini yozib uning oldiga ... 3 ta nuqta qo'yadigan bo'lsak u shu o'zgaruvchi ichiga ko'plab elementlarni olishi mumkin

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest[0]) // Consul
console.log(rest.length) // 2

// rest operatorining qiymati arrayning qolgan elementlari bo'ladi

// Default values

// Agar arrayning qiymati o'zgaruvchilarning sonidan kichik bo'lsa, u errorga sabab bo'lmaydi. Nom'alum qiymatlar undefined bo'ladi:

let [stName, srName] = [];

console.log(stName) // undefined

// agar biz ularni o'tkazib yuborishni hohlamasangiz default qiymat tayinlab ketsangiz bo'ladi, buni = orqali tayinlab ketsak bo'ladi.

// default values
let [name = "Guest", surname = "Anonymous"] = ["Jelius"];

console.log(name) // Jelius
console.log(surname) // Jelius

// Default qiymat tayinlash nafaqat bunday balki murakkabroq functionlar orqali ham yozib ketsa bo'ladi.
// Misol uchun prompt orqali:

//  prompt faqatgina surname uchun ishlaydi chunki Julius degan qiymmat name ga tayinlanadi.
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

onnsole.log(name);    // Julius (from array)
console.log(surname); // whatever prompt gets

// Object destructuring - Ob'ektlarni destruktura qilish

// Bu ob'ektlarda ham ishlaydi, sintax juda oddiy hisoblanadi:

let {var1, var2} = {var1:…, var2:…}

// Masalan; misol uchun:

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;
console.log(title) // "Menu"
console.log(width) // 100
console.log(height) // 200

Xususiyatlar options.title, options.widthva options.heighttegishli o'zgaruvchilarga tayinlanadi. Ya'ni o'zgaruvchi nomi property nomi bilan birxil bo'lishi kk
// tartib muhim emas. Bu ham ishlaydi:
// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 };

// Chap taraf yanada murakkabroq bo'lishi mumkin ya'ni biz u property nomini hohlamasak uni o'zimiznikiga almashtirib qo'yishimiz mumkin:

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width: w, height: h} = options;
console.log(title) // "Menu"
console.log(w) // 100
console.log(h) // 200

// Potensial etishmayotgan xususiyatlar uchun biz dan foydalanib standart qiymatlarni o'rnatishimiz mumkin "=", masalan:
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

onnsole.log(title);  // Menu
onnsole.log(w);      // 100
onnsole.log(h);      // 200

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100

// Manabu usul ishlamaydi:
let width, height, title;

{title, width, height} = {title: "Menu", width: 100, height: 200};

// Agar let yo'q bo'lsa:

//Yuqoridagi misollarda o'zgaruvchilar topshiriqda to'g'ri e'lon qilingan: let {…} = {…}. Albatta, biz mavjud o'zgaruvchilardan foydalanmasdan ham foydalanishimiz mumkin let. Lekin bir narsa bor.

// Bu ishlamaydi:
let title, width, 

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};

// Bunga asosiy sabab, javascript ularni kod bloki ichida deb o'ylaydi (asosiy kod oqimida emas):
let anyVar = 40;
{
  let anyVar = 0
  console.log(anyVar) // 0
}

console.log(anyVar) // 40

// Shunday qilib, bu erda JavaScript bizda kod bloki bor deb taxmin qiladi, shuning uchun xatolik yuz berdi. Buning o'rniga biz buzilishni xohlaymiz.

// JavaScript-ni bu kod bloki emasligini ko'rsatish uchun biz ifodani qavs ichiga o'rashimiz mumkin (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

console.log( title ); // Menu

// Nested destructing - ichki destruksiya

// Ob'ekt yoki array o'zida ichki array yoki obe'ktni qabul qilsa, biz yanada complex'roq bo'lgan usulni qo'llaymiz.
// Pastdagi misolda options nomli ob'ektni ichida yana size nomli ob'ekt mavjud va array ham bor.

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destruksiya ko'p qatorli qilingan, kod yaxshiroq o'qilishi uchun.

let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

// let { size: { width, height }, items: [item1, item2],title: "Menu"} = options


console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// Smart function parameters - aqqli funksiya argumentlari

// Ba'zida funksiya ko'p parametrlarga ega bo'ladi, ularning aksariyati ixtiyoriydir. Bu, ayniqsa, foydalanuvchi interfeyslari uchun to'g'ri keladi. Menyu yaratuvchi funksiyani tasavvur qiling. Uning kengligi, balandligi, sarlavhasi, elementlar ro'yxati va boshqalar bo'lishi mumkin.

// Mana bunday funktsiyani yozishning yomon usuli:

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}

// Haqiqiy hayotda muammo argumentlar tartibini qanday eslab qolishdir. Odatda IDElar bizga yordam berishga harakat qiladi, ayniqsa kod yaxshi hujjatlashtirilgan bo'lsa, lekin baribir... Yana bir muammo - ko'pchilik parametrlar sukut bo'yicha yaxshi bo'lsa, funksiyani qanday chaqirishdir.

// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

// Bu xunuk. Va biz ko'proq parametrlar bilan shug'ullanganimizda o'qib bo'lmaydi.
// destruksiya yordamga keladi!
// Biz parametrlarni ob'ekt sifatida o'tkazishimiz mumkin va funktsiya ularni darhol o'zgaruvchilarga destructing qiladi

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...va darhol ularni o'zgaruvchilarga yoyadi:

function showMenu({title: "Menu", width: 200, height: 100, items = []}){
  // title va itemslar options dan olinadi
  // width va height esa defualt holatda ishlaydi
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options)

// Maximum ish haqqi

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(){
    return Object.entries
}

topSalary(salaries)