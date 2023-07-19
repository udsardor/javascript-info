// Methods of primitives - Primitive metodlari.

// Javascript bizga ibtidoiylar bilan ishlash uchun huddi ob'ektlarnikiga o'xshab ishlashga yordam beradigan metodlari mavjud. Ularga biz qo'ng'iroq qilamiz va ular ishlaydi. Biz ularni tez orada o'rganamiz, lekin avval biz uning qanday ishlashini ko'rib chiqamiz, chunki, albatta, ibtidoiylar ob'ektlar emas (va bu erda biz buni yanada aniqroq qilamiz).

// Keling, primitive va ob'ektlar o'rtasidagi asosiy farqlarni ko'rib chiqaylik

// Primitive'lar

// 7 ta ibtidoiy tip mavjud: string, number, bigint, boolean, va .symbol null undefined.

// Ob'ekt. Birnechta qiymatlarni kalit orqali saqlash imkonini beradi.
// {} bilan yaratilishi mumkin ,  masalan: {name: "John", age: 30}. JavaScript-da boshqa turdagi ob'ektlar mavjud: funktsiyalar, masalan, ob'ektlardir.

// Ob'ektlarning eng yaxshi jihatlaridan biri shundaki, biz funktsiyani uning xususiyatlaridan biri sifatida saqlashimiz mumkin.

let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};

john.sayHi(); // Hi buddy!

// Ko'pgina o'rnatilgan ob'ektlar allaqachon mavjud, masalan, sanalar, xatolar, HTML elementlari va boshqalar bilan ishlaydiganlar. Ular turli xususiyat va usullarga ega.

// Biroq, bu xususiyatlar qimmatga tushadi!

// Ob'ektlar primitivlarga qaraganda "og'irroq". Ular ichki mexanizmlarni qo'llab-quvvatlash uchun qo'shimcha resurslarni talab qiladi.

// Ob'ekt sifatidagi primitivelar
// Javascript uaratuvchisi dush kelgan paradoks: 

// Masalan biz ko'plab narsalarni string yoki number ni o'zida qilishni xoxlaymiz, methodlar esa ayni muddao bo'lardi.
// Primitive lar imkor qadar tez va yengil bo'lishi kerak.

// Yechim sal noqulay ko'rinadi lekin mana yechim:

// Primitive lar haliya primitiveligicha qolgan. BItta qiymat ko'rsatilgan.
// Javascript bizga methodlar va propertilar bilan string, number, boolean va symbol orqali ishlashimiz mumkin.
// Buning ishlashi uchun qo'shimcha funktsiyalarni ta'minlaydigan maxsus "ob'ektni o'rash" yaratiladi va keyin yo'q qilinadi.
// Primitive larni ob'ektlarga o'rash xar xil bo'lib ular shunday ko'rinadi: String, Number, Boolean, Symmbol va BigInt. Shunday qilib ular turli xil usullar to'plamini taqdimm etadilar
// Misol uchun str.toUpperCase() string usuli mavjud bo'lib u str ni ichidagi stringni katta harflarga o'girib qaytaradi.

let str = "Hello";

alert(str.toUpperCase()); // HELLO

// Oddiy, to'g'rimi? Mana aslida nima sodir bo'ladi str.toUpperCase():

// 1 Satr strprimitivdir. Shunday qilib, uning xususiyatiga kirish paytida, satrning qiymatini biladigan va kabi foydali usullarga ega bo'lgan maxsus ob'ekt yaratiladi toUpperCase().
// 2 Bu usul ishlaydi va yangi satrni qaytaradi (ko'rsatilgan alert).
// 3 Maxsus ob'ekt yo'q qilinadi, ibtidoiy str yolg'iz qoladi.

// Shunday qilib, ibtidoiy usullarni taqdim etishi mumkin, ammo ular hali ham engil bo'lib qoladi.

// JavaScript mexanizmi bu jarayonni yuqori darajada optimallashtiradi. U hatto qo'shimcha ob'ektni yaratishni ham o'tkazib yuborishi mumkin. Lekin u baribir spetsifikatsiyaga rioya qilishi va xuddi uni yaratgandek harakat qilishi kerak.

// Raqamning o'ziga xos usullari bor, masalan, toFixed(n) raqamni berilgan aniqlikka yaxlitlaydi:

let n = 1.23456;

alert(n.toFixed(2)); // 1.23

// Biz aniqroq usullarni Raqamlar va satrlar bo'limlarida ko'rib chiqamiz .

// Konstruktorlar String/Number/Booleanfaqat ichki foydalanish uchun mo'ljallangan

// Bazi dasturlash tillari masalan Java bizga primitivelarni ob'ekt wrapperiga o'rashga yordam beradi a syntax bunga o'xshaydi: new Number(1) or new Boolean(false).

// Bu javascriptdayam tarixiy sabablarga ko'ra mavjud lekin ayrim joylarda "jinniga aylanadi".

// Misol uchun: 

alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert("zero is truthy!?!");
}

// Lekin new operatorini olib biz String , Number, Boolean qilib ishlatadigan bo'lsak bu bizga juda foydali bo'ladi. Ular qiymatlarni convertatsiya qilishda yordam beradi.

// Misol uchun: 
let num = Number("123"); // convert a string to number

// Null, undefined larda methodlar yo'q hisoblanadi.
// Maxsus null va undefined bular istisnolardir. Ular o'rovvchi ob'ektga o'ralmaydi va methodi ham yo'qdir. Va ular ashaddiy primitivelardir.

alert(null.test); // error

// Xulosa:

// Primitivlar ko'p foydali usullardan tashqari nullva ta'minlaydi. undefinedBiz ularni keyingi boblarda o'rganamiz.
// Rasmiy ravishda, bu usullar vaqtinchalik ob'ektlar orqali ishlaydi, ammo JavaScript dvigatellari buni ichki optimallashtirish uchun yaxshi sozlangan, shuning uchun ularga qo'ng'iroq qilish qimmat emas.


let ptr = "Hello";

ptr.test = 5;

alert(ptr.test);


