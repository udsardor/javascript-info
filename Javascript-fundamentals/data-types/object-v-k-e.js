// Object.keys, values, entries

// Keling, alohida ma'lumotlar tuzilmalaridan uzoqlashaylik va ular ustidagi iteratsiyalar haqida gapiraylik.

// Oldingi bobda biz usullarni ko'rdik map.keys(), map.values(), map.entries().

// Ushbu usullar umumiydir, ulardan ma'lumotlar tuzilmalari uchun foydalanish bo'yicha umumiy kelishuv mavjud. Agar biz o'zimizning ma'lumotlar tuzilmasini yaratsak, ularni ham amalga oshirishimiz kerak.

// Ular quyidagilar uchun qo'llab-quvvatlanadi:

// Map
// Set
// Array

// Oddiy ob'ektlar ham shunga o'xshash usullarni qo'llab-quvvatlaydi, ammo sintaksis biroz boshqacha.

// Object.keys, values, entries

// Oddiy ob'ekt uchun, quyidagi methodlar mavjud:
let objName = { name: "Jogn" };

Object.keys(objName); // ob'ektdan keylarini olib beradi
Object.values(objName); // ob'ektdan qiymatlarni olib beradi
console.log(Object.entries(objName));
// kalit va qiymatlarni manashu tartibda qaytaradi [ [ 'name', 'Jogn' ] ]

// Farqlarga e'tibor bering (masalan, Mapga nisbatan):
                // new Map().keys()     //  Ob'ekt
// call syntax: // map.keys()           //  Object.key(objName), lekin obj.keys emas
// qaytadi:     // iterable             //  "haqiqiy" massiv

// Birinchi farq,Object.keys(obj) shunday biz qo'ng'iroq qilishimiz kerak,lekin bunday obj.keys() emas.

// Ho'sh nimaga bunday bilasizmi? Sababi moslashuvchanlik, esda tuting Object bu javascriptning eng chuqur qismi hisoblanadi va shuning uchun moslashishi kerak. Ho'p qanday tasavvur qiling bizda data nomli ob'ekt mavjud va uni o'zining values data.values() nomli methodi bor va biz uni ishlatib bilishimiz uchun javascript o'zining methodlarini Object.methodName() qilib qo'shgan

// Ikkinchi farq shundaki, Object.*usullar faqat takrorlanadigan emas, balki "haqiqiy" massiv obyektlarini qaytaradi. Bu asosan tarixiy sabablarga ko'ra.

let user = {
    name: "John",
    age: 30
};
// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

// Object.values property qiymatlari ustidan aylanish uchun foydalanishga misol:

let myUser = {
    name: "John",
    age: 30
  };

  // loop over values
for (let value of Object.values(myUser)) {
    alert(value); // John, then 30
}

// Object.keys/values/entries Symbol xususiyatlarga e'tibor bermaydi

// Xuddi pastadir kabi , bu usullar kalit sifatida for..inishlatiladigan xususiyatlarni e'tiborsiz qoldiradi .Symbol(...)

// Odatda bu qulay. Ammo agar biz Symbol kalitlarni ham xohlasak, unda faqat Symbol kalitlar qatorini qaytaradigan Object.getOwnPropertySymbols alohida usuli mavjud . Bundan tashqari, barcha kalitlarni qaytaradigan Reflect.ownKeys(obj) usuli mavjud .


let pieces = {
    banana: 1,
    orange: 2,
    meat: 4,
}

let transformedObject = Object.fromEntries(
    Object.entries(pieces).map(entry => [entry[0], entry[1] * 2])
)

console.log(transformedObject);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries){
    let salary = Object.values(salaries),
        totalAmount = 0;

    if(salary.length){
        for(let value of salary){
            totalAmount += value
        }
    }else {
        return totalAmount = 0
    }

    return totalAmount
}

console.log( sumSalaries(salaries) ); // 650

function count(obj){
    return Object.keys(obj).length
}

let usr = {
    name: 'John',
    age: 30
};

console.log(count(usr));