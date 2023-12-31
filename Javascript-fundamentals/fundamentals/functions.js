// Biz juda tez-tez javascriptda bitta harakat bajaruvchi kodni boshqa joyda ham takrorlashimiz mumkin
// Misol uchun ajoyib ko'rinayotgan habarni tashrif buyuruvchiga ko'rsatish, tizimdan chiqqanda yoki umuman yana boshqa joylarda
// Funksiyalar dasturning asosiy "qurilish bloklari" dir. Ular kodni takrorlamasdan ko'p marta chaqirish imkoniyatini beradi
// console.log(message)Biz allaqachon , prompt(message, default)va kabi o'rnatilgan funksiyalarning misollarini ko'rganmiz confirm(question). Ammo biz o'zimizning funktsiyalarimizni ham yaratishimiz mumkin.

// Funksiya yaratish uchun biz function declaration dan foydalanishimiz mumkin

// Uning umumiy sintaksisi:
function showMessage() {
    console.log('Hello everyone!');
}

// 1 - Function kalit so'zi yoziladi;
// 2 - Function ga nom beriladi;
// 3 - Agar parameter kerak bo'lsa yoziladi. 1 tadan ko'p bo'lsa "," bilan ajratiladi;
// 4 - Funksiya kodi bajariladi, boshqa nom bilan ham ataladi "function body" ya'ni jingalak qavslar orasidagi kodlar;

// Parameterli funksiyaga ga misol
function name(parameter1, parameter2, ...parameterN) {
    // body
    // Parameterlarning vazifasini keyin ko'rib chiqamiz;
}

// Funksiya ishlashi uchun biz uni chaqirishimiz kerak bo'ladi
// Huddi bunday showMessage();

// misol uchun:
function showMessage() {
    console.log('Hello everyone!');
}

showMessage();
showMessage();

// showMessage(); funksiyaning tanasidagi kodni ishlatadi va biz ikki marta console.logni chiqganini ko'ramiz sababi biz funksiyani 2 marta e'lon qildik;
// Bu funksiyaning asosiy maqsadini ko'rsatib beradi ya'ni kodni takrorlamasdan ishlatish;
// Agar xabarni yoki kodni o'zgartirish kerak bo'lib qolsa biz uni bitta joydan o'zgartiramiz halos;

// Local variables:
// Agarda o'zgaruvchi funksiya ichida e'lon qilingan bo'lsa u xolatda bu o'zgaruvchini biz funksiyadan tashqarida chaqira olmaymiz;

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    console.log(message);
}

showMessage(); // Hello, I'm JavaScript!

console.log(message); // <-- Error! The variable is local to the function

// Tashqi o'zgaruvchilar:
// Funksiya global tarzda e'lon qilingan o'zgaruvchilarga kirishga qodir va uni o'zgartirishimiz ham mumkin:
let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) tashqaridagi o'zgaruvchi qiymati o'zgaradi

    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName); // Funksiya e'lon qilinmasdan oldin "John" chiqadi

showMessage();

console.log(userName); // Funksiya e'lon qilingandan keyin "Bob" chiqadi. Sababi funksiya ichida userName o'zgartirildi;


// Biz funksiyadan tashqarida e'lon qilingan o'zgaruvchi nomini funksiya ichida yan qayta ishlatsak bo'ladi:

let userName = 'John';

function showMessage() {
    let userName = "Bob"; // Local o'zgaruvchi bo'lib e'lon qilinadi

    let message = 'Hello, ' + userName; // Bob
    console.log(message);
}

// Funksiya o'zining o'zgaruvchisidan foydalanadi va e'lon qiladi
showMessage();

console.log(userName); // John, o'zgarmaydi, funksiya tashqi o'zgaruvchini o'zgartirishga qodir bo'lmaydi;

// Agarda o'zgaruvchi funksiyadan tashqarida e'lon qilingan bo'lsa biz buni Global o'zgaruvchilar deb ataymiz
// Global o'zgaruvchilar hohlagan funksiya ichida ko'rinishi mumkin agarda u global o'zgaruvchi nomi bilan local da e'lon qilmagan bo'lsak
// Yana bu bizga global o'zaruvchilarni qistartirishga yordam beradi. Zamonaviy kodda birnechta yoki umuman global o'zgaruvchisiz bo'ladi


// Biz funksiyalarni parametr berib ham ishlatsak bo'ladi
// Aynan manabu misolda funksiyalarga parametr berib ishlatilingan
function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// Biz funksiyani chaqirayotganda biz funksiya qavslari ichiga ketma-ketlik da kerakli bo'lgan qiymatlarni kiritsak bo'ladi, agar parametr bittadan ko'p bo'lsa biz ularni ketma-ketlikda vergul orqani ishlatishimiz mumkin

// Bu jarayonda from parametriga 'Ann' so'zi kelib tuwadi va 'text' parametriga "What's up", 'Hello' kabi so'zlar kelib tushadi

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    console.log(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

// Funksiya ichidagi from bu shunchaki qiymatni nusxa oladi xolos biz uyerga xoxlagan turdagi nom bersak bo'ladi uni o'rniga faqatgina bitta qiymat kelib tushadi ya'ni 'Ann' so'zi ya'ni tashqaridagi global variable dagi qiymat kelib tushadi

// Argument va Parameter
// Parameter - bu funksiya deklaratsiyasida qavslar ichida ko'rsatilgan o'zgaruvchidir misol uchun: 'from' va 'text' bu (e'lon qilish vaqtidagi)
// Argument bu funksiya chaqirilganda unga kelib tushadigan qiymatdi (chaqiruv vaqtida)
// Biz funksiya parameterlarini sanab o'tamiz va o'tish argumenti deb ataymiz
// Yuqoridagi misolda funksiya 2 ta parameter bilan e'lon qilindi va chaqiruv paytida 2 ta argument bilan berildi

// showMessage("Ann"); agarda funksiya 2 ta parameter bilan e'lon qilingan bo'lsayu lekin 1 ta argument berilsa 2 chi qiymat o'rniga 'undefined' qiymati default holada beriladi
// Bu xato emas. Bunday qo'ng'iroq chiqadi "*Ann*: undefined". uchun qiymati texto'tkazilmasa, u ga aylanadi undefined.

// Default qiymat berish:
// Agarda biz funksiya chaqirilganda argumentga 'undefined' qiymatini tushishini xoxlamasak unga default holatdagi qiymatniham berib o'tib ketishimiz mumkin 
// misol uchun: (parameter = "default text")

function showMessage(from, text = "no text given") {
    console.log(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given	
// Agar parameter o'tkazilsa uning o'riga 'default text' deb yuqorida yozgan matnimiz kelb tuwadi : agar o'tkazilmasa unda default qiymatni ochirilib ketiladi va funksiya chaqirilgandagi qiymat kelib tushadi 
showMessage("Ann", undefined)
// Bu xolatda xam huddi qattiq tenglikga oxshaydi va undefined o'rniga default xolatdagi matn kelib tushadi

// Biz xattoki default xolatda parameter default qiymati uchun funksiya ham e'lon qilishimiz mumkin bo'ladi
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() faqatgina text o'tkazib yuborilgandagina default qiymat sifatida tushadi
    // Qachonki qiymat yetishmayotganda anotherFuntion() nomli funksiyamiz mustaqil tarzda chaqiriladi
}

// Bir necha yillar oldin javascript default qiymatlarni qollab quvatlamagan shuning uchun dasturchila qiymatni aniqlashni boshqa usulidan foydalanganlar
// Masalan undefined tekshirish

function showMessage(from, text) {
    if (text === undefined) {
        text = 'no text given';
    }

    console.log(from + ": " + text);
}

// Yoki || operatori yordamida tekshirishgan
function showMessage(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
}

// Ba'zan funktsiya e'lon qilinganidan keyin keyingi bosqichda parametrlar uchun standart qiymatlarni belgilash mantiqiy.

// Funktsiyani bajarish jarayonida parametr berilgan yoki yo'qligini quyidagi bilan taqqoslash orqali tekshirishimiz mumkin undefined:

function showMessage(text) {
    // ...

    if (text === undefined) { // if the parameter is missing
        text = 'empty message';
    }

    console.log(text);
}

showMessage(); // empty message

// Yoki operatordan foydalanishimiz mumkin ||:

function showMessage(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
}

// Biz oldin nullish operatorini ko'rgan edik
// va undefined qiymatini topishda shunda foydalanganimiz yaxshiroqdir:
function showCount(count) {
    // if count is undefined or null, show "unknown"
    console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// #QIYMAT QAYTARISH
// Biz funksiya e'lon qilish orqali qiymat qaytaradigan qilishimiz mumkin ekan bunda return kalit so'zidan foydalanamiz

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result); // 3	

// Direktiv return funksiyani istalga joyida yozilishi mumkin va kod oqilishi aynan return ga kelgan kod toxtaydi va bajariladi 
// Direktiv return shunchaki erkin yozilsa undan keyingi kodlar o'qilmaydi lekin quyidagi holatlarda mumkin:
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);


if (checkAge(age)) {
    // Agarda checkAge == true bo'lsa 'Acces granted yozuvi chiqadi'
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// Return dan qiymatsiz holatda ham foydalanishimiz mumkin:
function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    console.log("Showing you the movie"); // (*)
    // ...
}
// Agarda checkAge false qiymat qaytarsa u holatda show movie funksiyasi ishlamaydi agarda true qiymat qaytarsa console.log elon qilinadi

// Agarda funksiya ichiga hechqanday kod yozilmasa u holatda funksiya undefined qiymatini qaytaradi

function doNothing() { /* empty */ }

console.log(doNothing() === undefined); // true
// An empty return is also the same as return undefined:

function doNothing() {
    return;
}

console.log(doNothing() === undefined); // true

// Return bilan ishlayotgan bo'sh qatorlardan foydalanmang

return
(some + long + expression + or + whatever * f(a) + f(b))
// Bu xolatda xam xatolik yuz beradi 
return;
(some + long + expression + or + whatever * f(a) + f(b))


// Biz returnni manabu xolatda ishlatganimiz to'g'ridir:

return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
)


// Funktsiyani nomlash
// Funktsiyalar - bu harakatlar. Shuning uchun ularning nomi odatda fe'ldir. U qisqa, iloji boricha aniq bo'lishi va funksiya nima qilishini tasvirlab berishi kerak, shunda kodni o'qiyotgan kishi funksiya nima qilayotgani haqida ko'rsatma oladi.

// Harakatni noaniq tasvirlaydigan og'zaki prefiks bilan funktsiyani boshlash keng tarqalgan amaliyotdir. Prefikslarning ma'nosi bo'yicha jamoa ichida kelishuv bo'lishi kerak.

// Masalan, bilan boshlanadigan funktsiyalar "show"odatda biror narsani ko'rsatadi.

// Funktsiya… bilan boshlanadi

// "get…"- qiymatni qaytarish,
// "calc…"- biror narsani hisoblash,
// "create…"- biror narsa yaratish,
// "check…"- biror narsani tekshiring va mantiqiy qiymatni qaytaring va hokazo.
// Bunday nomlarga misollar:

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/

// Funktsiya o'z nomi bilan taklif qilingan narsani bajarishi kerak, boshqa emas.

// Ikki mustaqil harakat odatda ikkita funktsiyaga loyiqdir, hatto ular odatda birgalikda chaqirilsa ham (bu holda biz bu ikkalasini chaqiradigan uchinchi funktsiyani yaratishimiz mumkin).

// Ushbu qoidani buzishning bir nechta misollari:

// getAge– yoshi bilan ko'rsatsa yomon bo'lardi console.log(faqat olish kerak).
// createForm- agar u hujjatni o'zgartirsa, unga shakl qo'shsa yomon bo'ladi (faqat uni yaratish va qaytarish kerak).
// checkPermission- agar u xabarni ko'rsatsa yomon bo'lardi access granted/denied(faqat tekshirishni amalga oshirish va natijani qaytarish kerak).
// Ushbu misollar prefikslarning umumiy ma'nolarini nazarda tutadi. Siz va sizning jamoangiz boshqa ma'nolar bo'yicha kelisha olasiz, lekin odatda ular unchalik farq qilmaydi. Qanday bo'lmasin, siz prefiks nimani anglatishini, prefiksli funktsiya nimani amalga oshirishi va nima qila olmasligini aniq tushunishingiz kerak. Barcha bir xil prefiksli funktsiyalar qoidalarga bo'ysunishi kerak. Va jamoa bilimlarni baham ko'rishi kerak.

// Ultrashort funksiya nomlari
// Juda tez-tez ishlatiladigan funktsiyalar ba'zan ultraqisqa nomlarga ega.

// Masalan, jQuery ramkasi funksiyani belgilaydi $. Lodash kutubxonasi o'zining asosiy funktsiyasiga ega _.

// Bu istisnolar. Odatda funktsiya nomlari qisqa va tavsiflovchi bo'lishi kerak.
