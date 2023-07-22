// Strings - Matn malumot turi

// Javacriptda matnlar string malumot turi sifatida saqlanadi. Harbitta belgi uchun alohida tur mavjud emas.

// Satrlar uchun ichki format har doim UTF-16 bo'lib , u sahifa kodlashiga bog'lanmagan.
// https://www.ibm.com/docs/en/i/7.2?topic=unicode-utf-16
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Quotes

// Keling, tirnoq turlarini eslaylik.
// Biz matnlarni qo'shtirnoq "", birtirnoq '', yoki terstirnoq ``, orqali yaratishimiz mumkin.

let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;

// Yagona va qo'sh tirnoqlar asosan bir xil. Biroq, orqa tig'lar har qanday ifodani satrga o'rash orqali kiritishimizga imkon beradi ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Backticklardan foydalanishning yana bir afzalligi shundaki, ular qatorni bir nechta satrlarni qamrab olish imkonini beradi:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

// Tabiiy ko'rinadi, to'g'rimi? Ammo bitta yoki ikkita tirnoq bu tarzda ishlamaydi.

// Agar biz ulardan foydalansak va bir nechta qatorlardan foydalanishga harakat qilsak, xato bo'ladi:

// let guestList2 = "Guests: // Error: Unexpected token ILLEGAL
//   * John";

// Yagona va qoʻsh qoʻshtirnoqlar koʻp qatorli qatorlarga boʻlgan ehtiyoj eʼtiborga olinmagan til yaratilishining qadimgi davrlaridan kelib chiqqan. Backticks ancha keyin paydo bo'ldi va shuning uchun ko'p qirrali.

// Special characters - Maxsus belgilar

let guestList1 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList1);

// Oddiyroq misol sifatida, bu ikki qator teng, faqat boshqacha yozilgan:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

// Boshqa, kamroq tarqalgan maxsus belgilar mavjud:

// in website

// Ko'rib turganingizdek, barcha maxsus belgilar teskari chiziq belgisi bilan boshlanadi \. U "qochish belgisi" deb ham ataladi.

// Bu juda o'ziga xos bo'lgani uchun, agar biz \satr ichida haqiqiy teskari chiziqni ko'rsatishimiz kerak bo'lsa, uni ikki barobarga oshirishimiz kerak:

alert(`The backslash: \\`); // The backslash: \

// "Qochib ketgan" deb ataladigan qo'shtirnoq \', \", \`bir xil tirnoqli qatorga qo'shtirnoq qo'shish uchun ishlatiladi.

alert("I'm the Walrus!"); // I'm the Walrus!

// Ko'rib turganingizdek, biz ichki tirnoqni teskari chiziq bilan oldinga qo'yishimiz kerak \', chunki aks holda u satr oxirini bildiradi.

// Albatta, faqat qo'shimchalar bilan bir xil bo'lgan tirnoqlardan qochish kerak. Shunday qilib, yanada oqlangan yechim sifatida biz qo'sh tirnoq yoki orqaga o'tishimiz mumkin:

alert("I'm the Walrus!"); // I'm the Walrus!

// Ushbu maxsus belgilardan tashqari, Unicode kodlari uchun maxsus belgi ham mavjud , u kamdan-kam qo'llaniladi va Unicode\u… haqidagi ixtiyoriy bo'limda yoritiladi .

// String length

// Stringlarda length xususiyatini qo'llashimiz mumkin.

console.log(`My\n`.length); // 3

// E'tibor bering, bu \n bitta "maxsus" belgi, shuning uchun uzunlik haqiqatdan ham 3.

// length mulk hisoblanadi

// Baʼzi boshqa tillarda maʼlumotga ega boʻlgan odamlar baʼzan str.length()shunchaki oʻrniga qoʻngʻiroq qilib notoʻgʻri yozishadi str.length. Bu ishlamayapti.

// E'tibor bering, bu str.length funktsiya emas, balki raqamli xususiyatdir. Undan keyin qavs qo'shishning hojati yo'q. Yo'q .length(), lekin .length.

// Accessing characters

// Qandaydir bir string ichidan belgilarni olmoqchi bo'lsak, biz bunga [o'rni] 4 burchak qavslar orqali yoki str.at[o'rni] orqali erishishimiz mumkin.Birinchi belgini olish uchun [0] yozih kerak.

let myStr = "Hello";

// Birinchi belgi:
console.log(myStr[0]); // H
console.log(myStr.at(0)); //H

// Oxirgi belgini olish:
console.log(myStr[myStr.length - 1]);
console.log(myStr.at(-1)); // myStr.length == 5; myStr - 1 = 4

// Ko'rib turganingiz kabi, .at(position) methodida ko'proq foyda hususiyatlari mavjud, agarda birinchi turgan belgiga erishishni xoxlasak negative yani teskari sanoq qilishimiz mumkin va sanashni teskaridan boshlaydi.

// Demak .at(-1) eng so'ngi belgini bildiradi, va ikki esa undan oldingi degani .at(-2).
// Agar to'rtburchak qavslarda negative sonlarni ishlatsak, bu bizga undefined yani topilmadiga olib kelishi mumkin.

let nthStr = `Hello`;

console.log( nthStr[-2] ); // undefined
alert( nthStr.at(-2) ); // l

// Biz harbitta belgi uchun iteration (iteratsiya) qilishimiz mumkin for..of ni ishlatgan holatda:

for(let characters of "Hello"){
  console.log(characters);
}

// Stringlardagi belgilar o'zgarmasdir:

let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work

// Uni o'zgartirishni yo'li uni qiymatini qaytadan o'zgartirishdir.

let anotherStr = 'Hi';

anotherStr = 'h' + anotherStr[1]; // replace the anotherString

alert( anotherStr ); // hi

// Keyingi bo'limlarda biz bunga ko'proq misollarni ko'ramiz.

// Changing the case

// toUpperCase() va toLowerCase()

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface


// Yoki bitta belgini kichik harf bilan yozishni xohlasak:
alert( 'Interface'[0].toLowerCase() ); // 'i'

// Searching for a substring - malum bir so'zni topish

// Bizda gap ichidan malum bir so'zni olib olishniing bir nechta turli yo'llari mavjud.

// str.indexOf(substr, position).

let str = 'Widget with id';

console.log(str.indexOf("Widget")); // 0, sababi sanoq 0 dan boshlanadi va bizga Widget degan so'zning indexini chqarib beradi.
console.log( str.indexOf('widget') ); // -1, topilmadi, katta-kichikligini ham tekshiradi.

console.log( str.indexOf("id") ); // 1, "id" id topildi lekin > (..idget with id) ni ichidan.

// Ixtiyoriy ikkinchi parametr bizga berilgan pozitsiyadan qidirishni boshlash imkonini beradi.

// Misol uchun id ning topilishi 1 chi pozitsiyada, va biz paramaterni 2 chi pozitsiyadan boshla deganimiz uchun u qidiruvni shu pozitsiyadan keyin boshlaydi.

let mytr = 'Widget with id';

console.log( mytr.indexOf('id', 2) ) // 12