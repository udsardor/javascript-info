// Garbage collection - "Axlat yig'uvchi"

// Javascriptda xotira boshqaruvi avtomatik tarzda amalga oshiriladi va bizga ko'rimaydi.Biz "primitive", "object" va "array" larni yaratamiz va ularning barchasi uchun xotiradan joy ajratiladi.

// Agar nimadir kerak bo'lmasa nima bo'ladi, qanday qilib javascript uni topadi va tozalaydi?

// Reachability - Qabul qilish imkoniyati, erishish mumkinligi.

// Javascriptda xotira boshqaruvining asosiy tushunchasi bu - "erishish mumkinigi".

// Oddiy qilib aytganda "erishish mumkin bo'lgan" qiymatlar qandaydir tarzda foydalanish mumkin bo'lgan qiymatlardir. Ularning xotirada saqlanishi kafolatlangan.

// 1 Ma'lum sabablarga ko'ra ularni o'chirib bo'lmaydigan asosiy qiymatlar to'plami mavjud.

// Masalan:
// Hozirgi bajarilayotgan funksiya va uning local o'zgaruvchilari va parametrlari.
// Boshqa funksiya ichidagi chaqirilgan yana boshqa bir funksiya va uning local o'zgaruvchilari va parametrlari.
// Global o'zgaruvchilar.
// (boshqa ichiki bo'lganlar ham bor)
// Bular "roots" deb ataladi.

// 2 Harqanday qiymat, agar u ildizdan havola yoki havolalar zanjiri orqali erishish mumkin bo'lsa, erishish mumkin deb hisoblanadi.

// Misol uchun global oz'garuvchida ob'ekt mavjud bo'lsa va u ob'ekt yana boshqa bir ob'ektga havola qilish xususiyatiga ega bo'lsa bu erishish mumkin bo'lgan hisoblanadi.

// Javascript dvigatelida "Garbage collector" deb ataladigan fon jarayoni mavjud. U barcha ob'ektlarni kuzatib boradi va erishish mumkin bo'lmagan ob'ektlarni olib tashlaydi.

// Oddiy misol:

// user has a reference to the object
let user = {
  name: "John",
};

// <Global>
//    ↓
// user

// Object
// name: "John"

// Bu yerdagi strelka ob'ekt havolasini ko'rsatadi. Global oz'garuvchi "user" ob'ektga murojat qiladi {name:"John"}(Qisqacha jon deb ataymiz). name property si "John" primitve ni saqlaydi.

// Agar "user" qaytadan yozilsa, havola yo'qoladi.

// Misol uchun:

user = null;

// <Global>
// user: null

// Object
// 🗑️ name: "John"

// Endi bizning jon'imiz erishib bo'lmaydigan bo'ldi. Endi unga kirishning iloji yo'q, ya'ni uni havolasi yo'q, Endi u ob'ektni "Garbage collector" keladi da tozalab ketadi.

// Keling endi bizda ob'ektga ikkita havola qildik deb tasavvur qilaylik. oldObj = referObj:

let oldObj = {
  name: "John",
};

let referObj = oldObj;

// <Global>
// oldObj ↓ ↓ referObj

// Object
// name: "John"

// yana qayta o'sha amalni qilaylik:

oldObj = null;

// Endi avvalgidekmas sababi endi ob'ektga biz boshqa havola orqali erishsak bo'ladi va shuning uchun u xotirada saqlanib qoladi. Agar referObj ni ham qayta yozsak endi u ob'ekt erishish mumkin bo'lmaganlar sirasiga kirib qoladi va ob'ekt xotiradan to'liq tozalanib ketadi.

// Murakkabroq misol: 


// Keling murakkabroq misol orqali ko'rib chiqamiz: 

function marry(man, woman){
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    };
}
let family = marry({name: "Sardor"}, {name: "choosenWoman"});
// console.log(newMarry.father.wife);
// Marry nomli funksiya ikkita ob'ektni bir biriga havola qilib, ularni birlashtiradi va ikkalasiniham o'z ichiga olgan ob'ektni qaytaradi.

// Xotira tuzulishi:

/*      <Global variable>    
          family ↓            
(father)    ↙️  OBJECT  ↘️ (mother) 
OBJECT              ➡️     OBJECT
{name: "Sardor"}    ⬅️     {name: "choosanWoman"}  */ 

// Hozircha barcha ob'ektlarga kirish mumkin.
// Keling endi ikkita havolani olib tashlaymiz:

delete family.father;


console.log(family.mother.wife);
// Ushbu ikkita havoladan faqat bittasini o'chirishning o'zi etarli emas, chunki barcha ob'ektlar hali ham mavjud bo'ladi.

delete family.mother.husband;

// Ammo endi ikkalasini ham olib tashlasak "Sardor" uchun havola yo'qligini ko'rishimiz mumkin.

// Boshqa havolalar muhim emas. Faqatgina o'sha ob'ektga kiruvchisi muhim. Shunday qilib endi "Sardor" mavjud emas. Kirish imkoni bo'lmagan harbir malumotlar "GARBAGE COLLECTOR" orqali tozalab ketiladi.

//      <Global>
// family ↓
// OBJECT ↓
// mother
// {name: "choosenWoman"};

// UNREACHABLE ISLAND - ERISHIB BO'LMAYDIGAN OROL.

// Bir-biriga bog'langan ob'ektlarning yetib bo'lmaydigan holga kelishi o'sha ob'ektning xotiradan tozalanishiga olib kelishi mumkin.

// Yuqoriagi ob'ektdan:

family = null;

// Xotiragadi xolati:

// Xotira tuzulishi:

// family: null;
// 🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️ 
/*      <Global variable>                     🗑️
🗑️         family ↓                            🗑️    
🗑️(father)    ↙️  OBJECT  ↘️ (mother)             🗑️
🗑️OBJECT              ➡️     OBJECT              🗑️  
🗑️{name: "Sardor"}    ⬅️     {name: "choosanWoman"}  */ 
// 🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️🗑️

// Ushbu misol orqali erishish mumkinligi qanchalik muhimligini bizga ko'rsatib beradi.
// Jon va Enn hali ham bog'langanligi aniq, ikkalasida ham kiruvchi havolalar bor. Lekin bu yetarli emas.
// Avvalgi "family"ob'ekt ildizdan uzildi, endi unga havola yo'q, shuning uchun butun orolga etib bo'lmaydigan bo'lib qoladi va olib tashlanadi.

// INTERNAL ALGORITHMS - ICHKI ALGORITMLAR
// Axlat yig'ishning eng asosiy algoritmi "belgilash va tozalash" deb ataladi.

// Quyidagilarni axlat bosqichlarni muntazam ravishda amalga oshiriladi:
// ● "Axlat yig'uvchi" ildiz otadi va ularni belgilaydi.(eslab qoladi);
// ●  Keyin u tashrif buyiradi va barcha havolalarni belgilaydi.
// ●  Keyin u belgilangan ob'ektlarga tashrif buyuradi va ularning havolalarini belgilaydi. Keyinchalik birxil ob'ektga ikki marta tashrif buyurmaslik uchun barcha tashrif buyurilgan ob'ektlarni eslab qoladi.
// ● Va harbir erishish mumkin bo'lgan ob'ektlarga tashrif buyuradi.   
// ● Belgilangandan boshqa barcha ob'ektlarni o'chiradi.

// Masalan bizning ob'ektimiz object/obj-images/01.png dek bo'lsin.

// Biz o'ng tomonda" yetib bo'lmaydigan orolni "ko'rishimiz mumkin. Keling axlat yig'uvchi "belgilash va tozalash" jarayonini ko'rib chiqaylik: object/obj-images/1.png

// Havolalarga qaraymiz va ularni ham belgilaymiz: object/obj-images/2.png

// Va iloji bo'lsa qo'shimcha ma'lumotlarni ham kuzatishda davom eting: object/obj-images/3.png

// Va havolasi yo'q yoki umuman erishib bo'lmaydigan ob'ektlar xotiradan tozalanadi: object/obj-images/4.png

// Bu axlat yig'ishning qanday ishlashi haqida tushuncha. JavaScript dvigatellari uning tezroq ishlashi va kodni bajarishda kechikishlarga olib kelmasligi uchun ko'plab optimallashtirishlarni qo'llaydi.


// Ba'zi optimallashtirishlar: 

// ● Generational collection - Ob'ektlar asosan ikki turga bo'linadi "new ones" va "old ones. Odatiy kodda ba'zi ob'ektlar qisqa qoladi: ular o'z ishlarini bajaradilar va tez "o'lishadi". Eskilari esa kamdan-kam tekshiriladi va ko'proq umr ko'rishadi.

// ● Incremental collection - agar ob'ektlar ko'p bo'lsa va biz bir vaqtning o'zida butun ob'ektni yurish va belgilashga harakat qilsak, bu biroz vaqt talab qilishi va bajarilishida ko'rinadigan kechikishlarni keltirib chiqarishi mumkin. Shunday qilib, vosita mavjud ob'ektlarning butun majmuasini bir nechta qismlarga ajratadi. Va keyin bu qismlarni birin-ketin tozalang. Hammasi o'rniga ko'plab kichik axlat to'plamlari mavjud. Bu o'zgarishlarni kuzatish uchun ular o'rtasida qo'shimcha buxgalteriya hisobini talab qiladi, ammo biz katta kechikish o'rniga ko'plab kichik kechikishlarni olamiz.

// ● Idle-time collection - axlat yig'uvchi faqat protsessor ishlamay qolganda ishlashga harakat qiladi, bu bajarilishga mumkin bo'lgan ta'sirni kamaytiradi.

// Axlat yig'ish algoritmlarining boshqa optimallashtirishlari va lazzatlari mavjud. Men ularni bu erda tasvirlashni istardim, men to'xtab turishim kerak, chunki turli dvigatellar turli xil sozlash va texnikani amalga oshiradi. Va bundan ham muhimi, dvigatellar rivojlanishi bilan hamma narsa o'zgaradi, shuning uchun haqiqiy ehtiyojlarsiz "oldindan" chuqurroq o'rganish bunga loyiq emas. Agar, albatta, bu sof qiziqish masalasi bo'lmasa, quyida siz uchun ba'zi havolalar bo'ladi.

