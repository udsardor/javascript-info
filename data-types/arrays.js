// Arrays - Massivlar

// Ob'ektlar bizga keylar orqali qiymat saqlashga imkon beradi.

// Lekin bizga ko'plab holatlarda tartiblangan ro'yxat kerak bo'ladi, Masalan, bizga biror narsa ro'yxatini saqlash uchun kerak: foydalanuvchilar, tovarlar, HTML elementlari va boshqalar.Bu erda ob'ektdan foydalanish qulay emas, chunki u elementlar tartibini boshqarish usullarini taqdim etmaydi. Biz yangi xususiyatni mavjudlari orasiga kirita olmaymiz. Ob'ektlar shunchaki bunday foydalanish uchun mo'ljallanmagan.

// Array Buyurtma qilingan to'plamlarni saqlash uchun maxsus ma'lumotlar tuzilmasi mavjud .

// Declaration - Yaratish.

// Bo'sh massiv yaratish uchun ikkita sintaksis mavjud:

let constructorArr = new Array();
let arrLiteral = [];

// Deyarli har doim ikkinchi sintaksis ishlatiladi. Qavslar ichida dastlabki elementlarni taqdim etishimiz mumkin:

let fruits = ["Apple", "Orange", "Plum"];

// Massiv elementlari noldan boshlab raqamlangan.

// Biz elementni kvadrat qavs ichida raqami bo'yicha olishimiz mumkin:

let myFruits = ["Apple", "Orange", "Plum"];

console.log(myFruits[0]); // Apple
console.log(myFruits[1]); // Orange
console.log(myFruits[2]); // Plum

// Biz elementni almashtirishimiz mumkin:

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

// …Yoki massivga yangisini qo‘shing:

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

// Massivdagi elementlarning umumiy soni uning length:

console.log(fruits.length); // 3

// console.logda biz butun massivni ko'rsatish uchun ham foydalanishimiz mumkin .

console.log(fruits); // Apple,Orange,Plum

// Massiv har qanday turdagi elementlarni saqlashi mumkin.

// Masalan:

// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { console.log('hello'); }];

// get the object at index 1 and then show its name
console.log(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// Ohirgi elementni at orqali olishimiz mumkin hisoblanadi
// Yangi qo'shilgan hisoblanadi eski browserlar uchun pollifils kerek bo'ladi.

// Keling arraydagi ohirgi element kerak deyilik.

// Ba'zi dasturlash tillarida negative sonlarga ruxsat beriladi, huddi fruit[-1];

// Garchi bu javascriptda ishlamasa ham undefined qaytaradi.

// Biz oxirgi element indeksini aniq hisoblab, unga kirishimiz mumkin: fruits[fruits.length - 1].

let anotherFruits = ["Apple", "Orange", "Plum"];

console.log(anotherFruits[anotherFruits.length - 1]); // Plum

// Biroz noqulay, shunday emasmi? O'zgaruvchi nomini ikki marta yozishimiz kerak.

// Yaxshiyamki, qisqaroq sintaksis mavjud: fruits.at(-1):

let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
console.log(fruits.at(-1)); // Plum

// Boshqacha aytganda arr.at(i).

// agar negative son kiritilsa sanoq teskaridan boshlanadi.

// Methods: pop/push, shift/unshift

// Massivlarda eng ko'p qo'llnadiladigan narsalardan biri bu queue va stack hisoblanadi:

// Queue ikkita operatsiyani qo'llab-quvvatlaydi:

// * "push" Array oxiridan elementlar qo'shadi.
// * "shift" Array boshidan elementni oladi, va navbatga qo'yadi, ya'ni 2 - turgan element 1 - element ga aylanadi va 3 - 2 ga va h.k

// <<< shift [] <<< push
// Bu juda kerak bo'ladi masalan ekranda ko'rsatilishi kerek bo'lgan elementlar navbati.

// Massivlar uchun yana bir foydalanish holati mavjud, bu stack deb nomlangan ma'lumotlar strukturasi.
// U ikkita operatsiyani qo'llab-quvvatlaydi:

// * "push" Array oxiridan elementlar qo'shadi.
// * "pop" Array oxiridan bitta element olib tashlaydi.

// Demak bu operatsiyada element faqat oxiridan qo'shiladi yoki olinadi.
// Bu huddi kartalar to'plamidek tasvirlanadi: ya'ni karta yoki tepadan olinadi yoki tepadan qo'shiladi.

// push \/ - pop /\

// Stacklarda oxirgi qo'shilgan narsa birinchi bo'lib qabul qilib olinadi, bu yana LIFO ham deb ataladi (Las-in-First-out), Queue lar esa FIFO (First-in-First-out)

// Arraylar ikkala queue va stackdan foydalanishi mumkin. Bu bizga elementlar qo'shish yoki olib tashlashda yordam beradi, boshidan ham ohiridan ham.

// Kompyuter fanlarida, yana bitta struktura mavjud, bu deque deb ham ataladi.

// Massiv ohiri bilan ishlatilinadigan methodlar:

// Oxirgi elementni oxiridan olib tashlash:

// pop

let fruits = ["Apple", "Orange", "Pear"];

console.log(fruits.pop()); // remove "Pear" and console.log it

console.log(fruits); // Apple, Orange

// Ikkala fruits.pop() va fruits.at(-1) arrayning ohirgi elementini qaytaradi, lekin pop methodi shu bilan birga uni o'chirib yuboradi.

// push

// Array oxiriga elementlar qo'shish: 

fruits.push("Pear");

console.log(fruits); // Apple, Orange, Pear

// fruits.push(...) ni chaqirish fruits[fruits.length] = "element" ga teng

// Array boshi bilan ishlaydigan methodlar: 

// shift

// Arraydan birinchida turgan elementni qirqib tashlaydi: 

console.log(fruits.shift()); // remove Apple and console.log it

console.log(fruits); // Orange, Pear

// unshift

// Array boshidan bizga element qo'shib beradi:

fruits.unshift('Apple');

console.log(fruits); // Apple, Orange, Pear

// Shift, push methodlari bir deganda bir nechta elementlarni ham qo'sha oladi:

let myFruit = ["Apple"];

myFruit.push("Orange", "Peach");
myFruit.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(myFruit);

// Arraylar ob'ektlarning maxsus turidir. To'rtburchak [] qavslar orqali property ga murojat qilishi bu aslida ob'ekt syntaxisisdan kelgan. Huddi obj[key] dek.

// Bu bizga maxsus tartiblangan kolleksiya orqali, hamda length hususiyatlari bilan ishlashga ruxsat beradi lekin u hali ham ob'ektligicha qoladi.
// Esingizda qo'ying Javascriptda faqatgina 8 ta malumot turi mavjud. Array ham o'zini huddi ob'ektday tutadi.

// Misol uchun bu reference beradi:

let fruits = ["Banana"]

let myarr = fruits; // faqat ikkita link hosil bo'ldi yangi massiv emas.

console.log(myarr === fruits); // true

myarr.push("Pear"); // link orqali arrayni o'zgartirdik

console.log(fruits); // Banana, Pear - 2 items now

// Ammo arraylarni chindan ham o'ziga xos qiladigan narsa bu uning ichki ko'rinishidir. Va ko'rganimizdek javascript dvigateli arraylarni birin ketin tartibda xotiraga saqlashda va boshqa optimal narsalari ham bor hisoblanadi.

// Ammo agar biz massiv bilan “buyurtma qilingan to‘plam” kabi ishlashni to‘xtatsak va u bilan oddiy ob’ektdek ishlay boshlasak, ularning barchasi buziladi.

// Masalan, texnik jihatdan biz buni qila olamiz:

let fruits = []; // make an array

fruits[99999] = 5; // arrayni o'zini uzunligidan ham ortiqroq index berib uni property sifatida ishlatish

fruits.age = 25; // array property sini huddi ob'ektniki kabi qo'shsak

console.log(fruits);

// Bu mumkin, chunki massivlar ularning bazasida joylashgan ob'ektlardir. Biz ularga har qanday xususiyatni qo'shishimiz mumkin.

// Javascript dvigateli ko'radiki biz massivlar bilan oddiy ob'ektdek ishlayabmiz. VA bu bizga arraylardagi optimallashtirish ni va samarisini yo'qatib qo'yadi.

// Array bilan noto'g'ri ishlatilgan holatlar:
// Nomerli bo'lmagan property qo'shishi, shunga o'xshash: arr.name = "myname".
// Array orasida yamalar yaratish misol uchun: arr[0] va arr[999] va ularning orasida hechnarsa yo'q.
// Arraylarni teskari holatda to'ldirish, shunga o'xshash: arr[1000], arr[999] va h.k.

// Iltimos, massivlarni buyurtma qilingan ma'lumotlar bilan ishlash uchun maxsus tuzilmalar deb tasavvur qiling . Buning uchun ular maxsus usullarni taklif qilishadi. Massivlar ketma-ket tartiblangan ma'lumotlar bilan ishlash uchun JavaScript dvigatellarida ehtiyotkorlik bilan sozlangan, ulardan shu tarzda foydalaning. Va agar sizga o'zboshimchalik bilan kalitlar kerak bo'lsa, sizga oddiy ob'ekt kerak bo'lish ehtimoli yuqori {}.

// Performance - Ishlashi

// push/pop methodlari tez ishlaydi, lekin shift/unshift ular sekin.

// Nima uchun massivning oxiri bilan ishlash uning boshiga qaraganda tezroq? Keling, ijro paytida nima sodir bo'lishini ko'rib chiqaylik:

// fruits.shift(); // take 1 element from the start

// Masalan, 0 chi indexdagi element shunchaki olib tashlash yetarli emas chunki qolgan elementlarni qayta nomlash kerek bo'ladi

// shift 3 ta operatsiyani bajarishi kerak: 

// Indeks bilan elementni olib tashlang 0.
// Barcha elementlarni chapga siljiting, ularni indeksdan 1ga 0, dan 2ga 1va hokazolarga qayta raqamlang.
// Mulkni yangilang length.

// Massivdagi elementlar qancha ko'p bo'lsa, ularni ko'chirish uchun ko'proq vaqt, xotirada ko'proq operatsiyalar.

// Shunga o'xshash narsa bilan sodir bo'ladi unshift: massivning boshiga element qo'shish uchun biz avval mavjud elementlarni indekslarini oshirib, o'ngga siljitishimiz kerak.

// Va nima bilan push/pop? Ular hech narsani siljitishlari shart emas. Elementni oxiridan chiqarish uchun popusul indeksni tozalaydi va length qisqartiradi.

// Operatsiya uchun harakatlar pop:

// fruits.pop(); // take 1 element from the end

// Usul pophech narsani ko'chirishga hojat yo'q, chunki boshqa elementlar o'z indekslarini saqlaydi. Shuning uchun u juda tez.
// push usul bilan o'xshash narsa .

// Loops

// Massiv elementlarini aylanishning eng qadimiy usullaridan biri bu forindekslar ustidan aylanishdir:

let newarr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < newarr.length; i++) {
    console.log(newarr[i]);
}

// Ammo massivlar uchun tsiklning yana bir shakli mavjud for..of:

let myotherfruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of myotherfruits) {
    console.log(fruit);
}

// For..of sintaksisi bizga raqam emas faqat qiymati o'zini qaytaradi, va deyarli barcha holatlarda bu yetarli bo'ladi.

// Texnik jihatdan arraylar ham ob'ekt hisoblanadi, demak for..in ham ishlatsak bo'ladi:

let myNdArr = ["Apple", "Orange", "Pear"];

for (let key in myNdArr) {
    console.log(myNdArr[key]); // Apple, Orange, Pear // key = 0, 1, 2
}

// Lekin bu haqiqatdanham yomon usul. Bu yerda muammolarga ko'p olib kelishi mumkin.

// 1. Loop faqatgina nomerlarni emas balki hamma propertylar bo'ylab aylanadi.
// Brauzerda va boshqa muhitlarda massivga o'xshash "massivga o'xshash" ob'ektlar mavjud. Ya'ni, ular lengthxossalarga ega va indekslar. lekin ular odatda bizga kerak bo'lmagan boshqa raqamli bo'lmagan xususiyatlar va usullarga ham ega bo'lishi mumkin. Loop for..inularni ro'yxatga oladi. Shunday qilib, agar biz massivga o'xshash ob'ektlar bilan ishlashimiz kerak bo'lsa,unda bu "qo'shimcha" xususiyatlar muammoga aylanishi mumkin.

// 2. Loop for..inmassivlar uchun emas, balki umumiy ob'ektlar uchun optimallashtirilgan va shuning uchun 10-100 marta sekinroq. Albatta, bu hali ham juda tez. Tezlik faqat to'siqlarda muhim bo'lishi mumkin. Ammo baribir biz farqni bilishimiz kerak.

// for..inUmuman olganda, biz massivlar uchun foydalanmasligimiz kerak.

// length
// Massivni o'zgartirganimizda length xususiyati avtomatik yangilanadi. Aniqroq aytadigan bo'lsak, bu aslida massivlardagi qiymatlar soni emas, balki eng katta raqam indexi hisoblanadi.

// Masalan, katta indeksli bitta element katta uzunlikni beradi:

let fruits = [];
fruits[123] = "Apple";

console.log(fruits.length); // 124

// Odatda biz massivlarni bunday qilib ishlatmaymiz. 
// Mulkning yana bir qiziq tomoni lengthshundaki, u qayta yozilishi mumkin.
// Agar biz uni qo'lda oshirsak, qiziq narsa bo'lmaydi. Ammo agar biz uni kamaytirsak, massiv kesiladi. Jarayon qaytarilmas, buning misoli:

let anyArr = [1, 2, 3, 4, 5];

anyArr.length = 2; // truncate to 2 elements
console.log(anyArr); // [1, 2]

anyArr.length = 5; // return length back
console.log(anyArr[3]); // undefined: the values do not return

// Shunday qilib, massivni tozalashning eng oddiy usuli: arr.length = 0;.

// new Array() 

// Massiv yaratish uchun yana bitta sintaksis mavjud:
let arrMy = new Array("Apple", "Pear", "etc");

// U kamdan-kam qo'llaniladi, chunki kvadrat qavslar [] qisqaroq. Bundan tashqari, u bilan murakkab xususiyat mavjud.
// Agar new Array(num) sintaksisiga uning argumentiga nomer beriladigan bo'lsa u elementlarsiz yaratiladi lekin berilgan son uzunlikdagi massiv yaratiladi.

let myfrr = new Array(2);

console.log(myfrr); // [<2 empty items>]
console.log(myfrr[0]); // undefined.

console.log(myfrr.length); // 2

// Bundan qochish uchun biz odatda to'rtburchak qavslarni ishlatamiz, va avzal ko'rilganiham o'shadir.

// Multidemensional arrays - Ko'p olchovli arraylar

// Arraylar o'z ichida arraylarni saqlashi mumkin. Biz buni ko'p olchovli arraylar uchun ishlatamiz, misol uchun matritsalarni saqlash mumkin:

// Matritsa - bu ko'p o'lchovli massiv yoki jadval ko'rinishidagi ma'lumotlar strukturasi. Oddiy matritsa axborot elementlarining to'g'ri to'rtburchakli jadvali hisoblanadi. 

// Masalan:

// 1 2 3
// 4 5 6
// 7 8 9

// Bu 3 x 3 o'lchamli matritsa. Matritsalarda quyidagi asosiy tushunchalar mavjud:

// - Element - matritsaning har bir katakchasi alohida element hisoblanadi. Yuqoridagi misolda 1, 2, 3, 4, ..., 9 elementlardir.

// - Qator va ustunlar - matritsa qator va ustunlar ko'rinishida tashkil topgan bo'ladi. Yuqoridagi misolda 3 ta qator va 3 ta ustun mavjud.

// - O'lcham - matritsaning qator va ustunlar soni uning o'lchamini ko'rsatadi. Yuqoridagi 3x3 o'lchamli matritsa.

// - Diagonal - chap yuqori burchakdan o'ng quyi burchakka o'tuvchi elementlar diagonal deb ataladi.

// - Transponirlangan matritsa - matritsani ustunlarini qatorlar bilan almashtirish transponirlash deyiladi.

// Matritsalar ko'plab matematik masalalarni yechishda qo'llaniladi, jumladan, tenglama tizimlarini yechishda, vektor va koordinatalar bilan ishlashda va hokazo.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); // array markazidagi element

// toString()

// Massivlar toString nomli vergul bilan ajratilgan string qaytaradigan method ishlatishi mumkin.

let stArr = [1, 2, 3];

console.log(stArr); // 1,2,3
console.log(String(stArr) === '1,2,3'); // true

// Keling buniham sinab ko'ramiz:

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

// Arraylarda Symbol.toPrimitive methodi yo'q, valueOf ham mavjud emas, array faqat toString degan methodni amalga oshirishga urinadi, shunday qilib [] to'rtburchak qavslar bo'sh stringga aylanadi, ya'ni [1] = "1", [1,2] esa "1, 2" ga konvert bo'ladi
// Ikkilik plyus "+"operatori satrga biror narsa qo'shganda, u ham uni satrga aylantiradi, shuning uchun keyingi qadam quyidagicha ko'rinadi:

console.log("" + 1); // "1"
console.log("1" + 1); // "11"
console.log("1,2" + 1); // "1,21"

// Massivlarni == bilan solishtirmang

// JavaScript-dagi massivlar, ba'zi boshqa dasturlash tillaridan farqli o'laroq, == operatori bilan solishtirilmasligi kerak.
// == operatori arraylar uchun maxsus ishlovga ega emas, u harqanday ob'ekt kabi ishlaydi.

// Keling qoidalarni takrorlaymiz: 

// Ikkita ob'ekt faqatgina 2 ta birxil havolaga  ega bo'lganida teng bo'ladi.

// Agar tenglik tekshirishning bir tarafi ob'ekt bo'lsa, va bittasi primitive bo'lsa, bu vaxta ob'ekt primitive ga konvertatsiya bo'ladi, huddi ob'ekt to primitive mavzusida ko'rganimizdek.

// Qattiq tenglik juda oson, bilamizki === qattiq tenglik type konvert qilmasdan tekshiradi.
// Demak agarda biz == operatori yordamida tekshiradigan bo'lsak bu hechqachon birxil bo'lmaydi, agarda biz ikkita bitta ob'ektga yo'nalitirilgan reference bo'lmasagina: 

console.log([] == []); // false
console.log([0] == [0]); // false

// Bu massivlar texnik jihatdan har xil ob'ektlardir. Demak, ular teng emas. Operator ==elementma-element taqqoslash qilmaydi.

// Primmitive bilan taqqoslash g'alati tuyulgan natijalarni ham berishi mumkin:

console.log(Number([])); // 0
console.log( 0 == [] ); // true  chunki [] qavs taqqoslash uchun 0 ga ayalanadi. 

console.log('0' == [] ); // false // bilamizki string ichida hattoki bo'sh  bitta probel ham bo'lsa true bo'ladi

// Bu yerda ikkala holatda ham massiv bilan primitive solishtirayapmiz. Shunday qilib, massiv [] taqqoslash uchun primitive "" ga aylanadi.

// Keyin taqqoslash jarayoni ibtidoiylar bilan davom etadi, bu bobda tavsiflangan konvertatsiya turlari:

// after [] was converted to ''
console.log(Number("")); // 0
console.log( 0 == '' ); // true, as '' becomes converted to number 0

console.log('0' == '' ); // false, no type conversion, different strings

// Xo'sh, massivlarni qanday solishtirish mumkin?

// Bu oddiy: operatordan foydalanmang ==. Buning o'rniga, ularni tsiklda yoki keyingi bobda tushuntirilgan iteratsiya usullaridan foydalanib, elementlarni taqqoslang.

// Xulosa:

// Massiv - buyurtma qilingan ma'lumotlar elementlarini saqlash va boshqarish uchun mos keladigan maxsus turdagi ob'ekt.

// Declaration - Yaratilishi

// square brackets (usual)
// let arr = [item1, item2...];

// new Array (exceptionally rare)
// let arr = new Array(item1, item2...);

// Qo'ng'iroq new Array(number)berilgan uzunlikdagi, lekin elementlarsiz massivni yaratadi.

// Xususiyat length massiv uzunligi yoki aniqrog'i, uning oxirgi raqamli indeksi plus bitta. U massiv usullari bilan avtomatik sozlanadi.

// Agar biz lengthqo'lda qisqartirsak, massiv kesiladi.

// Elementlarni olish:

// arr[0] kabi indeks bo'yicha elementni olishimiz mumkin
// at(i)manfiy indekslarga ruxsat beruvchi usuldan ham foydalanishimiz mumkin . ning manfiy qiymatlari uchun iu massiv oxiridan orqaga qadam tashlaydi. Agar i >= 0u bilan bir xil ishlaydi arr[i].

// Biz quyidagi amallar bilan massivni deque sifatida ishlatishimiz mumkin:

// push(...items)itemsoxiriga qo'shadi .
// pop()elementni oxiridan olib tashlaydi va uni qaytaradi.
// shift()elementni boshidan olib tashlaydi va uni qaytaradi.
// unshift(...items)itemsboshiga qo'shadi .

// Massiv elementlari ustida loop uchun:

// for (let i=0; i<arr.length; i++)- eng tez ishlaydi, eski brauzerga mos keladi.
// for (let item of arr)- faqat elementlar uchun zamonaviy sintaksis,
// for (let i in arr)- hech qachon foydalanmang.

// Massivlarni solishtirish uchun == operatordan (shuningdek >, va boshqalar) foydalanmang <, chunki ular massivlar uchun maxsus ishlov berilmagan. Ular ularni har qanday ob'ekt sifatida ko'rib chiqadilar va bu biz odatda xohlagan narsa emas.

// for..of Buning o'rniga massivlarni elementma-element solishtirish uchun tsikldan foydalanishingiz mumkin .

// Biz massivlar bilan davom etamiz va keyingi bobda massivlarni qo'shish, olib tashlash, ajratib olish va massivlarni saralash usullarini o'rganamiz .

// Vazifalar: 

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log( fruits.length ); // ?

