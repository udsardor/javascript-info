// Object to primitive conversion - Ob'ektlarni primmitive larga o'girish.

// Agar ob'ektlar qo'shilsa obj1 + obj2, yoki ayrilsa obj1 - obj2, yoki masalan alert ga chiqarilsa alert(obj) nima sodir bo'ladi.

// JavaScript sizga operatorlarning obyektlarda qanday ishlashini sozlash imkonini bermaydi. Ruby yoki C++ kabi baʼzi boshqa dasturlash tillaridan farqli oʻlaroq, biz qoʻshish (yoki boshqa operatorlar) bilan ishlash uchun maxsus obʼyekt usulini amalga oshira olmaymiz.

// Bunday amallar bajarilgan taqdirda ob'ektlar avtomatik ravishda primitivlarga aylantiriladi, so'ngra operatsiya shu primitivlar ustida amalga oshiriladi va natijada primitiv qiymat olinadi.

// Bu muhim cheklov, obj1 + obj2 ning natijasi (yoki boshqa matematik operatisya) yangi ob'ekga teng bo'lmaydi.

// Masalan, biz vektorlar yoki matritsalarni (yoki yutuqlar yoki boshqa narsalarni) ifodalovchi ob'ektlarni yarata olmaymiz, ularni qo'shamiz va natijada "jamlangan" ob'ektni kutamiz. Bunday me'moriy yutuqlar avtomatik ravishda "taxtadan tashqarida" bo'ladi.

// Shunday qilib, biz bu erda texnik jihatdan ko'p ish qila olmasligimiz sababli, haqiqiy loyihalarda ob'ektlar bilan matematika yo'q. Bu sodir bo'lganda, kamdan-kam istisnolardan tashqari, kodlash xatosi tufayli.

// Ushbu bobda biz ob'ekt qanday qilib ibtidoiyga o'tishini va uni qanday sozlashni ko'rib chiqamiz.

// Bizning ikkita maqsadimiz bor:

// 1 Bu bizga kodlash xatosi, bunday operatsiya tasodifiy sodir bo'lgan taqdirda nima sodir bo'lishini tushunishga imkon beradi.

// 2 Bunday operatsiyalar mumkin bo'lgan va yaxshi ko'rinadigan istisnolar mavjud. Masalan, sanalarni ayirish yoki solishtirish ( Date ob'ektlar). Biz ular bilan keyinroq uchrashamiz.

// Conversion rules - Konvertatsiya qoidalari.

// Biz type conversion mavzusida stringlar, no'merlar va boolean konvertatsiyasini ko'rib chiqgan edik, va u yerda ob'ektlar uchun bo'sh joy qo'yib ketgan edik.
//  Endi methodlar va symbol haqida bilganimizdek, uni to'ldirish mumkin bo'ladi.

// Booleanga hech qanday konvertatsiya yo'q. Barcha ob'ektlar true mantiqiy kontekstda, shunchalik oddiy. Faqat raqamli va qatorli konvertatsiyalar mavjud.

// Raqamli konvertatsiya ob'ektlarni ayirish yoki matematik funktsiyalarni qo'llashda sodir bo'ladi. Masalan, ob'ektlarni ( Sana va vaqtDate bobida ko'rib chiqilishi kerak ) ayirish mumkin va natija ikki sana orasidagi vaqt farqidir.date1 - date2

// let a = new Date().getFullYear(),
//     b = new Date().getHours();

//     console.log(a - b);

//     console.log(a);
//     console.log(b);

// alert(obj)String konvertatsiyasiga kelsak - bu odatda ob'ektni o'xshash kontekstda va o'xshash kontekstlarda chiqarganimizda sodir bo'ladi .

// Biz maxsus ob'ekt usullaridan foydalangan holda satr va raqamli konvertatsiyani o'zimiz amalga oshirishimiz mumkin.

// Endi texnik tafsilotlarga to‘xtalib o‘tamiz, chunki bu mavzuni chuqur yoritishning yagona     yo‘li.

// Hints - Maslahatlar

// Qaysi konvertatsiyani qo'llashni JavaScript qanday hal qiladi?

// Turli vaziyatlarda sodir bo'ladigan turdagi konvertatsiya qilishning uchta varianti mavjud. Spetsifikatsiyada tavsiflanganidek, ular "maslahatlar" deb ataladi :

// String convert bo'lishi: "string"

alert(obj); // alertga hamma narsa string holatda chiqadi.

anotherObj[obj] // ob'ekt property'si sifatida ishlatganimizda.

// "number", ob'ektni raqamga o'tkazish uchun, masalan, matematika bilan shug'ullanayotganimizda:
// aniq konvertatsiya
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;
