// iterables - itaratsiya qilish mumkin bo'lishi.

// Iteratsiya (Takrorlanadigan) ob'ektlar massivlarni umumlashtirishdir. Bu bizga har qanday ob'ektni tsiklda foydalanishga imkon beradigan tushunchadir for..of.

// Albatta massivlar iteratsiya bo'ladi. Ammo yana ko'plab o'rnatilgan ob'ektlar mavjud, ularni ham iteratsiya qilsa bo'ladi, Masalan stringlar ham takrorlanadi.

// Agar ob'ekt texnik jihatdan massiv bo'lmasa-da, lekin biror narsaning to'plamini (ro'yxati, to'plami) ifodalasa, u holda for..of uni iteratsiya qilish uchun ajoyib sintaksis bo'ladi, shuning uchun uni qanday ishlashini ko'rib chiqamiz.

// #Symbol.iterator

// Biz o'zimizdan birini yaratish orqali takrorlanadigan tushunchani osongina tushunishimiz mumkin.
// Misol uchun, bizda massiv bo'lmagan, lekin mos keladigan ob'ekt mavjud for..of.

// range raqamlar oralig'ini ifodalaydigan ob'ekt:

let range0 = {
  from: 1,
  to: 5,
};

// for(let num of range){
//     console.log(num);
// } agar biz shunday qiladigan bo'lsak bizga: range is not iterable, degan xatolik chiqadi.

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

// range nomli ob'ektni iterable qilish uchun, (ya'ni for...of ni ishlaydigan qilish uchun) biz bu ob'ektga Symbol.iterator nomli method qo'shishimiz kerak. (shuning uchun chiqarilgan maxsus method)

// 1. Qachonki for...of boshlansa, u shu methodga bir marotaba call qiladi (topilmasa hatolik). Method iteratorni qaytarishi kerak, next esa ob'ektni
// 2. for...of faqat qaytarilgan ob'ekt bilan ishlaydi.
// 3. for..of Keyingi qiymatni xohlasa, u ob'ektni next() chaqiradi.
// 4. next() ning natijasi shunday formada bo'lishi kerak {done: Boolean, value: any}, qachonki done true bo'ladigan bo'lsa bu iteratsiya tugaganligini anglatadi, boshqa holatda "value" keyingi qiymat bo'ladi

// Mana kommentlar orqali full implementation:

let range = {
  from: 0,
  to: 5,
};

// for...of dastlab buni chaqiradi
range[Symbol.iterator] = function () {
  // U iterator ob'ektini qaytaradi
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// yuqoridagi ob'ektda o'zining next() funksiyasi yo'q

let dateRange = {
  from: new Date("2023-08-01"),
  to: new Date("2023-08-10"),

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      let currentDate = new Date(this.current);
      this.current.setDate(this.current.getDate() + 1); // Move to the next day
      return { done: false, value: currentDate };
    } else {
      return { done: true };
    }
  },
};

for (let date of dateRange) {
  console.log(date.toISOString().split("T")[0]);
}

let variable = 1;

variable == 2 ? (variable += 1) : "";

console.log(typeof variable);
console.log(variable);

let stringRange = {
  from: 'a',
  to: 'e',

  [Symbol.iterator]() {
    let startCharCode = this.from.charCodeAt(0);
    let endCharCode = this.to.charCodeAt(0);
    return {
      currentCharCode: startCharCode,

      next() {
        if (this.currentCharCode <= endCharCode) {
          let currentValue = String.fromCharCode(this.currentCharCode);
          this.currentCharCode++;
          return { done: false, value: currentValue };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let letter of stringRange) {
  console.log(letter);
}
// range nomli ob'ektni o'zida next() nomli function yo'q
// Buning o'rniga, chaqiruv orqali "iterator" deb ataladigan boshqa ob'ekt yaratiladi range[Symbol.iterator]()va u next()iteratsiya uchun qiymatlarni yaratadi.

// Texnik jihatdan biz ularni birlashtirib, rangekodni soddalashtirish uchun iterator sifatida foydalanishimiz mumkin.

let range = {
  from: 1,
  to: 5,  // infinity ham bo'lishi mumkin
  [Symbol.iterator](){
    this.start = this.from
    return this
  },

  next(){
    if(this.start <= this.to){
      return {done: false, value: this.start++}
    }else {
      return {done: true}
    }
  }
}

for(let rangers of range){
  console.log(rangers);
}

//  Muhim nuqta: [Symbol.iterator] metodining oxirida return this; qaytarishining maqsadi, iterator obyektini this orqali qaytarib, iterator obyektining ichidagi xususiyatlarga (masalan, current) kiritilgan holatni saqlash uchun ishlatilishi. Bu qaytarish usuli iteratorni to'g'ri shaklda tuzish va uni for...of tsikli yordamida to'g'ri tarzda ishlashini ta'minlaydi.

// #Stringlar iteratsiya qilsa bo'ladigandir

// Arraylar va Stringlar iteratsiya qilsa bo'ladigan eng ko'p tarqalganlardandir

// misol uchun for...of sintaxisisi stringlarni iteratsiya qilishi mumkin:

for(let characters of "test"){
  console.log(characters); // t, keyin e, keyin s, keyin t
}

// Bu simvollar bilan ham to'g'ri ishlaydi:

let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}

// buni qanday qilib aniq ishlashni keling qo'lda ko'rib chiqamiz:

let str = "Hello";

let iterator = str[Symbol.iterator]();

while(true){
  let result = iterator.next();

  if(result.done) break
  console.log(result.value)
}
// hamma belgilarni birma bir chiqaradi

// Bu kamdan-kam hollarda kerak bo'ladi, lekin bizga jarayon ustidan ko'proq nazorat qilish imkonini beradi for..of. Misol uchun, biz iteratsiya jarayonini ajratishimiz mumkin: bir oz takrorlang, keyin to'xtating, boshqa ishni bajaring va keyinroq davom eting.

// Iterables and array-likes = iterablellar va massivlarga o'xshashlar

// Bu ikkitasi birxil ko'ringani bilan juda bir biridan farq qiladi.

// Iterables bular yuqorida ko'rganimiz ya'ni obj[Symbol.iterator]() lardir
// array-likes ya'ni arrayga oxshash ob'ektlar bular: length hususiyati bilan uzunligi belgilanganlardir

// Biz JavaScript-ni brauzerda yoki boshqa har qanday muhitda amaliy vazifalar uchun ishlatganimizda, biz takrorlanadigan yoki massivga o'xshash yoki ikkalasini ham uchratishimiz mumkin.

// Masalan, satrlar iterativ ( for..ofular ustida ishlaydi) va massivga o'xshaydi (ularning raqamli indekslari va length).

// Ammo iteratsiya massivga o'xshamasligi mumkin. Va aksincha, massivga o'xshash takrorlanmasligi mumkin.

// Misol uchun, rangeyuqoridagi misolda takrorlanadigan, lekin massivga o'xshamaydi, chunki u indekslangan xususiyatlarga ega emas va length.

// Va bu erda massivga o'xshash, lekin takrorlanmaydigan ob'ekt:

let arrarLike = {
  0: "Hello",
  1: "World",
  length: 2
}

for(let key of arrarLike){} // error no symbol iterator

// Bunaqa holatlar biz juda ko'p duch kelamiz ayniqsa DOM bilan ishlayotganimizda, masalan htmldan elementlarni oladigan bo'lsak bizga nodeList kabi narsalar qaytadi

