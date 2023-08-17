// WeakMap && WeakSet

// Garbage collection bo'limidan bilamizki, javascript engine qiymatlarni hotirada saqlab turishga harakat qiladi toki u "reachable" va u potensial tarzda yana qayta ishlatib bo'lsa.

// Misol uchun:

let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// tob'ekt hotiradan tozalab yuboriladi.

// Odatda, ob'ekt yoki massiv yoki boshqa ma'lumotlar strukturasi elementlarining xususiyatlari mavjud deb hisoblanadi, ma'lumotlar strukturasi xotirada bo'lganda xotirada saqlanadi.

// Misol uchun, agar biz ob'ektni massivga qo'ysak, u holda massiv tirik bo'lsa ham, unga boshqa havolalar bo'lmasa ham, ob'ekt ham tirik bo'ladi.

// Shunga o'xshash:
let johns = { name: "John" };

let array = [johns];

johns = null; // referal qayta yozildi

console.log(array[0].name); // mana baribir biz ob'ektga kirish uchun yo'l topa olayabmiz.

// Demak shunga o'xshab agar biz Map keyiga ob'ekt beradigan, toki Map avjud ekan u ob'ektga map.keys(key) orqali kirishimiz mumkin, va u garbage collectionga olinmaydi.

// Misol uchun:

let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

// WeakMap bu jihatdan tubdan farq qiladi. Bu asosiy ob'ektlarning axlat yig'ilishiga to'sqinlik qilmaydi.

// Keling, misollarda nimani anglatishini ko'rib chiqaylik.

// WeakMap

// Map va WeakMap o'rtasidagi asosiy farq shundaki, kalitlar primitive emas balki ob'ekt bo'lishi kerak.

let newWeakMap = new WeakMap();

let obj = {};

newWeakMap.set(john, "ok"); // bu ishlaydi

newWeakMap.set("hi", "hello"); // error, chunki "hi" ob'ekt emas

// Endi, agar biz ob'ektni kalit sifatida ishlatsak va bu ob'ektga boshqa havolalar bo'lmasa - u xotiradan (va xaritadan) avtomatik ravishda o'chiriladi.

let jones = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(jones, "...");

jones = null; // overwrite the reference

// jones is removed from memory!

// console.log(weakMap.get(jones));

// WeakMap, .keys() iteratsiyasi va usullarini qo'llab-quvvatlamaydi values(), entries()shuning uchun undan barcha kalitlarni yoki qiymatlarni olishning imkoni yo'q.

// WeakMapfaqat quyidagi usullarga ega:

// weakMap.set(key, value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)

// Nega bunday cheklov? Bu texnik sabablarga ko'ra. Agar ob'ekt boshqa barcha havolalarni yo'qotgan bo'lsa ( john yuqoridagi kodda bo'lgani kabi), u avtomatik ravishda axlat yig'ilishi kerak. Ammo texnik jihatdan tozalash qachon sodir bo'lishi aniq ko'rsatilmagan .

// JavaScript dvigateli buni hal qiladi. U xotirani darhol tozalashni yoki ko'proq o'chirish sodir bo'lganda tozalashni kutish va keyinroq bajarishni tanlashi mumkin. Shunday qilib, texnik jihatdan, a elementining joriy soni WeakMapma'lum emas. Dvigatel uni tozalagan yoki qilmagan yoki qisman qilgan bo'lishi mumkin. Shu sababli, barcha kalitlarga/qiymatlarga kirish usullari qo'llab-quvvatlanmaydi.

// Endi bunday ma'lumotlar tuzilmasi qayerga kerak?

// #Foydalanish holatlari: qo'shimcha ma'lumotlar

// Qo'llashning asosiy sohasi qo'shimcha ma'lumotlarniWeakMap saqlashdir.
// Agar biz boshqa kodga, hatto uchinchi tomon kutubxonasiga "tegishli" ob'ekt bilan ishlayotgan bo'lsak va u bilan bog'liq bo'lgan ba'zi ma'lumotlarni saqlamoqchi bo'lsak, u faqat ob'ekt tirik bo'lganda mavjud bo'lishi kerak - bu kerak bo'lgan narsa WeakMap. .

// Ob'ektni kalit sifatida ishlatib, ma'lumotlarni a ga qo'yamiz WeakMapva ob'ekt axlat yig'ilganda, bu ma'lumotlar ham avtomatik ravishda yo'qoladi.

weakMap.set(jones, "secret documents") // agar john o'lsa secret documentlar ham yo'q qilinadi

// Keling, bir misolni ko'rib chiqaylik.
// Masalan, bizda foydalanuvchilar uchun tashriflar sonini saqlaydigan kod mavjud. Ma'lumotlar xaritada saqlanadi: foydalanuvchi ob'ekti kalit, tashriflar soni esa qiymatdir. Foydalanuvchi tark etganda (uning ob'ekti axlat yig'iladi), biz ularning tashriflari sonini boshqa saqlashni xohlamaymiz.
// Quyidagi bilan hisoblash funksiyasiga misol Map:

// 📁 visitsCount.js

// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;x