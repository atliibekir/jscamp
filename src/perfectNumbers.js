//MÜKEMMEL SAYILAR

function perfectNumbers() {
    let numbers=[]
    for (let i = 1; i <= 1000; i++) {
        let total = 0;
        for(let j = 0; j < i; j++){
            if(i%j==0){
                total += j
            }
        }
        if (total == i) {
            numbers.push(i)
           
        }
    }
    console.log("Mükemmel Sayılar : " + numbers)
   
}
perfectNumbers()