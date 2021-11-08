// ASAL SAYI
function findPrime(...numbers) {
    let asal=[]
    let normal =[]
  for (let i = 0; i < numbers.length; i++) {
     for (let j = 2; j < numbers[i]; j++) {
         if (numbers[i]%2==0) {
           normal.push(numbers[i])
           break;
             
         }else{
             asal.push(numbers[i])
             break;
             
         }
     }
   
  }
    console.log("Asal Sayılar: "+asal)   
    console.log("Asal Olmayanlar: "+normal)
    console.log("-------------------------------------------------")
}
findPrime(7,20,44,3,8,9,11)
findPrime(4,6,99,103)