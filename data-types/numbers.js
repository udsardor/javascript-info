// Numbers

// Zamonaviy javascripda raqamlarning ikki turi mavjud: 

// 1 Odatiy nomerlar, ular hotirada 64 bit formatda saqlanadi IEEE-754. Bular "Ikki tomonlama aniqlikdagi suzuvchi nuqta nomerlari" deb ham ataladi. Bu nomerlar biz ko'p vaqtdan beri ishlatib kelinayotgan nomerlardir, va ularni biz bu qismda o'rganamiz.

// 2 BigInt raqamlari ixtiyoriy uzunlikdagi butun sonlarni ifodalaydi. Ular ba'zan kerak bo'ladi, chunki oddiy butun son xavfsiz tarzda oshib ketishi yoki undan kam bo'lishi mumkin emas, biz avvalroq Ma'lumotlar turlari bo'limida aytib o'tganimizdek . Bigintlar bir nechta maxsus sohalarda qo'llanilganligi sababli, biz ularga BigInt ning maxsus bobini ajratamiz .(253-1)-(253-1)

// Shunday qilib, biz bu erda oddiy raqamlar haqida gaplashamiz. Keling, ular haqidagi bilimlarimizni kengaytiraylik.

// Raqamni yozishning boshqa usullari

// Tasavvur qiling, biz 1 milliard yozishimiz kerak. Aniq yo'l:

let billion = 1000000000;

// _Biz pastki chiziqni ajratuvchi sifatida ham ishlatishimiz mumkin :

let anotherBillion = 1_000_000_000;

// Bu erda pastki chiziq " sintaktik shakar_ " rolini o'ynaydi , bu raqamni yanada o'qilishi mumkin. JavaScript dvigateli raqamlar o'rtasida oddiygina e'tibor bermaydi, shuning uchun u yuqoridagi kabi bir milliardga teng._

// Haqiqiy hayotda biz nollarning uzun ketma-ketligini yozishdan qochishga harakat qilamiz. Biz buning uchun juda dangasamiz. "1bn"Biz milliard yoki "7.3bn"7 milliard 300 millionga o'xshash narsalarni yozishga harakat qilamiz . Ko'pchilik katta raqamlar uchun ham xuddi shunday.

// JavaScript-da biz raqamni "e"unga harf qo'shish va nol sonini ko'rsatish orqali qisqartirishimiz mumkin:

let billion2 = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000);


// Boshqacha qilib aytganda, e raqamni 1 berilgan nolga ko'paytiradi.

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// Endi juda kichik bir narsa yozamiz. Aytaylik, 1 mikrosoniya (soniyaning milliondan biri):

let mсs = 0.000001;

// Xuddi avvalgidek, foydalanish "e"yordam berishi mumkin. Agar biz nollarni aniq yozishdan qochmoqchi bo'lsak, xuddi shunday yozishimiz mumkin:

let mcs = 1e-6; // five zeroes to the left from 1

// Boshqacha qilib aytganda, keyingi manfiy raqam "e"berilgan nol soni bilan 1 ga bo'linishni anglatadi:

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

