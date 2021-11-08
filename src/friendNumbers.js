//ARKADAŞ SAYILAR
let number1;
let number2;
let total1=0;
let total2=0;
function friendNumbers(number1,number2) {
    for (let i= 1; i < number1; i++) {
        if (number1%i==0) {
            total1 += i;
        }
        
    }
    for (let j = 1; j < number2; j++) {
        if (number2%j==0) {
            total2 += j;
        }
    }
    if (number1==total2 && number2==total1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır!")
    }else{
        console.log(number1 + " ve " + number2 + " arkdaş sayılar değildir!")
    }
    
}
friendNumbers(284,220)
friendNumbers(441,447)