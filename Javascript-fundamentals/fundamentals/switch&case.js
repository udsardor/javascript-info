// Switch bayonoti 
    // Biz switch ni "if" ning o'rniga ham ishlatishimiz 
    // Switch bizga qiymatlarni solishtirganda yanada tavsiflovchi usulini beradi 

    // Switch da bir yoki birnechta case bloklari bo'lishi mumkin
    // Umumiy sintaksis 
    let x;
    switch(x) {
      case 'value1':  // if (x === 'value1')
        ...
        [break]

      case 'value2':  // if (x === 'value2')
        ...
        [break]

      default:
        ...
        [break]
    }

    //1) case (x) ning qiymatini birinchi "value1" keyin ikkinchisi bilan (value2) va hk. qiymatlar bilan qat'iy tenglik uchun tekshiradi
    //2) Agarda tenglik topilsa, switch kodni mos keladigan case ning eng yaqin break'igacha tekshiradi yoki (oxirigacha)
    //3) Agar case lar to'g'ri kelmasa default kod ishga tushadi (agar mavjud bo'lsa)

    // Misol:

    let a = 2 + 2;

    switch (a) {
      case 3:
        console.log( 'Kichikroq' );
        break;
      case 4:
        console.log( 'Aniq!' );
        break;
      case 5:
        console.log( 'Kattaroq' );
        break;
      default:
        console.log( "I don't know such values" );
    }
    // 1) Switch (a) ni birinchi case bilan ya'ni 3 bilan qat'iy tenglikda tekshiradi va case muvaffaqqiyatsiz bo'ladi sababi 4 ' 3 ga teng emas
    // 2) keyingi case bilan solishtiradi va keyingi case 4 va mos keladi va kod eng yaqin breakgacha ishga tushirladi
    // Agar buyerda break bo'lmasa kod keyingi  case gacha hech qanday tekshiruvlarsiz o'tadi

    // Breaksiz ishlashga misol:
    let c = 2 + 2;

    switch (c) {
      case 3:
        console.log( 'Too small' );
      case 4:
        console.log( 'Exactly!' );
      case 5:
        console.log( 'Too big' );
      default:
        console.log( "I don't know such values" );
    }
    // Natijaga faqatgina birinchi case chiqmaydi.
    // Huddi bunday
    // console.log( 'Exactly!' );
    // console.log( 'Too big' );
    // console.log( "I don't know such values" );

    // Switch va case ga biz o'zboshimcha argumentlarni qo'shishimiz ham mumkin mana bu yerda misol: 
    let a = "1";
    let b = 0;

    switch (+a) {
      case b + 1:
        console.log("Bu ishlaydi sababi +a 1, albatta b+1 ga teng bo'ladi");
        break;

      default:
        console.log("this doesn't run");
    }

    // Biz case larni guruh qilib ishlatsak ham bo'ladi;
    let a = 3;

    switch (a) {
      case 4:
        console.log('Right!');
        break;

      case 3: // (*) grouped two cases
      case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

      default:
        console.log('The result is strange. Really.');
    }

    // Bizga 3 va 5 dagi breakgacha kod ishlaydi sababi 3da  hechqanday break yo'q;
    // huddi if(a === 3 || a === 5) ga o'xshab ishlaydi
    // Shuni ta'kidlash kerakki, tenglikni tekshirish har doim qat'iydir. Qiymatlar mos kelishi uchun bir xil data type bo'lishi kerak.

    // Masalan, kodni ko'rib chiqaylik:
    let arg = prompt("Enter a value?");
    switch (arg) {
      case '0':
      case '1':
        console.log( 'One or zero' );
        break;

      case '2':
        console.log( 'Two' );
        break;

      case 3:
        console.log( 'Never executes!' );
        break;
      default:
        console.log( 'An unknown value' );
    }