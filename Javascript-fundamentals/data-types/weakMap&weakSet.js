// WeakMap and WeakSet
// Javascript garbage collection mavzusidan bilamizki, javascript reachable bo'gan ob'ektlarni hotirada saqlab turadi ya'ni qayta ishlatsa bo'ladigan (reuseable);

// misol uchun

let john = { name: "Jogn" };

// ob'ektga kirsa bo'ladi john esa unga reference hisoblanadi

// john qayta yozamiz:

john = null;

// ob'ekt hotiradan o'chirib yuboriladi.

// Odatda, ob'ektlarning property lari yoki arrayning elementlari yoki boshqa malumot strukturasi reachable deb hisobga olinadi va hotirada paytida hotirada saqlanadi.

// Misol uchun, agar biz array ichiga ob'ekt qo'yadigan bo'lsak, va array "tirik" paytida, o'sha ob'ektham shu kabi tirik bo'ladi, hattoki unga boshqa reference lar ham bo'lmasa.

let jogn = { name: "jogn" };

let arr = [jogn];

jogn = null; // jogn null qildik

// Ob'ektga reference bo'layotgan jogn o'chirildi.
// Uni garbage collector olib ketmaydi;
// Chunki u ob'ektga haliham kirsa bo'ladi > arr[0] > {name: "jogn"}

// Agar biz Map malumot tuzilmasiga kalit sifatida ob'ektni ishlatadigan bo'lsak, Map mavjud bo'lar ekan, u garbage collectionga saqlanmaydi.

// Misol uchun:

let mary = { name: "Mary" };

let map = new Map();
map.set(mary, "...");

mary = null; // mary mapni ichiga ham saqlandi.
// biz unga map.keys() orqali erishsak bo'ladi
console.log(map.keys(mary)); // demak bu ham hotiradan o'chirilaydi.
// WeakMap tubdan farq qiladi, u ob'ektning hotiradan olib tashlanishiga to'sqinlik qilmaydi.
// Keling misollar orqali ma'nosi tushunib olaylik.

// #WeakMap
// Map va WeakMap ning asosiy farqi WeakMapda faqat ob'ekt keylar joylashtirish mumkin, primitive valuelar errorga olib keladi:

let weakMap = new WeakMap();

let obj = { name: "Ann" };

weakMap.set(obj, "obj key is allowed"); // its ok

weakMap.set("primitiveValue", "not allowed"); // erorr chunki primitiveValue ob'ekt emas.

// Demak agar biz ob'ektni WeakMap keyi sifatida ishlatsak va uni reference qayta elon qilib null qilsak u hotiradan o'chib ketadi ya'ni qachonki reference o'chirilsa WeakMap bizga o'zida mavjud bo'lgan ob'ektni o'chirishga ruxsat beradi.

let anyObj = { name: "anyValue" };

weakMap.set(anyObj, "...");

anyObj = null;

// anyObj hotiradan tozalandi! endi unga WeakMap orqali access qilishni ham iloji yo'q.

// Yuqoridagi oddiy misol bilan solishtiring Map. Endi johnfaqat kalit sifatida mavjud bo'lsa WeakMap- u avtomatik ravishda xaritadan (va xotiradan) o'chiriladi.

// WeakMapkeys(), , iteratsiyasi va usullarini qo'llab-quvvatlamaydi values(), entries()shuning uchun undan barcha kalitlarni yoki qiymatlarni olishning imkoni yo'q.

// WeakMapfaqat quyidagi usullarga ega:

weakMap.set(key, value);
weakMap.get(key);
weakMap.delete(key);
weakMap.has(key);

// Nega bunday cheklov? Bu texnik sabablarga ko'ra. Agar ob'ekt boshqa barcha havolalarni yo'qotgan bo'lsa ( johnyuqoridagi kodda bo'lgani kabi), u avtomatik ravishda axlat yig'ilishi kerak. Ammo texnik jihatdan tozalash qachon sodir bo'lishi aniq ko'rsatilmagan .

// JavaScript dvigateli buni hal qiladi. U xotirani darhol tozalashni yoki ko'proq o'chirish sodir bo'lganda tozalashni kutish va keyinroq bajarishni tanlashi mumkin. Shunday qilib, texnik jihatdan, a elementining joriy soni WeakMapma'lum emas. Dvigatel uni tozalagan yoki qilmagan yoki qisman qilgan bo'lishi mumkin. Shu sababli, barcha kalitlarga/qiymatlarga kirish usullari qo'llab-quvvatlanmaydi.

// Endi bunday ma'lumotlar tuzilmasi qayerga kerak?

// Foydalanish holati: qo'shimcha ma'lumotlar

// Qo'llashning asosiy sohasi qo'shimcha ma'lumotlarni WeakMap saqlashdir.

// Agar biz ob'ektlar bilan ishlayotgan bo'lsak, va u balki hatto uchinchi tomon kutubxonasi bo'lsin, va biz shunday saqlamoqchi bo'ldikki ya'ni bog'langan ma'lumot, qachonki o'sha ma'lumot ob'ekt "tirik" vaqtida mavjud bo'lsin, mana WeakMap bizga qachon kerak.

// Pastda biz WeakMapga ma'lumot joylashtirdik, ob'ektni key sifatida saqlagan holatda, va u garbage collectionga olinadi qachonki ob'ekt o'chirilsa:

weakMap.set(jogn, "secret documents");
// jogn o'lsa "secret document" ham o'chib ketadi.

// Misol uchun, bizda foydalanuvchi tashriflarini hisoblaydigan kod bor. Malumotlar mapda saqlanadi: user ob'ekti key va value soni,    qachonki user tark etsa (u garbage collectionga tushadi), va biz qayta hisoblashni hohlamaymiz:

// Misol uchun biz Map orqali hisoblash uchun function yozamiz:

// 📁 visitsCount.js
let visitCount = new Map();

function countUser(user) {
  let count = visitCount.get(user) || 0;
  visitCount.set(user, count + 1);
}

// Kodning davomi balki shunday:

// 📁 main.js
let john1 = { name: "John" };

countUser(john1); // count his visits

// Keyinroq john bizni tark etdi.
john1 = null;

// Endi johnob'ekt axlat yig'ilishi kerak, lekin xotirada qoladi, chunki u visitsCountMap.

// visitsCountMapBiz foydalanuvchilarni o'chirishda tozalashimiz kerak , aks holda u xotirada abadiy o'sadi. Bunday tozalash murakkab arxitekturada zerikarli vazifaga aylanishi mumkin.

// Buning o'rniga quyidagiga o'tish orqali undan qochishimiz mumkin WeakMap:

let visitersCountWeakMap = new WeakMap();

function visiterCount(user) {
  let count = visitersCountWeakMap.get(user) || 0;
  visitersCountWeakMap.set(user, count + 1);
}

// Endi tozalashimiz shart emas visitsCountMap. Ob'ektga kirish imkoni bo'lmagandan so'ng john, kalitdan tashqari barcha usullar bilan WeakMapu xotiradan o'chiriladi va shu kalit orqali ma'lumot WeakMap.

// Foydalanish holati: keshlash.
// Yana bir keng tarqalgan misol keshlashdir. Biz funksiya natijalarini ("kesh") saqlashimiz mumkin, shunda bir xil ob'ektga kelajakdagi qo'ng'iroqlar uni qayta ishlatishi mumkin.

// Bunga erishish uchun biz foydalanishimiz mumkin Map(optimal stsenariy emas):

// / 📁 cache.js
let cache = new Map();

// hisobla va natijani eslab qol.

function proccess(obj) {
  if (!cache.has(obj)) {
    let result = /*  hisob kitoblar uchun */ obj;

    cache.set(obj, result);

    return result;
  }

  return cache.get(obj);
}

// 📁 main.js

let thatObj = {
  /* Keling bizda ob'ekt bor deylik */
};

let result1 = proccess(thatObj); // hisoblanadi

// keyinroq kodning boshqa qismidan...
let result2 = proccess(thatObj); // eslab qolinadi

// console.log(result1 == result2)
// console.log(result2)

console.log(cache.size); // 1 // u ob'ekt hali ham cache da

// Xuddi shu ob'ekt bilan bir nechta qo'ng'iroqlar uchun process(obj)u faqat birinchi marta natijani hisoblab chiqadi va keyin uni dan oladi cache. cacheSalbiy tomoni shundaki, biz ob'ektga kerak bo'lmaganda tozalashimiz kerak .

// /Agar biz Mapbilan almashtirsak WeakMap, bu muammo yo'qoladi. Ob'ekt axlat yig'ilgandan so'ng keshlangan natija avtomatik ravishda xotiradan o'chiriladi.

// 📁 cache.js
let cache = new WeakMap();

function proccess(obj) {
  if (!cache.has(obj)) {
    let natija = obj; // hisobga olib hamda obj ni o'zini qaytarish uchun

    cache.set(obj, natija);
    return natija;
  }
  return cache.get(obj);
}

// // 📁 main.js
let obj = {
  /* some object */
};

let result1 = process(obj);
let result2 = process(obj);

// // ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

// #WeakSet
// WeakSet ham huddi shunday qiladi:

// U ga o'xshaydi Set, lekin biz faqat ob'ektlarni qo'shishimiz mumkin WeakSet(ibtidoiy emas).
// Ob'ekt to'plamda mavjud bo'lib, unga boshqa joydan kirish mumkin.
// Set ga o'xshab u "add", has va delete ni qo'llab quvvatlaydi, lekin size, keys() va iteratsiya ham mavjud emas

// "Zaif" bo'lib, u qo'shimcha saqlash vazifasini ham bajaradi. Lekin o'zboshimchalik bilan ma'lumotlar uchun emas, balki "ha/yo'q" faktlari uchun. A'zolik WeakSetob'ekt haqida biror narsani anglatishi mumkin.

// Masalan, WeakSetsaytimizga tashrif buyurganlarni kuzatib borish uchun foydalanuvchilarni qo'shishimiz mumkin:

// let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically

// Eng muhim cheklov - WeakMapbu WeakSetiteratsiyalarning yo'qligi va barcha joriy tarkibni olishning iloji yo'qligi. WeakMap/WeakSetBu noqulay bo'lib ko'rinishi mumkin, lekin ularning asosiy vazifasini bajarishga to'sqinlik qilmaydi - boshqa joyda saqlanadigan/boshqariladigan ob'ektlar uchun ma'lumotlarni "qo'shimcha" saqlash.

// WeakMapis Map-like to'plam, u faqat ob'ektlarga kalit sifatida ruxsat beradi va boshqa vositalar bilan kirish imkoni bo'lmaganda ularni tegishli qiymat bilan birga olib tashlaydi.

// WeakSetis Set-like to'plam faqat ob'ektlarni saqlaydi va boshqa vositalar bilan kirish imkoni bo'lmaganda ularni olib tashlaydi.

// Ularning asosiy afzalliklari shundaki, ular ob'ektlarga nisbatan zaif havolaga ega, shuning uchun ularni axlat yig'uvchi tomonidan osongina olib tashlash mumkin.

// Bu clear , size, keys, values… ni qo‘llab-quvvatlamaslik evaziga keladi.
// WeakMapva WeakSet"birlamchi" ob'ektni saqlashdan tashqari "ikkilamchi" ma'lumotlar tuzilmalari sifatida ishlatiladi. Ob'ekt asosiy xotiradan olib tashlangandan so'ng, agar u faqat kalit sifatida WeakMapyoki ichida topilsa WeakSet, u avtomatik ravishda tozalanadi.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

