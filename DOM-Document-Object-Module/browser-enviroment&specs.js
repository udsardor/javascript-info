// !code format qilmang
// Browser environment, specs - Brauzer muhiti va texnik hususiyalari

// Javacript dasturlash tili dastlab veb-brauzerlar uchun ishlab chiqilgan. O'shandan beri u ko'plab foydalanish va platformalarga ega bo'lgan tilga aylandi.

// Platforma brauzer bo'lishi mumkin, yoki veb-server va yoki boshqa host, yoki hatto aqqli kahva mashinasi bo'lsin, u javascripni ishga tushira oladi. Ularning harbiri platforma spesifikatsiyasiga mos funksionallik bilan ta'minlaydi. Javascript spesifikatsiyasi buni host environment - host muhiti deydi.

// Xost muhiti til yadrosiga qo'shimcha ravishda o'z ob'ektlari va funktsiyalarini ta'minlaydi. Veb-brauzerlar veb-sahifalarni boshqarish vositalarini beradi. Node.js server tomonidagi xususiyatlarni taqdim etadi va hokazo.

// JavaScript veb-brauzerda ishga tushgan payti bizda nima borligini ko'ramiz:

            //     window     //
// DOM        // BOM            // Javascript
 //* document // * navigator      // * Object
    //...     // * screen         // * Array
              // * location       // * Function
              // * frames           ...
              // * history
              // * XMLHttpRequest

// Buyerda window deb nolanadigan root ob'ekt mavjud uni bir ikkita ro'li mavjud:

// Birinchidan, u Global ob'ekt bo'limida tavsiflanganidek, JavaScript kodi uchun global ob'ektdir.
// Ikkinchidan, u "brauzer oynasi" ni ifodalaydi va uni boshqarish usullarini taqdim etadi.

// Masalan, biz uni global ob'ekt sifatida ishlatishimiz mumkin:

function sayHi() {
    alert("Hello");
  }
// global functions are methods of the global object:
window.sayHi();

// Va biz uni brauzer oynasi sifatida ishlatishimiz mumkin, oyna balandligini ko'rsatish uchun:

alert(window.innerHeight); // inner window height

// Ko'proq oynaga xos usullar va xususiyatlar mavjud, biz ularni keyinroq ko'rib chiqamiz.