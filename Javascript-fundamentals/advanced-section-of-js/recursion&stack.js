// Recursion & Stack
// Keling funksiyalarga qaytaylik va uni chuqurroq o'rganaylik
// Birinchi mavzu RECURSION:

// Rekursiya bu dasturlashdagi patternlardan (pattern - umumiy va ko'p uchraydigan muammolarga umumiy yechim) biri hisoblanadi,u ko'plab tabiiy ravishda bo'laklarga bo'linadigan topshiriqlar lekin, osonroq ko'rinadi. Yoki birxil bo'lgan topshiriqning osonroq yozilishi yoki ko'rinishi desak ham bo'ladi. Yoki yaqinda ko'radigan aniq bir ma'lumotlar strukturalari bilan ishlash uchun.

// Qachonki funksiya topshiriqni yechsa, va o'sha jarayonni o'zida bir nechta boshqa funksiyalarni chaqirishi mumkin:

const calledInto = (confirmation, yes, no) => {
    if (confirmation == "yes" || confirmation == "Yes") {
        alert(yes())
    } else {
        alert(no())
    }
}


let confirmation = prompt("Do you have parental confirmation?");

function yes() {
    return "You've a confirmation, so you can enter"
}

function no() {
    return "You've no confirmation from your parents, so you cannot enter the site"
}

calledInto(confirmation, yes, no)

// Yuqoridagi funksiyada bir function ichida boshqa funkiya chaqirildi.

// Rekursiya esa ya'ni recursion funksiya o'zini ichida o'zini chaqirishidir:

const countdown = (x) => {
    if(x <= 0){
        return x
    }else {
        console.log(x)
        countdown(x - 1)
    }
}

countdown(5)

// bu funksiyaning yana bir ko'rinishi:

const loopedCountdown = () => {
    for(let i = 5; i >= 1; i--){
        console.log(i);
    }
}

loopedCountdown()

// Demak ikkala kodni solishtiradigan bo'lsak, birinchi yuqoridagi kod avval qanaqa ishlaganligini tushunib olaylik: 
// countdown nomli funksiya e'lon qilingan va unga x nomli raqam qabul qiladigan parameter (argument) berilgan, va ichida shart yozilgan ya'ni agarda x berilgan son 0 dan kichik yoki teng bo'ladigan bo'lsa funksiya shu joyda ishlashni to'xtatadi va berilgan x sonini o'zini qaytaradi. Demak x soni berilgan son 0 dan katta bo'lgan holatlarda ikkinchi ya'ni else holatiga o'tadi va eng qiziq joyi avvaliga 1 marta berilgan sonning o'zi ekranga chqadi masalan x = 5, keyin countdown(5) nomli funksiya o'zini ichida o'zini chaqiradi va x ning ya'ni 5 dan 1 ni olib tashlaydi va shart tugamaguncha funksiya qayta chaqirilaveradi ya'ni:
//            shows
// countdown(5) => countdown(4)
// countdown(4) => countdown(3)
// countdown(3) => countdown(2)
// countdown(2) => countdown(1)
// va ohirida funksiya to'xtaydi

// o'sha funksiyaning vazifasini bajaradigan yana bir function esa loop orqali qilingan loopedCountdown bu shunchaki loop orqali orqaga yuradigan script yozilgan