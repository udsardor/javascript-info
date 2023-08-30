// JSON methods, toJSON
// Aytaylik, bizda murakkab ob'ekt bor va biz uni satrga aylantirmoqchimiz, uni tarmoq orqali jo'natmoqchimiz yoki uni ro'yxatga olish maqsadida chiqarishni xohlaymiz.

// Tabiiyki, bunday satr barcha muhim xususiyatlarni o'z ichiga olishi kerak.
//Biz konvertatsiyani quyidagicha amalga oshirishimiz mumkin:

let user = {
  name: "Jogn",
  age: 30,
  toString() {
    return `{name: "${this.name}, age: ${this.age}"}`;
  },
};

console.log(user + "1");

// …Lekin rivojlanish jarayonida yangi xususiyatlar qo'shiladi, eski xususiyatlar o'zgartiriladi va o'chiriladi. Har safar bunday yangilash toStringog'riqli bo'lishi mumkin. Biz undagi xususiyatlarni aylanib chiqishga harakat qilishimiz mumkin, lekin agar ob'ekt murakkab bo'lsa va xususiyatlarda ichki ob'ektlar bo'lsa-chi? Biz ularning konvertatsiyasini ham amalga oshirishimiz kerak.

// Yaxshiyamki, bularning barchasini hal qilish uchun kod yozishning hojati yo'q. Vazifa allaqachon hal qilingan.

// JSON.stringify

// JSON(Javascript Object Notation) bu ob'ektlarni va qiymatlarni ifodalash uchun mahsus format hisoblanadi. Boshida javascript uchun ishlab chiqarilgan, lekin boshqa ko'plab dasturlash tillari uni qo'llab-quvvatlaydi.Demak server ta'raf harqaday tilda yozilgan bo'lishiga qaramasdan PHP,RUBY,JAVA bo'lsin client tarafda javascript ishlatilganda JSON malumot almashinish uchun ishlatsak bo'ladi.

// Javacript bizga methodlarni taqdim etadi:
JSON.stringify; // ob'ektlarni JSON ga o'girish uchun.
JSON.parse; // JSON dan ob'ektga qaytarish uchun

// JSON.stringify methodini manabu "talaba" bilan ishlatamiz:

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string
console.log(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

// Usul JSON.stringify(student)ob'ektni oladi va uni satrga aylantiradi.

// json'ning natijasi JSON-encoded yoki serialized yoki marshalled ob'ekt ham deb ataladi. Biz uni tarmoq bo'ylab yuborishga yoki oddiy xotiraga saqlashga tayyormiz.

// Esda tuting JSON-encoded lar ning muhim eslatmalari bor:

// Stringlar bir tirnoq bo'la olaydi faqat qo'shtirnoq ishlatiladi yoki backticklar ham. 'John' - "John" bo'ladi.
// Ob'ekt propertylari ham qo'shtirnoq bo'ladi. Demak, age: 30, "age": 30 bo'ladi

// JSON.stringify primitivelar bilan ham qo'llanilishi mumkin.
// Qo'llab-quvvatlaydi:

// Ob'ektlar {...}
// Arraylar [...]
// Primitivlar:
// stringlar
// nomerlar
// booleanlar true/false
// null

// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// JSON shunchaki mustaqil ma'lumot turi, javascriptning ayrim ob'ekt property'lari JSON.stringify orqali o'tkazib yuboriladi
// Nomlari:
// Function saqlaydigan property'lar (methodlar)
// Symbol qiymat yoki keylar
// Qaysiki property'lar undefined saqlasa
let user1 = {
  sayHi() {
    // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user1)); // {} (empty object)

// Odatda bu yaxshi, lekin agar buni hohlamasak, biz uni sozlashni ko'rib chiqamiz.
// Eng ajoyib tarafi ichki ob'ektlar qo'llab quvvatlanadi va avtomatik konvertatsiya bo'ladi.

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup));
/* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,
    "participants":["john","ann"]},
  }
  */

// Muhim cheklov: bir biriga reference qiladigan ob'ektlar qo'llab-quvvatlanmaydi:

let room = {
  number: 23,
};

let meetup1 = {
  title: "Conference",
  participants: ["john", "ann"],
};

meetup1.place = room; // meetup1 - roomga reference qiladi
room.occupiedBy = meetup1; // room esa meetup1 ga reference qiladi

JSON.stringify(meetup1); // Xatolik: Converting circular structure to JSON

// Exculuding && tranforming: almashtiruvchi

// JSON.Stringify ning to'liq sintaxisi:

// let json = JSON.stringify(value[, replacer, space])

// value
// json formatiga o'girmoqchi bo'lgan qiymatimiz

// replacer
// arrayning property'larini encode yoki map qilish uchun funksiya function(key, value)

// space
// Formatlash uchun foydalaniladigan joy miqdori

// Ko'pincha faqat JSON.stringify ning birinchi argumenti ishlatilinadi.

// Ammo almashtirish jarayonini nozik sozlashimiz kerak bo'lsa, masalan, aylanma havolalarni filtrlash kabi, biz ning ikkinchi argumentidan foydalanishimiz mumkin JSON.stringify.

// Agar unga xossalar massivini uzatsak, faqat shu xossalar encode bo'ladi.

// Misol uchun:
let room = {
  number: 23,
};

let meetup3 = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup3 references room
};

room.occupiedBy = meetup3; // room references meetup3

console.log(JSON.stringify(meetup3, ["title", "participants"]));
// {"title":"Conference","participants":[{},{}]}
// va ya'ni reference bo'lgan joylar chiqarilmaydi

// Bu erda, ehtimol, biz juda qattiqqo'lmiz. Xususiyatlar ro'yxati butun ob'ekt tuzilishiga qo'llaniladi. Shunday qilib, ichidagi ob'ektlar participantsbo'sh, chunki namero'yxatda yo'q.
let room = {
  number: 23,
};

let meetup4 = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup4 references room
};

room.occupiedBy = meetup4; // room references meetup4

console.log(
  JSON.stringify(meetup4, ["title", "participants", "place", "name", "number"])
);
/*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
// room.occupiedByKeling, ro'yxatga dumaloq havolaga olib keladigan har bir xususiyatni kiritaylik :

// ikkichi argument shunday ishlaydi:

const odam = {
  ism: "John",
  yosh: 30,
  shahar: "New York",
  "maxfiyMa'lumot": "bu chiqarilmaydi",
};

const replacerFunksiya = (kalit, qiymat) => {
  if (kalit === "maxfiyMa'lumot") {
    return undefined; // maxfiyMa'lumot xususiyatni chiqarish
  }
  return qiymat; // Boshqa barcha xususiyatlar qo'shiladi
};

const jsonMatn = JSON.stringify(odam, replacerFunksiya, 2);
console.log(jsonMatn);

// Endi hamma narsa ketma occupiedBy-ketlashtirilgan. Ammo mulklar ro'yxati juda katta.

// Yaxshiyamki, biz massiv o'rniga funktsiyadan foydalanishimiz mumkin replacer.

// Funktsiya har bir juftlik uchun chaqiriladi (key, value)va asl qiymati o'rniga ishlatiladigan "almashtirilgan" qiymatni qaytarishi kerak. Yoki undefinedqiymat o'tkazib yuborilishi kerak bo'lsa.

// Bizning holatda, biz valuebundan tashqari hamma narsa uchun "xuddi shunday" qaytishimiz mumkin occupiedBy. E'tibor bermaslik uchun occupiedByquyidagi kod qaytariladi undefined:

let room = {
  number: 23,
};

let meetup5 = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup5 references room
};

room.occupiedBy = meetup5; // room references meetup5

console.log(
  JSON.stringify(meetup5, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

/* key:value pairs that come to replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  occupiedBy: [object Object]
  */

// Formatting: space

// JSON.stringify ning 3 chi argumenti encode ni chiroyli qilish uchun ishlatiladi.
// Oldingida umuman qo'shimcha bo'sh joylar yo'q edi. Bu yaxshi agar biz uni internet orqali jo'natmoqchi bo'lsak, ya'ni zichlangan holatda ketishi uchunm lekin biz chiroyli qilishni hohlasak space dan foydalanamiz

// Pastdagi misoldan space = 2 qiymati 2 ga tenglangan:

let user5 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user5, null, 2));
/* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */

/* for JSON.stringify(user5, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */

//  Custom “toJSON”

// Satrni konvertatsiya qilishda bo'lgani kabi toString, ob'ekt toJSONJ SONga o'tkazish usulini taqdim etishi mumkin. JSON.stringifyagar mavjud bo'lsa, uni avtomatik ravishda chaqiradi

let room = {
  number: 23,
};

let meetup7 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room,
};

console.log(JSON.stringify(meetup7));

// date (1)Bu erda biz bu satrga aylanganini ko'rishimiz mumkin . toJSONBuning sababi, barcha sanalarda bunday qatorni qaytaradigan o'rnatilgan usul mavjud .

// toJSONE ndi ob'ektimiz uchun odatiy qo'shamiz room (2):

let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup8 = {
  title: "Conference",
  room,
};

console.log(JSON.stringify(room)); // 23

console.log(JSON.stringify(meetup8));
/*
    {
      "title":"Conference",
      "room": 23
    }
  */
// Ko'rib turganimizdek, to'g'ridan-to'g'ri qo'ng'iroq uchun ham , boshqa kodlangan ob'ektga joylashtirilganda ham toJSONishlatiladi .JSON.stringify(room)room

// #JSON.parse
// JSON.parse stringni decodlash ya'ni JSON formatidagi narsani o'z holatiga qaytarish uchun.

// To'liq ko'rinishi

let value = JSON.parse(str, [reviver]);

// str
// JSON-string ni parse qilish uchun
// reviver
// Har bir juftlik uchun chaqiriladigan (key, value)va qiymatni o'zgartira oladigan ixtiyoriy funksiya (kalit, qiymat).

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

// yoki nested ob'ektlar uchun:

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user10 = JSON.parse(userData);

console.log(user10.friends[1]); // 1

// JSON kerakli darajada murakkab bo'lishi mumkin, ob'ektlar va massivlar boshqa ob'ektlar va massivlarni o'z ichiga olishi mumkin. Lekin ular bir xil JSON formatiga bo'ysunishlari kerak.

let json1 = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;

// Bundan tashqari, JSON sharhlarni qo'llab-quvvatlamaydi. JSONga izoh qo‘shish uni yaroqsiz qiladi.

// JSON5 nomli yana bir format mavjud bo'lib , u qo'shtirnoqsiz kalitlar, sharhlar va hokazolarni ko'rsatishga imkon beradi. Lekin bu alohida kutubxona bo'lib, til spetsifikatsiyasida emas.

// Muntazam JSON juda qattiq, chunki uni ishlab chiquvchilar dangasa emas, balki tahlil qilish algoritmini oson, ishonchli va juda tez amalga oshirish imkonini beradi.

// Reviverdan foydalanish

// Tasavvur qiling meetup, biz serverdan simli ob'ektni oldik .

// Bu shunday ko'rinadi:

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// …Va endi biz JavaScript obyektiga qaytish uchun uni seriyadan chiqarishimiz kerak .

// Keling, qo'ng'iroq qilib buni qilaylik JSON.parse:

let str2 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup11 = JSON.parse(str2);

console.log( meetup11.date.getDate() ); // Error!
console.log(meetup11);

// Voy! Xato!

// ning qiymati meetup.dateob'ekt emas, balki satrdir Date. JSON.parseBu satrni ga aylantirish kerakligini qanday bilish mumkin Date?

// JSON.parseIkkinchi argument sifatida qayta jonlantirish funksiyasiga o'tamiz , u barcha qiymatlarni "xuddi shunday" qaytaradi, lekin datega aylanadi Date:

let str3 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup12 = JSON.parse(str3, (key, value) => {
  return key == "date" ? new Date(value) : value
})

console.log(meetup12.date.getDate());

// Aytgancha, bu ichki o'rnatilgan ob'ektlar uchun ham ishlaydi:

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( schedule.meetups[1].date.getDate() ); // works!


// Masala:

// let room = {
//   number: 23
// };

// let meetup0 = {
//   title: "Conference",
//   occupiedBy: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// // circular references
// room.occupiedBy = meetup0;
// meetup0.self = meetup0;

// alert( JSON.stringify(meetup0, function replacer(key, value) {
//   /* your code */
// }));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/