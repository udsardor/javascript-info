// Sana va Vaqtlar
// Keling yana javascriptni o'zida mavjud bo'lgan Date konstruktorini ko'rib chiqamiz, u o'zida sanani saqlaydi, sana va vaqtni boshqarishga yordam beradi.

// Yaratilishi

// new Date() qilish orqali yaratiladi, hechqanday argumentlarsiz.

let now = new Date();
console.log(now); // hozirgi sana va vaqtlarni ko'rsatadi

// Date ob'ektini parametriga 0 beradigan bo'lsak buning ma'nosi 1970 yil 1chi yanvar UTC+0 degan sanani beradi, buning sababi 0 desak vaqt qaysi sanadan boshlab qo'shilganligini aanglatadi, va agar biz sonlarni 1/1000 sifatida yozsak u 1sekundga teng bo'ladi, 2000 - 2 sekund etc.
let date_1970jan = new Date(0);
console.log(date_1970jan);

// 24 soat qo'shamiz, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

// 01.01.1970 dan oldingi sanalar salbiy vaqt belgilariga ega, masalan:
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

console.log(new Date())

// Loop ishlashi uchun nechi sekund vaqt olganini hisoblash
let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

console.log( `The loop took ${end - start} ms` ); // subtract numbers, not dates

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log(daysOfWeek);