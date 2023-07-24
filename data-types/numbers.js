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

alert(7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000);


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

// Hex, Binary and octal numbers 

// -----------------------------

// Rounding - Yaxlitlash

// Raqamlar bilan eng ko'p ishlatiladigan aamallardan biri bu yaxlitlashdir.
// Raqamlar uchun bir-nechta yaxlitlash methodlari mavjud.

// Math.floor():
// Pastga yaxlitlaydi: 3.1 - 3 bo'ladi, -1.1 - -2 bo'ladi

// Math.ceil():
// Yuqoriga yaxlitlaydi: 3.1 - 4 bo'ladi, -1.1 - -1 bo'ladi

// Math.round():
// Eng yaqiniga yaxlitlaydi: 3.1 - 3 bo'ladi, 3.6 - 4 bo'ladi, 3.5 esa uham 4 bo'ladi.

// Math.trunc(): (internet explorer qo'llab quvvatlamaydi)
// Raqamlardagi .3 keyingi sonni yaxlitlamasadan olib tashlaydi: 3.1 - 3 bo'ladi, -1.1 - -1 bo'ladi

// Bu funktsiyalar sonning o'nlik qismi bilan ishlashning barcha mumkin bo'lgan usullarini qamrab oladi. Agar biz o'nli kasrdan keyin raqamni n-th raqamga yaxlitlashni istasak nima bo'ladi ?

// Masalan, bizda bor 1.2345va uni 2 ta raqamga yaxlitlashni xohlaymiz, faqat 1.23.

// Buning ikki yo'li mavjud: 

// 1 - KO'paytirish va bo'lish: 

// Masalan, sonni o'nlik kasrdan keyingi 2-raqamga yaxlitlash uchun raqamni ga ko'paytirishimiz 100, yaxlitlash funktsiyasini chaqirishimiz va keyin uni qayta ajratishimiz mumkin.

let num = 1.23456;

alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// ToFixed(n) usuli raqamni n nuqtadan keyin raqamlarga yaxlitlaydi va natijaning satr tasvirini qaytaradi.

let num1 = 12.34;
alert(num1.toFixed(1)); // "12.3"

// Bu yuqoriga yoki pastga eng yaqin qiymatga yaxlitlanadi, shunga o'xshash Math.round:

let num2 = 12.36;
alert(num2.toFixed(1)); // "12.4"

// Esda tuting toFixed(n) ning qiymati stringdir. Agar o'nlik raqamdagi qism toFixed nikidan kichikroq bo'lsa unda oxiriga to'ldirish uchun 5 ta nol qo'shiladi.

let num3 = 12.34;
console.log(num3.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits

// Biz uni raqamga convert qilishimiz mumkin + yoki Number() orqali.

// Imprecise calculations - Noaniq hisoblash.

// Ichkarida raqam 64 bitli IEEE-754 formatida taqdim etilgan, shuning uchun raqamni saqlash uchun aniq 64 bit mavjud: ulardan 52 tasi raqamlarni saqlash uchun ishlatiladi, 11 tasi kasr o'rnini va 1 bit belgisi uchun.

// Agar raqam juda katta bo'lsa, u 64 bitli xotirani to'ldirishi va maxsus raqamli qiymatga aylanishi mumkin Infinity:

alert(1e500); // Infinity

// Bir oz kamroq ravshan bo'lishi mumkin, lekin tez-tez sodir bo'ladigan narsa aniqlikni yo'qotishdir.

// Ushbu (noto'g'ri!) tenglik testini ko'rib chiqing:

alert(0.1 + 0.2 == 0.3); // false

// To'g'ri, agar 0.1va ning yig'indisi 0.2ekanligini tekshirsak 0.3, ni olamiz false.

// G'alati! Agar bo'lmasa, bu nima 0.3?

// alert( 0.1 + 0.2 ); // 0.30000000000000004

// Voy! Tasavvur qiling-a, siz elektron xarid qilish sayti yaratyapsiz va tashrif buyuruvchi o'z savatiga tovarlarni $0.10qo'yadi . $0.20Buyurtmaning umumiy miqdori bo'ladi $0.30000000000000004. Bu har kimni hayratga solardi.

// Lekin nima uchun bu sodir bo'ladi?

// Raqam xotirada ikkilik shaklda saqlanadi, bitlar ketma-ketligi - birlik va nol. Ammo oʻnlik sanoq sistemasida oddiy koʻrinadigan kasrlar 0.1aslida 0.2 ikkilik koʻrinishdagi tugamaydigan kasrlardir.

// Bu nima 0.1? Bu o'nga bo'lingan bir 1/10, o'ndan bir. O'nlik sanoq sistemasida bunday sonlarni osongina ifodalash mumkin. Uni uchdan biriga solishtiring: 1/3. Bu cheksiz kasrga aylanadi 0.33333(3).

// Demak, kuchlar bo'yicha bo'linish 10o'nli kasr tizimida yaxshi ishlashi kafolatlanadi, lekin bo'linish 3emas. Xuddi shu sababga ko'ra, ikkilik sanoq tizimida darajalar bo'yicha bo'linish 2ishlashi kafolatlanadi, lekin 1/10cheksiz ikkilik kasrga aylanadi.

// Ikkilik tizim yordamida 0,1 yoki aniq 0,2 ni saqlashning hech qanday usuli yo'q , xuddi o'nlik kasr sifatida uchdan bir qismini saqlashning hech qanday usuli yo'q.

// IEEE-754 raqamli formati buni imkon qadar yaqin raqamga yaxlitlash orqali hal qiladi. Ushbu yaxlitlash qoidalari odatda "kichik aniqlik yo'qolishi" ni ko'rishga imkon bermaydi, lekin u mavjud.

alert(0.1.toFixed(20)); // 0.10000000000000000555

// Va ikkita raqamni jamlaganimizda, ularning "aniqlik yo'qotishlari" qo'shiladi.
// Shuning uchun 0.1 + 0.2aniq emas 0.3.

// Faqat JavaScript emas
// Xuddi shu muammo boshqa ko'plab dasturlash tillarida ham mavjud.

// PHP, Java, C, Perl, Ruby aynan bir xil natija beradi, chunki ular bir xil raqamli formatga asoslangan.

// Muammoni hal qila olamizmi? Albatta, eng ishonchli usul bu toFixed(n) usuli yordamida natijani yaxlitlashdir :

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // "0.30"

// toFixedIltimos, har doim satrni qaytarishini unutmang . Bu kasrdan keyin 2 ta raqamga ega bo'lishini ta'minlaydi. Agar bizda elektron xarid bo'lsa va ko'rsatish kerak bo'lsa, bu juda qulay $0.30. Boshqa hollarda, uni raqamga majburlash uchun unary plyusdan foydalanishimiz mumkin:

let sum2 = 0.1 + 0.2;
alert(+sum2.toFixed(2)); // 0.3

// Shuningdek, biz raqamlarni vaqtincha 100 ga (yoki undan kattaroq raqamga) ko'paytirishimiz, ularni butun songa aylantirishimiz, hisob-kitoblarni bajarishimiz va keyin ularni qaytarishimiz mumkin. Keyin, biz butun sonlar bilan matematika ishlayotganimizda, xatolik biroz kamayadi, lekin biz uni bo'lishda ham olamiz:

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// Shunday qilib, ko'paytirish/bo'lish usuli xatoni kamaytiradi, lekin uni butunlay olib tashlamaydi.

// Testlar: isFinite va isNaN

// Ushbu ikkita maxsus raqamli qiymatni eslaysizmi?

// Infinity(va -Infinity) har qanday narsadan kattaroq (kamroq) bo'lgan maxsus raqamli qiymatdir.
// NaN xatoni ifodalaydi.

// Ular turiga tegishli number, ammo "oddiy" raqamlar emas, shuning uchun ularni tekshirish uchun maxsus funktsiyalar mavjud:

// isNaN(value)o'z argumentini raqamga o'zgartiradi va keyin uning mavjudligini tekshiradi NaN:

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

// Ammo bu funktsiya bizga kerakmi? Biz shunchaki taqqoslashdan foydalana olmaymizmi === NaN? Afsuski yo'q. Qiymat NaNnoyobdir, chunki u hech narsaga teng emas, shu jumladan o'zi ham:

alert(NaN === NaN); // false

// parseInt and parseFloat
// Nomer konvertatsiyasi yoki unary + aniq nomer qaytaradi agar aniq nomer bo'lmasa, bu muvafaqqiyatsiz bo'ladi

alert(+"100px"); // NaN

// Yagona istisno qatorning boshida yoki oxiridagi bo'shliqlardir, chunki ular e'tiborga olinmaydi.

// Ammo real hayotda biz ko'pincha CSS kabi birliklarda qiymatlarga "100px"egamiz "12pt". Bundan tashqari, ko'pgina mamlakatlarda valyuta belgisi summadan keyin keladi, shuning uchun biz "19€"undan raqamli qiymatga egamiz va olishni xohlaymiz.

// Ular satrdan raqamni o'qiy olmaguncha "o'qiydilar". Xato bo'lsa, yig'ilgan raqam qaytariladi. Funktsiya parseIntbutun sonni qaytaradi, shu bilan birga parseFloatsuzuvchi nuqtali raqamni qaytaradi:

alert(parseInt('100px')); // 100
alert(parseFloat('12.5em')); // 12.5

alert(parseInt('12.3')); // 12, only the integer part is returned
alert(parseFloat('12.3.4')); // 12.3, the second point stops the reading


// parseInt/parseFloat NaN Qaytgan holatlar mavjud. Bu raqamlarni o'qib bo'lmaganda sodir bo'ladi:

alert(parseInt('a123')); // NaN, the first symbol stops the process

// Boshqa matematik funksiyalar: 
// JavaScript o'rnatilgan Math ob'ektiga ega bo'lib, unda matematik funktsiyalar va konstantalarning kichik kutubxonasi mavjud.
// Bir necha misol:

// Math.random()

// 0 dan 1 gacha bo'lgan tasodifiy sonni qaytaradi (1dan tashqari).

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (any random numbers)

// Math.max(a, b, c...)vaMath.min(a, b, c...)

// Argumentlarning ixtiyoriy sonidan eng katta va eng kichikni qaytaradi.

alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

// Math.pow(n, power)

// nBerilgan quvvatga ko'tarilgan qaytib keladi .
alert(Math.pow(2, 10)); // 2 in power 10 = 1024
// Ob'ektda ko'proq funktsiyalar va konstantalar mavjud , jumladan trigonometriya, ularni Math ob'ekti uchun hujjatlardaMath topishingiz mumkin .