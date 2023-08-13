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
// 3. for..ofKeyingi qiymatni xohlasa, u ob'ektni next()chaqiradi.
// 4. next() ning natijasi shunday formada bo'lishi kerak {done: Boolean, value: any}, qachonki done true bo'ladigan bo'lsa bu iteratsiya tugaganligini anglatadi, bosshqa holatda "value" keyingi qiymat bo'ladi

// Mana kommentlar orqali full implementation:

let range = {
  from: 0,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
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
