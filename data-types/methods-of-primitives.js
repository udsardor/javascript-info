// Methods of primitives - Primitive metodlari.

// Javascript bizga ibtidoiylar bilan ishlash uchun huddi ob'ektlarnikiga o'xshab ishlashga yordam beradigan metodlari mavjud. Ularga biz qo'ng'iroq qilamiz va ular ishlaydi. Biz ularni tez orada o'rganamiz, lekin avval biz uning qanday ishlashini ko'rib chiqamiz, chunki, albatta, ibtidoiylar ob'ektlar emas (va bu erda biz buni yanada aniqroq qilamiz).

// Keling, primitive va ob'ektlar o'rtasidagi asosiy farqlarni ko'rib chiqaylik

// Primitive'lar

// 7 ta ibtidoiy tip mavjud: string, number, bigint, boolean, va .symbol null undefined.

// Ob'ekt. Birnechta qiymatlarni kalit orqali saqlash imkonini beradi.
// bilan yaratilishi mumkin {},  masalan: {name: "John", age: 30}. JavaScript-da boshqa turdagi ob'ektlar mavjud: funktsiyalar, masalan, ob'ektlardir.

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