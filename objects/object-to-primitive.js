// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
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

// Booleanga hech qanday konvertatsiya yo'q. Barcha ob'ektlar true mantiqiy kontekstda, shunchalik oddiy. Faqat raqamli va string konvertatsiyalar mavjud.

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

anotherObj[obj]; // ob'ekt property'si sifatida ishlatganimizda.

// "number", ob'ektni raqamga o'tkazish uchun, masalan, matematika bilan shug'ullanayotganimizda:
// aniq konvertatsiya
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

// "default"
// Kamdan kam holatlarda yoki qachonki aniq bir malumot turi bo'lmagan payti yuzaga keladi.
// Misol uchun binary plus + stringlar va nomerlar bilan ham ishlashi mumkin. Agar binary plus ob'ektni operand sifatida olsa u "default" convertni ishlatadi.
// Agar ob'ektlar == tenglik operatori orqali string, nomer yoki symbollar orqali solishtirilsa , bu ham qanday conversion qilinishi aniq bo'lmaydi va default conversion ishlatiladi.

// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) {
    /*... */
}

// Kichik yoki katta < > operatorlari stringlar va nomerlar bilan ham ishlatilinadi. Ular haliyam number conversion hint ishlatadi, default hint emas.Bu tarixiy sabablar uchun.

// Amalda esa, narsalar biroz sodda.

// Bitta holatdan tashqari barcha o'rnatilgan ob'ektlar ( Dateob'ekt, buni keyinroq bilib olamiz) "default"konversiyani xuddi shu tarzda amalga oshiradi "number". Va, ehtimol, biz ham xuddi shunday qilishimiz kerak.

// Shunday bo'lsa-da, barcha 3 maslahat haqida bilish muhim, tez orada nima uchun ekanligini bilib olamiz.

// Konvertatsiya qilish uchun JavaScript uchta ob'ekt usulini topishga va chaqirishga harakat qiladi:

// Qo'ng'iroq objSymbol.toPrimitive- ramziy kalit (tizim belgisi) bilan usul Symbol.toPrimitive, agar bunday usul mavjud bo'lsa,
// Aks holda, maslahat bo'lsa "string"
// obj.toString()yoki obj.valueOf()nima bo'lsa, qo'ng'iroq qilib ko'ring .
// Aks holda, agar maslahat "number"yoki"default"
// obj.valueOf()yoki obj.toString()nima bo'lsa, qo'ng'iroq qilib ko'ring .

// let a = {
//     name : 'John',
//     age : 40,
//     [Symbol.toPrimitive]: function(hint){
//         console.log(hint);
//         return this.age
//     }
// };
// let b = {
//     name : 'John',
//     age : 30,
//     [Symbol.toPrimitive]: function(hint){
//         console.log(hint);
//         return this.age
//     }
// };

// console.log(a - b);

// Symbol.to Primitive
// Birinchi usuldan boshlaylik. Konvertatsiya usulini nomlash uchun ishlatilishi kerak bo'lgan o'rnatilgan belgi mavjud Symbol.toPrimitive, masalan:

obj[Symbol.toPrimitive] = function (hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
};

//   Agar usul Symbol.toPrimitivemavjud bo'lsa, u barcha maslahatlar uchun ishlatiladi va boshqa usullar kerak emas.

// Masalan, bu erda userObj ob'ekt uni amalga oshiradi:

let userObj = {
    name: "Sardor",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log("Hint: " + hint);
        return hint == "string" ? { name: "${this.name}" } : this.money;
    },
};

console.log(userObj); // hint: string -> {name: "John"}
console.log(+userObj); // hint: number -> 1000
console.log(userObj + 500); // hint: default -> 1500

// Koddan ko'rib turganimizdek, userkonvertatsiyaga qarab o'z-o'zini tavsiflovchi satr yoki pul miqdoriga aylanadi. Yagona usul user[Symbol.toPrimitive]barcha konversiya holatlarini ko'rib chiqadi.

// toString/valueOf

// Agar Symbol.toPrimitive bo'lmasa javascript boshqa methodlarni topishga harakat qiladi, toString va valueOf:
// String hint uchun: toString() methodini chaqiring, va u mavjud bo'lmasa yoki primitive o'rniga ob'ekt qaytarsa, keyinchalik, valueOf() ni chaqiring, (shunday qilib toString() stringlar uchun ustunligi mavjud).

// Boshqa hintlarga: valueOf() chaqiring, agar u mavjud bo'lmasa yoki primitive o'rniga ob'ekt qaytarsa, toString() murojat qiling (valueOf() math operatorlari bilan ustunligi mavjud

// toString va toString ancha vaqt ilgaridan kelayabdi. Ular simvollar emas, simvollar oldin mavjud bo'lmagan, balki ular "muntazam" usuldir.  Ular konvertatsiyani amalga oshirish uchun muqobil "eski uslub" usulini taqdim etadilar.

// Bu methodlar primitive qaytarishi kerak. Agar ular ob'ekt qaytarsa, bu inobatga olinmaydi va hechqanday usul yo'qdek qolaveradi.

// Odatiy bo'lib, oddiy ob'ekt quyidagi toStringva valueOfusullariga ega:

// Usul toStringsatrni qaytaradi "[object Object]".
// Usul valueOfob'ektning o'zini qaytaradi.

// demo:

let anyUser = { name: "John" };
alert(user); //"object object";

alert(user.valueOf() === user); // true

// Shunday qilib, agar biz ob'ektni satr sifatida ishlatishga harakat qilsak, masalan, alertyoki shunga o'xshash, sukut bo'yicha biz ni ko'ramiz [object Object].

// Sukut bo'yicha valueOfbu erda faqat to'liqlik uchun, chalkashliklarga yo'l qo'ymaslik uchun eslatib o'tiladi. Ko'rib turganingizdek, u ob'ektning o'zini qaytaradi va shuning uchun e'tiborga olinmaydi. Sababini so‘ramang, bu tarixiy sabablarga ko‘ra. Shunday qilib, biz u mavjud emas deb taxmin qilishimiz mumkin.
// Keling, konvertatsiyani sozlash uchun ushbu usullarni amalga oshiramiz.
// Misol uchun, bu erda va o'rniga userbirikmasidan foydalangan holda yuqoridagi kabi ishlaydi :toStringvalueOfSymbol.toPrimitive

let myUser = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }

};

alert(myUser); // toString -> {name: "John"}
alert(+myUser); // valueOf -> 1000
alert(myUser + 500); // valueOf -> 1500

// Ko'rib turganimizdek, xatti-harakatlar oldingi misol bilan bir xil Symbol.toPrimitive.

// Ko'pincha biz barcha ibtidoiy konvertatsiyalarni boshqarish uchun bitta "barchasini qo'lga oladigan" joyni xohlaymiz. Bunday holda, biz toString faqat quyidagi kabi amalga oshirishimiz mumkin:

let userMy = {
    name: "John",

    toString() {
        return this.name;
    }
};

alert(userMy); // toString -> John
alert(userMy + 500); // toString -> John500

// Agar Symbol.toPrimitiveva bo'lmasa valueOf, toStringbarcha ibtidoiy konversiyalarni bajaradi.

// Konvertatsiya har qanday ibtidoiy turni qaytarishi mumkin
// Barcha ibtidoiy konvertatsiya usullari haqida bilish kerak bo'lgan muhim narsa shundaki, ular "ishora qilingan" ibtidoiyni qaytarishi shart emas.

// toStringAynan satrni qaytaradimi yoki Symbol.toPrimitiveusul hint uchun raqamni qaytaradimi yoki yo'qmi , hech qanday nazorat yo'q "number".

// Yagona majburiy narsa: bu usullar ob'ektni emas, balki ibtidoiyni qaytarishi kerak.


// Tarixiy eslatmalar
// Tarixiy sabablarga ko'ra, agar ob'ektni qaytarsa toString​​yoki valueOfqaytarsa, xato bo'lmaydi, lekin bunday qiymat e'tiborga olinmaydi (masalan, usul mavjud bo'lmaganda). Buning sababi, qadimgi davrlarda JavaScript-da yaxshi "xato" tushunchasi bo'lmagan.

// Aksincha, Symbol.toPrimitiveqat'iyroq, u primitivni qaytarishi kerak , aks holda xato bo'ladi.


// Keyingi konvertatsiyalar

// Bizga ma'lumki, ko'pgina operatorlar va funksiyalar turlarni o'zgartirishni amalga oshiradilar, masalan, ko'paytirish *operandlarni raqamlarga aylantiradi.

// Agar ob'ektni argument sifatida topshirsak, hisob-kitoblarning ikki bosqichi mavjud:

// Ob'ekt primitivga aylantiriladi (yuqorida tavsiflangan qoidalardan foydalangan holda).
// Agar keyingi hisob-kitoblar uchun kerak bo'lsa, natijada olingan ibtidoiy ham o'zgartiriladi.

let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
        return "2";
    }
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

// Ko'paytirish obj * 2birinchi navbatda ob'ektni ibtidoiyga aylantiradi (bu string "2").
// Keyin "2" * 2bo'ladi 2 * 2(satr raqamga aylantiriladi).

// Ikkilik plyus bir xil vaziyatda satrlarni birlashtiradi, chunki u satrni mamnuniyat bilan qabul qiladi:


let obj2 = {
    toString() {
        return "2";
    }
};

alert(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation


// Xulosa
// Ob'ektni ibtidoiyga o'tkazish ko'plab o'rnatilgan funksiyalar va qiymat sifatida primitivni kutadigan operatorlar tomonidan avtomatik ravishda chaqiriladi.

// Uning 3 turi (maslahatlari) mavjud:

// "string"(uchun alertva qator kerak bo'lgan boshqa operatsiyalar)
// "number"(matematika uchun)
// "default"(bir nechta operatorlar, odatda ob'ektlar uni xuddi shu tarzda amalga oshiradi "number")
// Spetsifikatsiyada qaysi operator qaysi maslahatdan foydalanishi aniq tasvirlangan.

// Konvertatsiya qilish algoritmi:

// obj[Symbol.toPrimitive](hint)Agar usul mavjud bo'lsa, qo'ng'iroq qiling
// Aks holda, maslahat bo'lsa"string"
// obj.toString()yoki obj.valueOf()nima bo'lsa, qo'ng'iroq qilib ko'ring .
// Aks holda, agar maslahat "number"yoki"default"
// obj.valueOf()yoki obj.toString()nima bo'lsa, qo'ng'iroq qilib ko'ring .
// Bu usullarning barchasi ishlash uchun primitivni qaytarishi kerak (agar belgilangan bo'lsa).

// Amalda, ko'pincha, obj.toString()ro'yxatga olish yoki disk raskadrovka maqsadlarida ob'ektning "odam tomonidan o'qilishi mumkin bo'lgan" ko'rinishini qaytarishi kerak bo'lgan string konvertatsiyalari uchun faqat "hammasini ushlab turish" usuli sifatida amalga oshirish kifoya.