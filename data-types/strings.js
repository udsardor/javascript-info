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

console.log(nthStr[-2]); // undefined
alert(nthStr.at(-2)); // l

// Biz harbitta belgi uchun iteration (iteratsiya) qilishimiz mumkin for..of ni ishlatgan holatda:

for (let characters of "Hello") {
  console.log(characters);
}

// Stringlardagi belgilar o'zgarmasdir:

let str = 'Hi';

str[0] = 'h'; // error
alert(str[0]); // doesn't work

// Uni o'zgartirishni yo'li uni qiymatini qaytadan o'zgartirishdir.

let anotherStr = 'Hi';

anotherStr = 'h' + anotherStr[1]; // replace the anotherString

alert(anotherStr); // hi

// Keyingi bo'limlarda biz bunga ko'proq misollarni ko'ramiz.

// Changing the case

// toUpperCase() va toLowerCase()

alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface


// Yoki bitta belgini kichik harf bilan yozishni xohlasak:
alert('Interface'[0].toLowerCase()); // 'i'

// Searching for a substring - malum bir so'zni topish

// Bizda gap ichidan malum bir so'zni olib olishniing bir nechta turli yo'llari mavjud.

// str.indexOf(substr, position).

let str = 'Widget with id';

console.log(str.indexOf("Widget")); // 0, sababi sanoq 0 dan boshlanadi va bizga Widget degan so'zning indexini chqarib beradi.
console.log(str.indexOf('widget')); // -1, topilmadi, katta-kichikligini ham tekshiradi.

console.log(str.indexOf("id")); // 1, "id" id topildi lekin > (..idget with id) ni ichidan.

// Ixtiyoriy ikkinchi parametr bizga berilgan pozitsiyadan qidirishni boshlash imkonini beradi.

// Misol uchun id ning topilishi 1 chi pozitsiyada, va biz paramaterni 2 chi pozitsiyadan boshla deganimiz uchun u qidiruvni shu pozitsiyadan keyin boshlaydi.

let mytr = 'Widget with id';

console.log(mytr.indexOf('id', 2)) // 12

// Agar str.indexOf() qanday ishlashini bilmoqchi bo'lsak loop dan foydalanishimiz mumkin:

let str = 'As sly as a fox, as strong as an ox';
let target = "as"

let position = 0;

while (true) {
  let foundPos = str.indexOf(target, position);

  if (foundPos == -1) break;

  alert(`Found at ${foundPos}`)
  pos = foundPos + 1
}

// Mana o'sha algoritm ning qisqacha shakli, qachonki while ga false tushadigan bo'lsa to'xtaydi;

let str = 'As sly as a fox, as strong as an ox';
let myTarget = "as";

let pos = -1;

while ((pos = str.indexOf(myTarget, pos + 1)) != -1) {
  console.log(`Position is ${pos}`);
}


// str.lastIndex(target, position);
// Bu yerda yana bitta indexOf ga o'xshash method bor str.lastIndexOf(substr, position) u string oxiridan sanoqni boshlaydi va boshigacha davom etadi. U hodisalarni teskari ravishda sanab o'tadi.

// indexOf ni ishlatishda biroz noqulaylik bor, biz bunday qila olmayiz: 

let myString = "Widget with id";

if (myStr.indexOf("Widget")) {
  console.log("Biz widgetni topdik!");
}

// Console.log chiqmaydi sababi, myStr.indexOf("Widget") boshlang'ich pozitsiyada 0 ni topadi lekin bilasiz 0 if ichiga tushgan paytdagi convertatsiya false ga aylanadi, va if tanasi ishlamaydi.

// Biz uni true/false ga emas -1 emasligini tekshirimiz kerak:

if (myStr.indexOf("Widget") != -1) {
  console.log("Biz widgetni topdik!"); // endi ishlaydi.
}

// Includes, startWith va endWith

// Yanada zamonaviyroq method  str.includes(substr, pos) matn ichida bor yo'qligiga qarab true/false qaytaradi.

// Agar biz haqiqatdanham bor yoki yo'qligini tekshirish uchun shuni ishlatganimiz maqulroq lekin index uchun emas.

alert("Widget with id".includes("Widget")); // true

alert("Hello".includes("Bye")); // false

// Ixtiyoriy argument str.includes(target, position) shu pozitsiyadan boshlab qidirsh kerakligini aytadi.
alert("Widget".includes("id")); // true
alert("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// Start with va endWith methodi:

alert("Widget".startsWith("Wid")) // true, "Widget" Wid so'zi bilan boshlaydi.
alert("Widget".endsWith("get")) // true, "Widget" get so'zi bilan tugaydi.

// Getting substring - Stringni olish:

// Javascriptda stringni olishni 3 ta usuli mavjud: substring, substr va slice.

// str.slice(start, [, end]);

// Startdan boshlab toki ohiri"gacha" qaytaradi. 0 dan 5 gacha bo'lsa 5 ni o'zigacha.

// Misol uchun:

let str = "stringify";
alert(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

// Agarda str.slice(oneArgument) bitta argument berilsa shu arguentdan boshlab ohirigacha kesadi

// Negative qiymatlar bilan ham iloji bor, bu degani sanashni teskaridan boshlaydi.

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // 'gif'

// Str.substring(start, [, end])

// start to end "gacha" qaytaradi.

// Bu deyarli slice bilan birxil, ammo bu start - enddan kattaroq qilish imkoniyatini beradi, bu oddiy masalan 6 chidan 2 gacha:

let str = "stringify";

// these are same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty string)

// Negative qiyatlar qo'llab quvvatlanmaydi. Ular 0 sifatida qaraladi.

// str.substr(start [, length])

// Stringning start dan boshlab berilgan uzunlikgacha bo'lgan qismni qaytaradi.

// Boshqa usullar bilan solishtiradigan bo'lsak, bu startdan boshlab end'gacha emas berilgan uzunlikgacha kesadi masalan 2 chi pozitsiyadan boshlab 4 ta kes degandek.

let str = "stringify";
alert(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// Negative qiyatlarniyam qollab quvvatashi mummkin:

let str = "stringify";
alert(str.substr(-4, 2)); // 'gi', 4 dan boshlab 2 ta kesadi.

// Ushbu usul til spetsifikatsiyasining B ilovasida keltirilgan . Bu shuni anglatadiki, faqat brauzerda joylashgan Javascript dvigatellari uni qo'llab-quvvatlashi kerak va undan foydalanish tavsiya etilmaydi. Amalda, u hamma joyda qo'llab-quvvatlanadi.

// Keling, chalkashmaslik uchun ushbu usullarni takrorlaymiz:

// Look it in browser:>

// Qay birini tanlash kerak:

// Ularning barchasi vazifani bajarishi mumkin. Rasmiy ravishda, substrkichik kamchiliklari bor: u asosiy JavaScript spetsifikatsiyasida emas, balki B ilovasida tasvirlangan, bu asosan tarixiy sabablarga ko'ra mavjud bo'lgan faqat brauzer xususiyatlarini qamrab oladi. Shunday qilib, brauzer bo'lmagan muhitlar uni qo'llab-quvvatlamasligi mumkin. Ammo amalda u hamma joyda ishlaydi.

// Qolgan ikkita variantdan slicebiroz moslashuvchanroq, u salbiy argumentlarga imkon beradi va yozishni qisqartiradi.

// Shunday qilib, amaliy foydalanish uchun faqat eslab qolish kifoya slice.

// Satrlarni taqqoslash:

// Taqqoslash mavzusidan bilamizki, stringlar alfavit tartibida belgima belgi taqqoslanadi.

// Garchi ba'zi g'alati holatlar mavjud.

// 1: Kichik harf har doim katta harfdan katta bo'ladi:

alert('a' > 'Z'); // true

// Diakritik belgilarga ega harflar "tartibsiz":

alert('Österreich' > 'Zealand'); // true

// Agar biz ushbu mamlakat nomlarini tartiblasak, bu g'alati natijalarga olib kelishi mumkin. Odatda odamlar ro'yxatda Zealandkeyin kelishini kutishadi .Österreich

// Nima sodir bo'lishini tushunish uchun Javascriptdagi satrlar UTF-16 yordamida kodlanganligini bilishimiz kerak . Ya'ni: har bir belgi mos keladigan raqamli kodga ega.

// Kod va orqaga belgini olish imkonini beruvchi maxsus usullar mavjud:

// str.codePointAt(pos)

alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

// String.fromCodePoint(code)

// Raqamga ko'ra belgi yaratadicode:
alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)

let str = "";

for (let i = 65; i < 220; i++) {
  str += String.fromCharCode(i);
}
alert(str);

// // Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// Koʻrdingizmi? Avval bosh harflar, keyin bir nechta maxsus belgilar, keyin kichik harflar va Öchiqish oxiriga yaqinlashadi.

// Endi nima uchun ma'lum bo'ldi a > Z.

// Belgilar ularning raqamli kodi bilan taqqoslanadi. Kattaroq kod belgi kattaroq ekanligini anglatadi. (97) uchun kod (90) akodidan kattaroqdir Z.

// Barcha kichik harflar katta harflardan keyin keladi, chunki ularning kodlari kattaroqdir.
// Ba'zi harflar kabi Öasosiy alifbodan ajralib turadi. aBu erda uning kodi dan boshlab hamma narsadan kattaroqdir z.

// To'g'ri taqqoslash:

// Satrlarni taqqoslashning "to'g'ri" algoritmi tuyulishi mumkin bo'lgandan ko'ra murakkabroq, chunki alifbolar turli tillar uchun farq qiladi.

// Demak, brauzer solishtirish uchun tilni bilishi kerak.
// Yaxshiyamki, zamonaviy brauzerlar ECMA-402 xalqaro standartini qo'llab-quvvatlaydi .

// U turli tillardagi satrlarni ularning qoidalariga rioya qilgan holda solishtirishning maxsus usulini taqdim etadi.

// str.localeCompare(str2) agar berilgan so'z 3 ta narsa qaytaradi.

// strdan kichik bo'lsa , manfiy sonni qaytaradi str2.
// strdan katta bo'lsa , ijobiy sonni qaytaradi str2.
// 0Agar ular ekvivalent bo'lsa, qaytariladi .

// Misol uchun:

alert('Österreich'.localeCompare('Zealand')); // -1

// Ushbu usulda hujjatlarda ko'rsatilgan ikkita qo'shimcha argument mavjud bo'lib , u tilni belgilashga imkon beradi (atrof muhitdan olingan, harflar tartibi tilga bog'liq bo'ladi) va katta-kichik harf sezgirligi kabi qo'shimcha qoidalarni o'rnatish yoki bir xil kabi ko'rib chiqilishi kerak va "a"hokazo "á".

// Xulosa:

// Kotirovkalarning 3 turi mavjud. Orqa tizmalar qatorga bir nechta satrlarni qamrab olish va ifodalarni joylashtirish imkonini beradi ${…}.
// Biz maxsus belgilardan foydalanishimiz mumkin, masalan, satr uzilishi \n.
// Belgini olish uchun: []yoki atusuldan foydalaning.
// Pastki qatorni olish uchun: sliceyoki dan foydalaning substring.
// Satrni kichik/katta harflar bilan yozish uchun: dan foydalaning toLowerCase/toUpperCase.
// Pastki qatorni qidirish uchun: indexOfyoki includes/startsWith/endsWithoddiy tekshiruvlar uchun foydalaning.
// Satrlarni tilga qarab solishtirish uchun: dan foydalaning localeCompare, aks holda ular belgilar kodlari bilan taqqoslanadi.

// Stringlarda yana bir qancha foydali usullar mavjud:

// str.trim()– satrning boshi va oxiridagi boʻshliqlarni (“qirqish”) olib tashlaydi.
// str.repeat(n)– qator n marta takrorlaydi.
let str = "Hello".repeat(2);
console.log(str); // HelloHello 
let str = "         Hello ".trim(); // Hello

// Satrlarda muntazam iboralar bilan qidirish/almashtirish usullari ham mavjud. Lekin bu katta mavzu, shuning uchun u alohida o'quv bo'limida tushuntirilgan REgular expressions .

// Bundan tashqari, hozircha satrlar Unicode kodlashiga asoslanganligini bilish juda muhim va shuning uchun taqqoslash bilan bog'liq muammolar mavjud. Unicode, String ichki bo'limida Unicode haqida ko'proq ma'lumot mavjud .

// Masalalar:

// Yozilgan stringni bosh harfini qaytaradigan funksiya yozing:

// st way

function ucFirst(str){
  let sliced =  str.trim().slice(0, 1).toUpperCase();
  str = str.trim().substring(1);
  sliced += str
  return sliced;
}
console.log(ucFirst(" Mezza"));

