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
// Brauzer ob'ekt modeli (BOM) documentdan tashqari hamma narsa bilan ishlash uchun brauzer (xost muhiti) tomonidan taqdim etilgan qo'shimcha ob'ektlarni ifodalaydi.

// Masalan; misol uchun:
// Navigator ob'ekti brauzer va operatsion tizim haqida ma'lumot beradi . Ko'pgina xususiyatlar mavjud, ammo eng keng tarqalgan ikkitasi: navigator.userAgent- joriy brauzer haqida va navigator.platform- platforma haqida (Windows/Linux/Mac va boshqalarni farqlashga yordam beradi).
// location ob'ekti bizga joriy URL manzilini o'qish imkonini beradi va brauzerni yangisiga yo'naltirishi mumkin.

// Ob'ektdan qanday foydalanishimiz mumkin location:
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}

// Funktsiyalar alert/confirm/promptham BOMning bir qismidir: ular documnet bilan bevosita bog'liq emas, lekin foydalanuvchi bilan muloqot qilish uchun sof brauzer usullarini ifodalaydi.

// Texnik xususiyatlari
// BOM umumiy HTML spetsifikatsiyasining bir qismidir .Ha, siz buni to'g'ri eshitdingiz. Https://html.spec.whatwg.org saytidagi HTML spetsifikatsiyasi nafaqat "HTML tili" (teglar, atributlar), balki bir qator ob'ektlar, usullar va brauzerga xos DOM kengaytmalarini ham qamrab oladi. Bu "keng ma'noda HTML". Bundan tashqari, ba'zi qismlarda https://spec.whatwg.org saytida ko'rsatilgan qo'shimcha xususiyatlar mavjud .

// Xulosa:
// Standartlar haqida gapiradigan bo'lsak, bizda:

// DOM spetsifikatsiyasi
// Hujjat tuzilishi, manipulyatsiya va hodisalarni tavsiflaydi, qarang: https://dom.spec.whatwg.org .
// CSSOM spetsifikatsiyasi
// Uslublar jadvallari va uslublar qoidalari, ular bilan manipulyatsiyalar va hujjatlar bilan bog'lanishi tasvirlangan, qarang: https://www.w3.org/TR/cssom-1/ .
// HTML spetsifikatsiyasi
// HTML tilini (masalan, teglar) va shuningdek, BOMni (brauzer ob'ekt modeli) tavsiflaydi - turli xil brauzer funktsiyalari: setTimeout, alert, locationva hokazo, qarang: https://html.spec.whatwg.org . U DOM spetsifikatsiyasini oladi va uni ko'plab qo'shimcha xususiyatlar va usullar bilan kengaytiradi.
// Bundan tashqari, ba'zi sinflar https://spec.whatwg.org/ saytida alohida tasvirlangan .

// Iltimos, ushbu havolalarga e'tibor bering, chunki o'rganish uchun juda ko'p narsa borki, hamma narsani qamrab olish va hammasini eslab qolish mumkin emas.

// Xususiyat yoki usul haqida oʻqishni istasangiz, https://developer.mozilla.org/en-US/ manzilidagi Mozilla qoʻllanmasi ham yaxshi manbadir, ammo mos keladigan xususiyatlar yaxshiroq boʻlishi mumkin: u murakkabroq va o'qish uchun uzoqroq bo'ladi, lekin asosiy bilimlaringizni mustahkam va to'liq qiladi.

// Biror narsani topish uchun odatda “WHATWG [term]” yoki “MDN [term]” internet qidiruvidan foydalanish qulay, masalan, https://google.com?q=whatwg+localstorage , https://google.com?q =mdn+lokal xotira .

// Endi biz DOMni o'rganishga kirishamiz, chunki hujjat UIda markaziy rol o'ynaydi.