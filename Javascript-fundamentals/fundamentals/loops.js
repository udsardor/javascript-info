// Biz ayrim paytlari Harakatlarni takrorlashimiz kerak bo'ladi;
// Misol uchun Ro'yxatdagi materiallarni ketma ket chiqarish uchun yoki oddiygina 1 dan 10 cha bo'lgan raqamlarni chiqarish.
// Loop ya'ni yuqorida aytgan harakatlarni takrorlash usulidir

// Looplarning javascriptda shakllarni mavjud;
// 1-) for in - ob'ektlarni xususiyatlarni chiqarish uchun
// 2-) for of - massiv (array) larni bo'ylab aylanish 
// 3-) while
// 4-) do..while
// 5-) for

// 1 - while loopining umumiy ko'rinishi
let shart;
while (shart) {
    // code
    // Loop body
}

// Agar shart truly (to'g'ri) bo'lsa kod va loop tanasi bajariladi;

// Masalan pastdagi kod i ni 3 marta chaqiradi;
let i = 0;
while (i < 3) {
    console.log(i);
    i = i + 1;
}
			// i++
			// Bu yerda shart bajarilmaguncha loop tanasi bajariladi;
			// va kod ham takrorlanadi;
			// Loop tanasining bitta bajarilishi "itaration" (iteratsiya) deb ataladi 
			// Yuqoridagi misolda loop 3 marta iteratsiya bo'ladi
			// i++ ning ma'nosi 3 ga yetmaguncha 1 tadan qo'shib bor degani 
			// agar i++ qo'yilmasa abadiy tsiklga tushib qoladi va uni toxtatmaguncha kod bajarilaveradi;
		}
// Yozishning qisqaroq usullari
// Masalan while(!=0) emas balki manabu usulda ham yozish mumkin while(i) - bu usulning manosi i truly mi shunday bo'lsa i ni takrorla;
let j = 0;
while (j) {
    console.log(j);
    j--;
}

// yozishning yanada qisqa usuli;
let a = 0;
while (a) console.log(i--);
// bunda agar loop tanasi 1 ta qatorlik bo'lsa shunday yozsa ham bo'ladi yoki {} figurali qavslar yordamida yozish kerak;
// ------------------------------------------------------------------ //


// do{}...while() sintaksisi;
do {
    // loop tanasi
} while (shart);

// Loop avval tanani bajaradi va keyin shartni tekshiradi va shart haqiqat bo'lmaguncha itaratsiyani takrorlaydi;
// Bu sintaksisni siz qachonki shart hech bo'lmaganda bir marta bajarilishi uchun ishlatishingiz mumkin;
// Unday bo'lmasa while() ishlatgan yaxshi;
let s = 0;
do {
    console.log(s);
    s++;
} while (s < 3);

// Umumiy sintaksis shulardan iborat;
// ------------------------------------------------------------------ //

// for loopi sintaksisi
// Boshqalariga qaraganda murakkabroq lekin hozirda eng ko'p ishlatilinadigan loop turidair;

for (boshlanishi; shart; qadam) {
    // ... loop tanasi ...
}

// Pastdagi kodning manosi ko'rib chiqamiz
for (let c = 0; c < 5; c++) {
    console.log(c)
}

// boshlanishi let c = 0; ishga tushgandan keyin bir marta bajariladi;
// shart c < 5; harbir itaratsiyadan oldin tekshiriladi. qachonki shart to'g'ri bo'lganda tsikl to'xtaydi;
// tanasi console.log(c); shart haqiqat bo'lmaguncha bajariladi;
// qadam i++; harbir iteratsiyada tanadan keyin bajariladi;

// Tsikl algoritmi quyidagicha ishlaydi;
// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...

// Yani shart to'g'ri bo'lsa if tanasi bajariladi;

// for (let i = 0; i < 3; i++) console.log(i)

// Boshlanishi
let c = 0
// if condition → run body and run step
if (c < 3) { console.log(c); c++ }
// if condition → run body and run step
if (c < 3) { console.log(c); c++ }
// if condition → run body and run step
if (c < 3) { console.log(c); c++ }
// ...tugaydi, chunki hozir c == 3 ga teng


// Local and Global variables;
// Bu yerda l o'zgaruvchisi to'g'ridan to'g'ri tsiklga e'lon qilinadi va scope dan tashqarida uni chaqirib bo'maydi shuning uchun xato ko'rsatadi;

for (let l = 0; l < 3; l++) {
    console.log(l); // 0, 1, 2
}
console.log(l); // error, no such variable;

// Biz yuqorida xoxlagandek chiqishi uchun O'zgaruvchini global tarzda e'lon qilishimiz kerak;
let l = 0;
for (l = 0; l < 3; l++) { // Scope dan tashqarida bo'lgan o'zgaruvchini ishlating
    console.log(l); // 0, 1, 2
}

console.log(l); // javobi 3 bo'ladi chunki l iteratsiyadan o'tib console.logga chiqadi;


// Biz qisimlarni ham yozmay ketishimiz mumkin;
// Boshlanish qismini o'tkazib yuborish;

let i = 0; // Biz allaqachon o'zgaruvchi e'lon qilib bo'lganmiz shuning uchun sintaksisni buzmagan holatda boshlanish qismini yozmasdan ketamiz
for (; i < 3; i++) { // boshlanishi kerak emas)
    console.log(i); // 0, 1, 2
}

// Shuningdek qadamlarni ham olib tashlashimiz mumkin;
let i = 0;
for (; i < 3;) {
    console.log(i++); // qadam ni console.logni ichida amalga oshirib qo'yaveramiz;
}

// Aslida hamma narsani ham olib tashlashimiz mumkin lekin loog tanasi cheksiz bajariladi;
for (; ;) {
    // Loop tanasi abadiy tsiklga tushadi;
}

// E'tibor bering, ikkita fornuqta-vergul ;bo'lishi kerak. Aks holda, sintaksis xatosi bo'ladi.;

// Loopnni to'xtatish usuli, Directiv break;

let e = 0;

while (e < 10) {
    if (e == 5) {
        break
    }
    console.log(e)
    e++
}

// Foydalanuvchi hechqanday qiymat kiritmaganda loop ni to'xtatish

let sum = 0;

while (true) {
    let value = +prompt("Put a number", "");

    if (!value) break;

    sum += value

}
console.log(sum);

// Agar foydalanuvchi bosh qatorni belgilasa yoki bekor qilsa, break satrda faollashadi va tsiklni zudlik bilan to'xtatadi;
// Va kodni keyingi qatorga otkazadi va console.log(sum) bajariladi;

// Directiv Continue
// Iteratsiya ning ichidagi if to'g'ri bo'lgan paytda iteratsiyani bitta oldingga sakratadi, ya'ni keyingi iteratsiyaga o'tqazadi;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i) // 1, then 3, 5, 7, 9
}

// Ikkala kod ham bir hil natija bajaradi;
for (let i = 0; i < 10; i++) {
    if (i % 2) {
        console.log(i);
    }
}

// ifodasiz break/continue
if (i > 5) {
    console.log(i);
} else {
    continue;
}
// Esda tutingki ifoda bolmaganda break / continue ni ternary(uchlik) operatorini ishlatib bo'lmaydi
(i > 5) ? console.log(i) : continue; // continue isn't allowed here
// ?Bu o'rniga savol belgisi operatorini ishlatmaslikning yana bir sababi if.

// Biz ba'zan loop ichida yana loop aylantirishimizga to'gri keladi;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // Agar foydalanuvchi bekor qilishni xoxlasa biz bekor qilish uslubini topishimiz kerak;
        // Oddiygina break faqat ichki loop to'xtadi;
        // if(!input) break;
    }
}
console.log("Bajarilda")

// Biz bu holatda label ishlatishimiz kerak bo'ladi;
// Umumiy sintaksis: 

labelName: for (...) {
		  ...
}

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // agar bekor qilish yoki bosh string bosilsa loop to'xtaydi
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
console.log('Done!');


// Sintaksik o'zgaruv
inner:
for (let i = 0; i < 3; i++) { ... }

// Biz buni DIRECTIV CONTINUE bilan ham ishlatishimiz mumkin. bunday holatda keyingi tsiklga o'tadi;

// Bu sintaksis hatolikka olib keladi 
break label; // jump to the label below (doesn't work)

label: for (...)

// Manabu to'g'ri sintaksis;
label: {
    // ...
    break label; // works
    // ...
}


// Xulosa;

// while– Har bir iteratsiyadan oldin holat tekshiriladi.
// do..while– Har bir iteratsiyadan keyin holat tekshiriladi.
// // for (;;)– Vaziyat har bir iteratsiyadan oldin tekshiriladi, qo'shimcha sozlamalar mavjud.
// "Cheksiz" pastadir qilish uchun odatda konstruktsiyadan while(true)foydalaniladi. Bunday tsikl, xuddi boshqa har qanday boshqa kabi, breakdirektiv bilan to'xtatilishi mumkin.

// 	Agar biz joriy iteratsiyada hech narsa qilishni istamasak va keyingisiga o'tmoqchi bo'lsak, biz direktivani ishlatishimiz mumkin continue.

// 	break/continuepastadirdan oldin teglarni qo'llab-quvvatlash. break/continue Yorliq tashqi ko'chaga o'tish uchun ichki halqadan qochishning yagona yo'li .
