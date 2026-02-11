// Number and NNumber Methods
let num = 1_000_000_000
// Rounding - yaxlitlash
let myNum = 4.9
console.log(Math.floor(myNum)); // pastga qarab yaxlitlaydi
console.log(Math.round(myNum)); // normal yaxlitlash
console.log(Math.ceil(myNum)); // Yuqoriga qarabyaxlitlash
console.log(Math.trunc(myNum)); // nuqtadan keyingi qismini olib tashlaydi 


let newNum = 19.23578617865473425 // yaxlitlaydi va qirqib oladi
console.log(newNum.toFixed(17));

// NaN - Not a Number
// isNan - son bolmagan malumot turimi
console.log(isNaN(12));
console.log(NaN === NaN); // teng emas "false"

console.log(parseInt('100rem101')); // butun songa o'girish
console.log(parseFloat('12.5')); // qoldiqli | haqiqiy songa o'giradi


// max
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));
// min
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, -1));
// pow - sonni darajaga kotaradi - kvadrat
console.log(Math.pow(9999, 999));
// abs - absolute qiymat
console.log(Math.abs(-111));
 

// Random 
const randomNumberOne = Math.round(Math.random()*10);
console.log(randomNumberOne);




        // CODE
        
// isIntejer - qiymatning butun son ekanligini tekshiradi. 
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger("10"));    // false (satr/string)

// parseFloat -  konvertatsiya (satrni o'nlik songa aylantirish).
let numberString = "3.14";
let number = parseFloat(numberString);
console.log(number); 
console.log(typeof number); 

// isSafeInteger - Statik usul berilgan qiymat xavfsiz butun ekanligini aniqlaydi .
Number.isSafeInteger(10);   // true
Number.isSafeInteger(Math.pow(2, 53)); // false

