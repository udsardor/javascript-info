// Arrays - Massivlar

// Ob'ektlar bizga keylar orqali qiymat saqlashga imkon beradi.

// Lekin bizga ko'plab holatlarda tartiblangan ro'yxat kerak bo'ladi, Masalan, bizga biror narsa ro'yxatini saqlash uchun kerak: foydalanuvchilar, tovarlar, HTML elementlari va boshqalar.Bu erda ob'ektdan foydalanish qulay emas, chunki u elementlar tartibini boshqarish usullarini taqdim etmaydi. Biz yangi xususiyatni mavjudlari orasiga kirita olmaymiz. Ob'ektlar shunchaki bunday foydalanish uchun mo'ljallanmagan.

// Array Buyurtma qilingan to'plamlarni saqlash uchun maxsus ma'lumotlar tuzilmasi mavjud .

// Declaration - Yaratish.

// Bo'sh massiv yaratish uchun ikkita sintaksis mavjud:

let constructorArr = new Array();
let arrLiteral = [];

// Deyarli har doim ikkinchi sintaksis ishlatiladi. Qavslar ichida dastlabki elementlarni taqdim etishimiz mumkin:

let fruits = ["Apple", "Orange", "Plum"];

// Massiv elementlari noldan boshlab raqamlangan.

// Biz elementni kvadrat qavs ichida raqami bo'yicha olishimiz mumkin:

let myFruits = ["Apple", "Orange", "Plum"];

alert( myFruits[0] ); // Apple
alert( myFruits[1] ); // Orange
alert( myFruits[2] ); // Plum

// Biz elementni almashtirishimiz mumkin:

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

// …Yoki massivga yangisini qo‘shing:

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

// Massivdagi elementlarning umumiy soni uning length:

alert( fruits.length ); // 3

// alertda biz butun massivni ko'rsatish uchun ham foydalanishimiz mumkin .

alert( fruits ); // Apple,Orange,Plum

// Massiv har qanday turdagi elementlarni saqlashi mumkin.

// Masalan:

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

// Ohirgi elementni at orqali olishimiz mumkin hisoblanadi
// Yangi qo'shilgan hisoblanadi eski browserlar uchun pollifils kerek bo'ladi.

// Keling arraydagi ohirgi element kerak deyilik.

// Ba'zi dasturlash tillarida negative sonlarga ruxsat beriladi, huddi fruit[-1];

// Garchi bu javascriptda ishlamasa ham undefined qaytaradi.

// Biz oxirgi element indeksini aniq hisoblab, unga kirishimiz mumkin: fruits[fruits.length - 1].

let anotherFruits = ["Apple", "Orange", "Plum"];

alert( anotherFruits[anotherFruits.length-1] ); // Plum

// Biroz noqulay, shunday emasmi? O'zgaruvchi nomini ikki marta yozishimiz kerak.

// Yaxshiyamki, qisqaroq sintaksis mavjud: fruits.at(-1):

let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

// Boshqacha aytganda arr.at(i).

// agar negative son kiritilsa sanoq teskaridan boshlanadi.

// Methods: pop/push, shift/unshift

