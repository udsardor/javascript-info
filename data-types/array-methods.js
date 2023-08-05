// Array methods - Array metodlari

// Arraylar bizga ko'plab usullarni (methodlarni) taqdim etadi. Osonroq o'rganishimiz uchun ular guruhlarga bo'lingan.

// Elementlarni qo'shish va olib tashlash.

// Biz allaqchon arrayga elementlarni oladigan va qo'shadigan methodlarni o'rganganmiz:

// arr.push(...items)- elementlarni oxiriga qo'shadi,
// arr.pop()- elementni oxiridan chiqaradi,
// arr.shift()- elementni boshidan chiqaradi,
// arr.unshift(...items)– boshiga elementlar qo‘shadi.

// Yana bir nechta usullari:

// Bilamizki arraylarham ob'ekt hisoblanadi, demak biz delete orqali ham elementlarni o'chirsak bo'ladi:

let arr = ["I", "go", "home"];
delete arr[1];

console.log(arr[1]); // undefined

console.log(arr.length); // 3

// Arraydan 1 chi indexda turgan element olib tashlandi ammo arr.length === 3 ga tengligini ko'rib turibmiz.

// Bu tabiiy chunki delete obj[key] ob'ekt ichidagi qiymatlni property'siga qo'shib o'chirib tashlaydi. Bu ob'ektlar uchun yaxshi.  Ammo massivlar uchun biz odatda qolgan elementlarning siljishi va bo'sh joyni egallashini xohlaymiz. Va avvalgi massiv uzunligini emas qisqarog'ini kutamiz.

// Shuning uchun maxsus usullardan foydalanish kerak.

// Bu esa sintaksis:

// arr.splice(start[, deleteCount, elem1, ..., elemN])

// U arrayni kiritilgan indexdan boshlab o'zgartiradi, start: deleteCount gacha qirqadi, elem1, elemN qirqilgan elementlar o'rnidan yangisini almashtirish imkoniyatini beradi. Bu qirqib olingan arrayni ham qaytaradi.

// Misollar orqali tushunish osonroq bo'ladi.

// Keling o'chirishdan boshlaymiz:

let myArr = ["I", "study", "JavaSript"];

arr.splice(1, 1); // 1 chi indexdan boshlab 1 elementni kesib oladi.

console.log(myArr); // ["I", "JavaScript"];

// Shunchalik oson, shunday emasmi? 1 chi indexdan boshlab 1 ta element kesish.

// Manabu misolda biz arraydan 3 ta element olib tashlaymiz va o'rniga 2 ta element qo'yamiz:

let anyarr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
anyarr.splice(0, 3, "Let's", "dance");

console.log(anyarr); // now ["Let's", "dance", "right", "now"]

// Splice ularni bizga qaytarishi ham mumkin:

let deletedArr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = deletedArr.splice(0, 2);

console.log(removed); // "I", "study" <-- Arraydan qirqib olingan elementlar

// Biz splice orqali hechnarsa qirqmasdan ham elementlarni qo'shishimiz mumkin, uning uchun deleteCount sozlash kerak bo'ladi, ya'ni uni 0 qilishimiz kerak:

let arrMy = ["I", "study", "JavaScript"];

// index 2 dan boshlab
// 0 ta delete qil
// va complex language larni qo'sh
arrMy.splice(2, 0, "complex", "language");

console.log(arrMy); // "I", "study", "complex", "language", "JavaScript"

// Negative indexlarga ham ruxsat beriladi, ya'ni teskaridan:

let arr1 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr1.splice(-1, 0, 3, 4);

console.log(arr1); // 1,2,3,4,5

// #SLICE - methodi

// arr.slice arr.splice ga qaraganda ancha soddaroq hisoblanadi:

// Ko'rinishi:

arr.slice([start], [end]);

// Bu method bizga startdan boshlab turib toki oxirigacha (oxirni o'zi olinmaydi) yangi massiv qaytaradi, start ham end ham negative nomerlar bo'lishi mumkin, bunda massiv ohiridan boshlanadi.

// bu huddi str.slice ga o'xshaydi, lekin substring emas subarray qaytaradi.

let anArr = ["t", "e", "s", "t"];

console.log(anArr.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(anArr.slice(-2)); // s,t (copy from -2 till the end)

// Biz uni shunchaki arr.slice() qilib hechqanaqa parameter bermasdan ham ishlatsak bo'ladi bu bizga yangi nusxalangan array qaytaradi, bunaqa holatda arrayni copy qilish bizga asl massivga ta'sir qilmagan holda ishlashda yordam berishi mumkin.

// #CONCAT - qo'shish

// Bu concat bizga yangi array va berilgan arrayning qiymatlari bilan yoki yangi elementlar qo'shib qaytaradi.

// Ko'rinishi - Syntax :

// arr.concat(arg1, arg2...)

// Bu hohlagan raqamdagi paramterni kiritishga ruxsat beradi, arraylar yoki elementlar.

// Yangi array ichiga eski arrayni ichiga olgan holatda va arr1, arr2 larni ham qo'shib qaytaradi va h.k.

// Agar argumentN chi array bo'ladigan bo'lsa, uning hamma elementlari copy bo'ladi, boshqa holatlarda argumentni o'zi copy bo'ladi.

// Misol uchun:

let arr5 = [1, 2];

// array yaratadi, arr va [3, 4];

console.log(arr5.concat([3, 4])); // 1, 2, 3, 4

console.log(arr5.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

console.log(arr5.concat([3, 4], 5, 6)); // 1,2, 3, 4,5,6,

// Odatda, bu faqat arraylardan elementlarni copy qiladi, boshqa ob'ektlar, garchi ular arrayga oxshasada, ular to'liq massivga copy bo'ladi:

let manyArr = [1, 2];

let arrLike = {
  0: "something",
  length: 1,
};
console.log(manyArr.concat(arrLike)); // 1, 2, [object, Object]

// ...Lekin agar arrLike da maxsus Symbol.isConcatSpreadable nomli property bo'ladigan bolsa, bunday holatda concat arrayga elementlarni qo'shadi.

let myNameArr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(myNameArr.concat(arrayLike)); // 1,2,something,else

// agar true bo'ladigan bo'lsa elementlar copy bo'ladi false bo'lsa to;liq ob'ekt copy bo'ladi.
// Agar true bo'lsa: 1,2,something,else
// agar false bo'lsa:
// [
//     1,
//     2,
//     {
//       '0': 'something',
//       '1': 'else',
//       length: 2,
//       [Symbol(Symbol.isConcatSpreadable)]: false
//     }
// ]

// Hight order methods:

// Iteratsiya

// Ko'rinishi syntax:

arr
  .forEach(function (item, index, array) {
    // do something with paramters
  })

  [
    // arr.forEach() bizga array harbir elementi uchun callback functionni ishga tushiradi.

    // misol uchun bunda harbir element ko'rsatadi:

    ("Bilbo", "Gandalf", "Nazgul")
  ].forEach(console.log); // Bilbo, Gandalf, Nazgul

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, arr) => {
  console.log(
    `${item} element , ${index} indexdan boshlanadi arr ichidan ${arr}`
  );
});

// Agar function nimadir return qilinsa u qaytarilmaydi va ignore qilinadi.

// Seaeching in array

// indexOf,lastIndexOf va includes

// arr.indexOf va arr.includes bir xil syntax'ga ega va ular stringlar bilan deyarli birxil ishlaydi, lekin ular harbir belgilar (characterlar) bilam emas elementlar bilan ishlaydi.

// * arr.indexOf(item, from) item uchun fromdan boshlab qidiradi, va uning indexini qaytaradi, topilmasa -1 qaytaradi.
// * arr.includes(item, from) itemni fromdan boshlab qidiradi, agar topilsa true qaytaradi.

// Bu methodlar odatda faqat item qilib ishlatiladi ya'ni default holatda 0 dan boshlab qidiradi.

let targetArr = [1, 0, false];

console.log(targetArr.indexOf(0)); // 1
console.log(targetArr.indexOf(false)); // 3
console.log(targetArr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

// Esimizda qo'yaylik arr.indexOf() qattiq === tenglik bilan ishlaydi, Demak biz array ichidan false ni qidiradigan bo'lsak u aniq false ni qidiradi 0 ni emas.

// Agar shunchaki element bormi yo'qmi tekshirishni xoxlasak va indexi kerak bo'lmasa, shunday holatda arr.includes avfzal ko'rladi

// arr.lastIndexOf arr.indexOf bilan birxil, faqat u o'ngdan chapga qarab qidiradi.

let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple")); // 0 (first Apple)
console.log(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// NaN ni arr.inludes to'gri tutishi mumkin.

// indexOf dan farqli o'laroq includes NaN ni to'gri topa oladi:

const thatsArr = [NaN];
console.log(thatsArr.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(thatsArr.includes(NaN)); // true (correct)

// Buning sababi includes javascript ancha keyinroq qo'shilgan va eng oxirgi qidirsh algoritlarini ishlatadi.

// find va findIndex/findLastIndex

// Tasavvur qiling bizning massivimizda ob'ektlar mavjud, xo'sh ularni qanday topamiz.

// Bunda bizga arr.find(fn) qo'l keladi

// syntax:

let result = arr.find(function (item, index, array) {
  // agar true qaytsa u elementi bizga qaytaradi va iteratsiya yakunlanadi
  // aks holda undefined qaytaradi
});

// array harbir elementi uchun function ishga tushiriladi:

// item, element
// index, indexi
// array, arrayni o'zi

// Misol uchun bizda bizda userlar uchun array bor, harbittasida id va name mavjud. keling bittasi birga tengmi yo'qmi shuni tekshirib ko'ramiz

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // John

// Bizga bu real proyektlar da juda qo'l keladi chunki ko'pincha backenddan yoki boshqa joylardan arraylar shunda ko'rinishda kelishadi.

// Etibor bering biz faqa birinchi paramterda ko'proq foydalanamiz boshqalari kamdan kam ishlatiladi. item => item.id == 1

// arr.findIndex ha huddi shu bilan birxil ko'rinishga syntax ga ega, lekin u elementning o'rniga uning qayerdan topilganligini indexini topadi va elementni o'zini emas indexini qaytaradi.

// arr.findLastIndex u bilan birxil faqat ortdan qidiradi.

// Mana misol:

let myUser = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Boshidan
let res = myUser.findIndex((item) => item.id == "John"); // 1
// Oxiridan
console.log(users.findLastIndex((user) => user.name == "John")); // 3
// qolgan parameterlar ko'p ham ishlatilmaydi, index qaysi indexdan boshlanishini aytadi

// filter

// arr.findIndex bizga faqatgina bitta element uchun ishlaydi
// agar ko'prog'i uchun kerak bo'lsa arr.filter(fn) ishlatishimiz mumkin
// Syntax findIndex ga o'xshaydi, lekin filter arraydagi barcha to'gri keladigan elementlarni qaytaradi:

let results = arr.filter(function (item, index, array) {
  // agar topilsa qaytaradi va loop davom etadi
  // returns empty array if nothing found
});

// Misol uchun:

let usersOf = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = usersOf.filter((item) => item.id < 3);
console.log(someUsers.length); // 2

// Transform an array - massivni transformatsiya qilish

// Keling endi arrayni transformatsiya qiladigan va qayta tartiblaydigan methodlarga o'tamiz.

// #MAP

// arr.map(fn) eng ko'p ishlatiladigan va eng ko'p foydasi tegadigan methoddir

// Bu method array harbir elementi uchun function chaqiradi va arrayni o'zini emas o'zgartirilganini qaytaradi.

// syntax:

let resp = arr.map(function (item, index, array) {
  // item o'rniga yangi qiymat qaytaradi
});

// Misol uchun, buyerda elementlar harbirini olamizda ularni o'zini emas length ni qayataradigan qilamiz

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6

// #sort(fn)

// arr.sort() ni chaqirish arrayni joyida sort qiladi, va elemetnlar tartibini o'zgartiradi.

// Bu sortlangan arrayni o'zini ham qaytaradi, lekin qaytarilgan value ignore qilinadi, arrayni o'zi o'zgaradi.

let arr6 = [1, 2, 15];

// the method reorders the content of arr6
arr6.sort();

console.log(arr6); // 1, 15, 2

// Nimadir g'alatimi?
// tartib 1, 15, 2 bo'ladi, xato lekin nimaga?
// Arraylar default holatda stringlar kabi sort qiladi.

// solishtirish uchun, hamma elementlar stringga convert bo'ladi, huddi satrlardek lexekologik tartib qo'llaniladi "2" > "15" true

// O'zimizning sort methodimizni ishlatish uchun, arr.sort() ning ichiga parametriga callback sifatida berishimiz kerak.

// Funktsiya ikkita ixtiyoriy qiymatni solishtirishi va qaytarishi kerak:

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arrr = [1, 2, 15];

arrr.sort(compareNumeric);

console.log(arrr); // 1, 2, 15

// Endi u maqsadga muvofiq ishlaydi.

// Keling, bir chetga chiqib, nima bo'layotganini o'ylab ko'raylik. Har qanday narsaning massivi bo'lishi mumkin arr, to'g'rimi? Unda raqamlar, satrlar, ob'ektlar yoki boshqa narsalar bo'lishi mumkin. Bizda ba'zi narsalar to'plami mavjud . Uni saralash uchun bizga uning elementlarini solishtirishni biladigan tartiblash funksiyasi kerak. Odatiy bo'lib string tartibi hisoblanadi.

// Usul arr.sort(fn)umumiy tartiblash algoritmini amalga oshiradi. Biz uning ichki ishlashiga ahamiyat bermasligimiz kerak ( ko'pincha optimallashtirilgan tezkor tartib yoki Timsort ). fnU massiv bo'ylab yuradi, taqdim etilgan funksiyadan foydalanib uning elementlarini taqqoslaydi va ularni qayta tartiblaydi, bizga kerak bo'lgan narsa taqqoslashni ta'minlaydi .

// Aytgancha, agar biz qaysi elementlarni solishtirishni bilmoqchi bo'lsak - ularni ogohlantirishga hech narsa to'sqinlik qilmaydi:

// Aslida shunda qilishni ham o'zi yetadi:

[1, 2, 15].sort((a, b) => {
  console.log(a + "<>" + b);
  return a - b;
});

// Algoritm jarayonda elementni bir nechta boshqalar bilan solishtirishi mumkin, lekin u imkon qadar kamroq taqqoslashga harakat qiladi.

// stringlar uchun localCompare:

// Strinlar uchun taqqoslash algoritmi esingizdami? u matnlarni kodlari bilan taqqoslardi.

// Ko'plab alifbolar va to'g'ri sortlash uchun localCompare ishlatgan avfzalroqdir, huddi Ö kabi harflarni taqqoslash uchun.

// Masalan, nemis tilida bir nechta mamlakatlarni saralaymiz:

let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (wrong)

console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

// reverse - teskari

// arr.reverse - elementlarni tartibini teskari qiladi:

let reversed = [1, 2, 3, 4, 5];
reversed.reverse();

console.log(reversed); // 5,4,3,2,1

// Shuningdek arr, teskari o'zgarishlardan keyin massivni qaytaradi .

// split and join

// Mana real hayotdan misol. Messengerlarda yozishayabmiz, kimdir habar qabul qiluvchilarni vergullar bilan ajratdi: John, Pete, Mary, lekin bizga bularni bizga bitta string qilib olgandan ko'ra bitta array qilib olganimiz avfzalroq shunday emasmi?

// str.split(delim) aniq shu ishni qila oladi, biz qandaydir ishora qo'yamiz va o'sha ishoradan keyin masalan verguldan , keyin massivga joylab beradi.
// Pastdagi misolda, biz stringlarni vergul va boshliq bilan massivga kesib soldik.

let names = "Bilbo, Gandalf, Nazgul";

let arr7 = names.split(", ");

for (let name of arr7) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// Usul splitixtiyoriy ikkinchi raqamli argumentga ega - massiv uzunligi chegarasi. Agar u taqdim etilsa, qo'shimcha elementlar e'tiborga olinmaydi. Amalda u kamdan-kam qo'llaniladi, ammo:

let arr8 = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);

console.log(arr8); // Bilbo, Gandalf

// harflarga ajratiladi !!!
// split(s) bo'sh qoldirish, stringni belgilarga ajratib tashlaydi:

let str = "test";

console.log(str.split("")); // t,e,s,t

// arr.join huddi split ni teskarisi, ya'ni belgidan keyin stringa qo'shib beradi:

let arr9 = ["Bilbo", "Gandalf", "Nazgul"];

let str1 = arr9.join(";"); // glue the array into a str1ing using ;

console.log(str1); // Bilbo;Gandalf;Nazgul

// #REDUCE, REDUCERIGHT

// Arrayni iteratsiya qilish uchun biz forEach, for..of, for larni ishlatishimiz mumkin.
// Qachonki biz iteratsiya va harbir elementlar orniga malumot qaytarishni hohlasak biz- map ni ishlatamiz.
// arr.reduce() va arr.reduceRight methodlari ham shu zotga mansub, lekin biroz murakkabroq, ular massiv asosida bitta qiymatni hisoblash uchun ishlatiladi.

// Syntax:

let value = arr.reduce((accumulator, item, index, array) => {}, [initial]);

// callback arrayning harbir elementi uchun birin ketin qollaniladi va uning natijasi keyingi qo'ng'iroqacha davom etadi.

// Argumentlari:

// accumulator - bu oldingi qo'ng'iroqning natijasi, initial ga teng (agar u berilgan bo'lsa)
// item - hozirgi array elementi
// index uning pozitsiyasi
// array o'sha array

// Funktsiya qo'llanilganda, oldingi funktsiya chaqiruvining natijasi birinchi argument sifatida keyingisiga o'tkaziladi.
// Shunday qilib, birinchi argument aslida barcha oldingi ijrolarning umumiy natijasini saqlaydigan akkumulyatordir. Va oxirida bu natijaga aylanadi reduce.

// Murakkab tuyuladimi?

// Buni tushunishning eng oson yo'li - bu misol.
// Bu erda biz bir qatordagi massivning yig'indisini olamiz:

let arr10 = [1, 2, 3, 4, 5];

let response = arr10.reduce((sum, current) => {
  console.log("sum: " + sum);
  console.log("current: " + current);
  return sum + current;
}, 0);
console.log(response); // 15

sum: 0;
current: 1;
sum: 1;
current: 2;
sum: 3;
current: 3;
sum: 6;
current: 4;
sum: 10;
current: 5;
15;

// ko'rib turganimizdek sum bu qiymat saqlaydigan argument currentdagi esa arraydagi harbir elementdir
// Ko'p holatlarda 2 ta argument ishlatishni o'zi ham yetarli hisoblanadi.

// Keling, nima bo'layotganini batafsil ko'rib chiqaylik.

// 1 - Birinchi sum ishga tushirilganda sum ning qiymati 0 bo'ladi sababi initial qiymat berilgan, current buning manosi hozirgi qiymat degani ya'ni 2 chida turgan parameter harbir callback bajarilganda uning natijasi arraydagi harbir elementga teng bo'lib boradi.
// 2 - ikkinchi ishga tushurishda, sum = 1 bo'ladi va bizni functionimiz ishlaydi va unga massivning keyingi elementini qo'shamiz.
// 3 - Uchinchi yugurishda sum = 3va biz unga yana bitta element qo'shamiz va hokazo ...

// Hisoblash oqimi:
// look to website!!!

// Yoki jadval ko'rinishida, bu erda har bir satr keyingi massiv elementida funksiya chaqiruvini ifodalaydi:

// look to website!!!

// Bu erda biz oldingi qo'ng'iroqning natijasi keyingisining birinchi argumentiga aylanishini aniq ko'rishimiz mumkin.

// Biz boshlang'ich qiymatni ham o'tkazib yuborishimiz mumkin:

let TheArr = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result2 = TheArr.reduce((sum, current) => sum + current);

console.log(result2); // 15

// Natija bir xil. Buning sababi shundaki, agar boshlang'ich bo'lmasa, u holda reducemassivning birinchi elementini boshlang'ich qiymat sifatida qabul qiladi va iteratsiyani 2-elementdan boshlaydi.
// Hisoblash jadvali yuqoridagi bilan bir xil, minus birinchi qator.
// Ammo bunday foydalanish juda ehtiyotkorlik talab qiladi. Agar massiv bo'sh bo'lsa, reduceboshlang'ich qiymatisiz qo'ng'iroq xato beradi:

let arr4 = [];

// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr4.reduce((sum, current) => sum + current, 1);
console.log(arr4); // []
// Shuning uchun har doim boshlang'ich qiymatni ko'rsatish tavsiya etiladi.

// Masalan yana bitta real projectdan misol:
const orders = [
  { id: 1, amount: 150.0 },
  { id: 2, amount: 75.5 },
  { id: 3, amount: 210.25 },
  { id: 4, amount: 50.0 },
];

// Using reduce() to calculate the total order amount
const totalRevenue = orders.reduce((total, order) => total + order.amount, 0);

console.log(totalRevenue); // Output: 485.75

// arr.reduceRight usuli ham xuddi shunday qiladi, lekin o'ngdan chapga o'tadi.

// #Array.isArray

// Massivlar alohida til tipini hosil qilmaydi. Ular ob'ektlarga asoslangan.

// Shunday qilib, typeof oddiy ob'ektni massivdan ajratishga yordam bermaydi:
console.log(typeof {}); // object
console.log(typeof []); // object (same)

// …Lekin massivlar shunchalik tez-tez ishlatiladiki, buning uchun maxsus usul mavjud: Array.isArray(value) . true Agar value massiv bo'lsa, qaytaradi , aks holda false.
console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true

// Most methods support "thisArg" - Ko'p metodlar thisArg ni qo'llab quvvatlaydi:

// Deyarli barcha massiv methodlarida find, filter, map va sezilarli istisno bilan sortda, ixtiyoriy qo'shimcha thisArg ni ishlatishga ruxsat beradi.

// Here’s the full syntax of these methods:

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg oxirgi va ixtiyoriy argument

// thisArg parametri func uchun qiymat bo'ladi, ya'ni funksiya bajarilishi uchun qiymat bo'ladi

// Misol:

let userArmy = {
  minAge: 18,
  maxAge: 27,
  canJoin(users) {
    return users.age >= this.minAge && users.age <= this.maxAge;
  },
};

let candidates = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

let soldiers = candidates.filter(userArmy.canJoin, candidates);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// idea

// Agar yuqoridagi misolda biz dan foydalangan bo'lsak users.filter(army.canJoin), u army.canJoinholda mustaqil funktsiya sifatida chaqiriladi va this=undefinedbu bir zumda xatolikka olib keladi.

// Qo'ng'iroqni users.filter(army.canJoin, army)bilan almashtirish mumkin users.filter(user => army.canJoin(user)), bu ham xuddi shunday qiladi. Ikkinchisi tez-tez ishlatiladi, chunki ko'pchilik uchun tushunish biroz osonroq.

// Summary:

// Bu arraylar methodlar uchun cheatsheet:

// Qo'shish va olib tashlash:
// push(...items) massiv ohiridan istalgancha element qo'sha oladi,
// pop() massiv ohiridan shunchaki bitta element oladi,
// shift() massiv ichida birinchi element oladi,
// unshift(...) massiv boshidan element qo'sha oladi,
// splice(pos, deleteCount, item1, ..., itemN) pos dan boshlab deleteCountgacha o'chiradi, va o'rniga itemslar qo'yiladi
// slice(start, end) yangi massiv yaratadi va ularni start dan boshlab turib end'gacha copy qiladi
// concat(...items) yangi array qaytaradi, avvalgi massivga hamma yangi parameterda berilgan massiv qo'shiladi va yangi array qaytariladi.
// Elementlarni qidirish
// indexOf, lastIndexOf(item, pos) item uchun pos dan boshlab turib qidirishni boshlaydi, topilsa index topilmasa - 1 qaytaradi
// includes(value) value ni massiv ichidan qidiradi va topilsa true aks holda false qaytaradi
// find/filter(func) find,filter topadi saralaydi
// findIndex bu find ga o'xshash ammo value emas index qaytaradi.
// Iteratsiya qilish:
// forEach(func) - massiv harbitta elementi uchun funksiya ishga tushiradi, hechnima qaytarmaydi
// Arrayni transforatsiya qilish:
// map(func) massiv harbir elementi uchun func ishlatadi va yangi massivda qiymat qayataradi.
// sort(func) arrayni joyida sortlab tashlaydi va qaytaradi.
// reverse() arrayni teskari tartibda qiladi
// split/join stringni arrayga, arrayni stringa convert qiladi.
// reduce/reduceRight harbitta valueni hisoblash uchun func ga call qiladi va ohirgi qiymatni qaytaradi
// Qo'shimcha:
// Array.isArray(value) value ni array yoki yo'qligini tekshiradi, true yokida false qaytaradi.

// Iltimos esingizda qo'ying sort, reverse va splice arrayni o'zini o'zgartiradi.
// Ushbu usullar eng ko'p qo'llaniladi, ular foydalanish holatlarining 99% ni qamrab oladi. Ammo yana bir nechtasi bor:
// arr.some(fn) / arr.every(fn) massivni tekshiring.

// Funktsiya fnga o'xshash massivning har bir elementida chaqiriladi map. Agar biron-bir/barcha natijalar bo'lsa true, qaytaradi true, aks holda false.
// Bu usullar o'xshash ||va &&operatorlar bilan ishlaydi: agar fnhaqiqiy qiymat qaytarilsa, arr.some()darhol qaytib keladi trueva qolgan elementlarni takrorlashni to'xtatadi; agar fnnoto'g'ri qiymat qaytarsa, arr.every()darhol qaytaradi falseva qolgan elementlarni ham takrorlashni to'xtatadi.

// everydan Biz massivlarni solishtirish uchun foydalanishimiz mumkin:
function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

console.log(arraysEqual([1, 2], [1, 2])); // true

// arr.fill(qiymat, boshlanish, tugatish) – massivni valueindeksdan startga qadar takrorlash bilan to‘ldiradi end.

// arr.copyWithin(maqsad, start, end) – o‘z elementlarini joydan startjoylashuvgacha endo‘ziga , holatiga ko‘chiraditarget (mavjudni ustiga yozadi).

// arr.flat(depth) / arr.flatMap(fn) ko'p o'lchovli massivdan yangi tekis massiv yaratadi.

// To'liq ro'yxat uchun qo'llanmaga qarang .

// Bir qarashda, juda ko'p usullar mavjud bo'lib tuyulishi mumkin, ularni eslab qolish juda qiyin. Lekin aslida bu ancha oson.

// Ulardan xabardor bo'lish uchun hiyla varaqlarini ko'rib chiqing. Keyin massiv usullari bilan tajribaga ega bo'lishingiz uchun mashq qilish uchun ushbu bobning vazifalarini hal qiling.

// Keyinchalik massiv bilan biror narsa qilish kerak bo'lganda va qanday qilishni bilmasangiz - bu erga keling, cheat varag'iga qarang va to'g'ri usulni toping. Misollar uni to'g'ri yozishga yordam beradi. Tez orada siz o'zingizning aniq harakatlaringizsiz usullarni avtomatik ravishda eslab qolasiz.

