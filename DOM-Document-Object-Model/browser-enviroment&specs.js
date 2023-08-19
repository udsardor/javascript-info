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


// DOM (Document Object Model)

// Hujjat ob'ekt modeli yoki qisqacha DOM barcha sahifa mazmunini o'zgartirish mumkin bo'lgan ob'ektlar sifatida ifodalaydi.
// document ob'ekti sahifaga asosiy kirish nuqtasidir. Biz undan foydalangan holatda hamma narsani o'zgartira olamiz hamda yarata olamiz.

// Misol uchun:
document.body.style.backgroundColor = "red"; // browser orqa foni qizil ranga kiradi

// 1 sekundan keyin yana joyiga qaytarib qo'yish:
setTimeout(() => {
    document.body.style.backgroundColor = "";
}, 1000); // 1000 degani 1 sekundni anglatadi, 2000 = 2s, 6000 = 6s .etc

// Bu erda biz dan foydalanganmiz document.body.style, lekin ko'p narsa bor. Xususiyatlari va usullari spetsifikatsiyada tasvirlangan: DOM Living Standard. https://dom.spec.whatwg.org/

// DOM faqat brauzerlar uchun emas
// DOM spetsifikatsiyasi hujjatning tuzilishini tushuntiradi va uni boshqarish uchun ob'ektlarni taqdim etadi. DOM-dan foydalanadigan brauzer bo'lmagan asboblar ham mavjud.
// Masalan, HTML-sahifalarni yuklab oladigan va ularni qayta ishlovchi server tomonidagi skriptlar ham DOM-dan foydalanishi mumkin. Ular spetsifikatsiyaning faqat bir qismini qo'llab-quvvatlashi mumkin.

// CSSOM for styling - CSS Object Model

// Shuningdek, CSS qoidalari va uslublar jadvallari uchun alohida spetsifikatsiya, CSS Ob'ekt Modeli (CSSOM) mavjud bo'lib , ular qanday ob'ektlar sifatida taqdim etilishini va ularni qanday o'qish va yozishni tushuntiradi.

// Hujjat uchun uslub qoidalarini o'zgartirganda CSSOM DOM bilan birgalikda ishlatiladi. Amalda, CSSOM kamdan-kam talab qilinadi, chunki biz kamdan-kam hollarda JavaScript-dan CSS qoidalarini o'zgartirishimiz kerak (odatda biz CSS sinflarini qo'shamiz/o'chiramiz, ularning CSS qoidalarini o'zgartirmaymiz), lekin bu ham mumkin.

// #BOM - Browser Object Model