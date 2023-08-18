// Optional chaining '?.'
// (!) Yaqinda qo'shilgan
// Bu javasriptga yangi qo'shilgan hisoblanadi, eski browserlarga polyfills kerak bo'lishi mumkin.

// Optional chaining ?. bizga ob'ekt ichidagi ob'ektga ga havsiz kirishni ta'minlaydi hattoki unda xossa mavjud bo'lmasa ham.

// "Mavjud bo'lmagan xossa" muammosi

// Balki siz endi javascript o'rganib boshlagan bo'lsangiz, bu muammoni ko'rmagan bo'lishingiz mumkin, lekin bu yetarlicha ko'p uchraydi.

// Misol uchun, bizda user nomli foydalanuvchi ma'lumotlarni saqlaydigan ob'ekt bor deylik.

// Ko'pchilik foydalanuvchilarni user.address xosassida addressi mavjud, va user.address.street da ko'chalari, lekin ba'zilar buni taqdim etmagan.

// Qachonki biz user.address.street olishga harakat qilsak va foydalanuvchi uni taqdim etmagan bo'lsa, bizga xatolik ko'rsatadi.

let user = {}; // a user without "address" property

console.log(user.address.street); // Error!

// Bu kutilgan natija. Javascript shunday ish qiladi: user.address undefined bo'lsa, user.address.street bizga xatolik ko'rsatadi.

// Ko'pgina amaliy holatlarda biz xatolik o'rniga undefined qiymatini olishni avzal ko'ramiz huddi "user.address.street" yo'q degan ma'noda.

// ... Va boshqa misol,  Veb-saytlarni ishlab chiqishda biz veb-sahifa elementiga mos keladigan ob'ektni kabi maxsus usul chaqiruvi yordamida olishimiz mumkin va bunday element bo'lmaganda document.querySelector('.elem')u qaytadi .null

// Qachonki htmlda shunday element mavjud bo'lmasa xatolik qaytaradi.
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null

// Yana bir bor, agar element mavjud bo'lmasa, .innerHTML xususiyatiga kirishda xatolikka duch kelamiz null. Va ba'zi hollarda element yo'qligi bu normal, biz hatollika yo'l qo'ymaslik va html = null natija sifatida qabul qilishni hohlaymiz.

// Biz qanday qilishimiz mumkin? 

// Biz xususiyatga kirishda oldin uni tekshirimiz mumkin bo'ladi:

let usr = {};

console.log(user.address ? user.address.street : undefined);

// U ishlaydi, hechqanday hatolik yo'q, lekin bu juda nomaqbul hisoblanadi, ya'ni ko'rib turganimizdek, "user.address" kodda ikki marta takrorlanadi.

// Xuddi shu narsa document.querySelector da quyidagicha ko'rinadi:

// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// document.querySelector('.elem')Bu erda elementni qidirish aslida ikki marta chaqirilganini ko'rishimiz mumkin . Yaxshi emas.

// Chuqurroq joylashtirilgan xususiyatlar uchun u yanada xunuk bo'ladi, chunki ko'proq takrorlash talab etiladi.

// Masalan, shunga user.address.street.name o'xshash tarzda olaylik.

// let user = {}; // user has no address
// console.log(user.address ? user.address.street ? user.address.street.name : null : null);

// Bu juda dahshatli, hatto bunday kodni tushunishda muammolar bo'lishi mumkin.

// Operatordan foydalanib, uni yozishning biroz yaxshiroq yo'li bor &&:

// let user = {}; // user has no address

// console.log( user.address && user.address.street && user.address.street.name ); // undefined (no error)

// AND (&&) operatori orqali ha qilish unchalik ideal emas.

// Ko'rib turganimizdek, property nomlari hali-hanuz takrorlanayabdi, user.adress

// Mana nima uchun dasturlash tilimizga optional chaining ?. kiritilgan. Muamolarni bittadi hammasi uchun hal qilish mumkin

// ### Optional chaining

// Optional chaining ?. baholashni to'xtatadi qachonki xususiyat undefined yoki null ga teng bo'ladigan bo'lsa

// Bu yo'l bilan biz xususiyat mavjud yoki mavjud emasligini qisqa usul bilan bilib olishimiz mumkin.

// Boshqa so'z bilan aytganda, value?.prop:
// * Ishlaydi qachonki value.prop qiymati mavjud bo'lsa,
// * Aks xolda (qachonki value.prop undefined yoki null bo'lsa) u bizga undefined qaytaradi.

// Manabuyerda ob'ekt xususiyatlariga kirishning havfsiz yo'li, ?. ishlatish orqali:

let useOpt = {};

console.log(useOpt?.address?.street) // undefined no error
// Bu qisqa va toza yo'li, hechqanday takrorlanishlarsiz.

// document.querySelector orqali misol:

let gtml = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

// Optional chaining orqali yozish ?., hattoki ob'ekt bo'lmasa ham ishlaydi

let nulUser = null;

console.log(nulUser?.address); // undefined
console.log(nulUser.address?.street);

// Eslab qoling, ?. ni ishlatish faqat o'sha xususiyat uchun kirishni xavfsiz qiladi.

// Misol uchun: user?.address.street.name ?. optional chaining faqat userga kirishni havfsiz qiladi, agarda user undefined/null bo'ladigan bo'lsa, u bizga undefined qaytaradi lekin bu faqat user uchun hisoblanadi. Biz yana tekshirmoqchi bo'lsak ?. yana qo'yishimizga to'g'ri keladi.

// (!) Optional chainingni meyoridan ortiq ishlatang
// Biz ?. ni qachonki qiymat aniq bor yoki yo'qligiga shubhamiz bor payti ishlatamiz.

// Misol uchun, Bizning kodimiz logikasi bo'yicha user nomli ob'ekt bo'lishi shart, lekin address ixtiyoriy, va biz endi user.address?.street qilamiz, lekin user?.address?.street bunday emas.

// Keyin, agar useraniqlanmagan bo'lsa, biz bu haqda dasturlash xatosini ko'ramiz va uni tuzatamiz. Aks holda, agar biz haddan tashqari ishlatsak ?., kodlash xatolari mos bo'lmagan joyda o'chirilishi mumkin va disk raskadrovka qilish qiyinlashadi.

// (!) Oldin o'zgaruvchi e'lon qilinishi kerak. ?.

// Agar hech qanday o'zgaruvchi bo'lmasa user, u user?.anything xatoni keltirib chiqaradi:

// ReferenceError: user is not defined
doesntExistUser?.address;

// O'zgaruvchi e'lon qilinishi kerak (masalan, let/const/var useryoki funksiya parametri sifatida)."optional chaining" faqat e'lon qilingan o'zgaruvchilar uchun ishlaydi.

// Short-circuiting - Qisqa tutashuv

// Oldin aytilgani kabi ?. tezkorlik bilan baholashni to'xtatadi qachonki uning chap tarafida mavjud bo'lmasa.

// Shunday qilib ?. o'ng tarafidagi harakatlarni barchasi bekor qilinadi, va ishlatilmaydi.

// Misol uchun:

let userx = null;
let x = 0;

userx?.sayHi(x++); // no "userx", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented

// Other variants: ?.(), ?.[] - Boshqa namunalar

// Optional chaining bu hechqanaqa operator emas, va u funksiyalar va to'rtburchak qavslar bilan ham ishlatilishi mumkin.

// Misol uchun: ?.() bu funksiya chaqirilganda mavjud yoki yo'qligini tekshiradi.

// Pastdagi kodda, bizning ayrim foydalanuvchilarimizda admin methodi bor bazilarida yo'q:

let userAdmin = {
    admin(){
        console.log("Hi, i am admin")
    }
};

let userGuest = {};

userAdmin?.admin?.(); // Hi, i am admin

userGuest?.admin?.() // Hechnima bo'lmaydi chunki userGuest ichida hechqanaqa method yo'q

// userAdmin.adminBu erda ikkala satrda biz birinchi navbatda xususiyatni olish uchun nuqta ( ) dan foydalanamiz admin, chunki biz userob'ekt mavjud deb taxmin qilamiz, shuning uchun uni xavfsiz o'qish mumkin.

// Keyin ?.()chap qismni tekshiradi: agar adminfunktsiya mavjud bo'lsa, u ishlaydi (bu uchun userAdmin). Aks holda (uchun userGuest) baholash xatosiz to'xtaydi.


// Agar biz nuqta o'rniga xususiyatlarga kirish uchun ?.[]qavslardan foydalanmoqchi bo'lsak, sintaksis ham ishlaydi . Oldingi holatlarga o'xshab, u mavjud bo'lmagan ob'ektdan xususiyatni xavfsiz o'qish imkonini beradi.[].

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined

// ?.Bundan tashqari, biz bilan foydalanishimiz mumkin delete:

// delete user?.name; // delete user.name if user exists

// (!) ?.Biz xavfsiz o'qish va o'chirish uchun foydalanishimiz mumkin , lekin yozish uchun emas

let writtenUsr = null;

writtenUsr?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

// Summary - Xulosa


// optional chaining ?.sintaksis uchta shaklga ega:

// 1 obj?.prop- obj.prop agar obj mavjud bo'lsa, qaytaradi, aks holda undefined.
// 2 obj?.[prop]- obj[prop] agar obj mavjud bo'lsa, qaytaradi, aks holda undefined.
// 3 obj.method?.()- obj.method()agar obj.method mavjud bo'lsa qo'ng'iroq qiladi, aks holda undefined qaytaradi.

// Ko'rib turganimizdek, ularning barchasi oddiy va ulardan foydalanish oson. ?.Chap qismni tekshiradi va null/undefinedagar shunday bo'lmasa, baholashni davom ettirishga imkon beradi.

// Zanjir ?.ichki o'rnatilgan xususiyatlarga xavfsiz kirish imkonini beradi.

// Shunday bo'lsa-da, biz ?.ehtiyotkorlik bilan murojaat qilishimiz kerak, faqat bizning kod mantiqimizga ko'ra, chap qism mavjud emas. Shunday qilib, agar ular yuzaga kelsa, dasturlash xatolarini bizdan yashirmaydi.