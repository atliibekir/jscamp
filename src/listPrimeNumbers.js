// 1000 e kadar olan mükemmel sayılar.

function listPrime() {
    let primeNumbers=[]
    let divisor = 0;
    for (let i = 2; i < 1000; i++) {
        divisor = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                divisor++;
            }
        }
        if (divisor == 2) {
            primeNumbers.push(i)
            divisor = 0;
        }       
    }
     console.log(...primeNumbers)
}
listPrime()