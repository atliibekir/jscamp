let cart = [
    {id:1, productName: "Telefon", quantity:3,unitePrice:4000},
    {id:2, productName: "Bardak", quantity:2,unitePrice:30},
    {id:3, productName: "Kalem", quantity:1,unitePrice:20},
    {id:4, productName: "Şarj Cihazı", quantity:2,unitePrice:100},
    {id:5, productName: "Kitap", quantity:3,unitePrice:30},
    {id:6, productName: "Pot", quantity:5,unitePrice:150},
]

console.log("<ul>")
cart.map(product => {
    console.log("<li> " + product.productName + " : " + product.unitePrice * product.quantity + " </li>")
})
console.log("</ul>")

let total = cart.reduce((acc, product) => acc+ product.unitePrice * product.quantity,0);
console.log(total)

let quantityOver2 = cart.filter(product => product.quantity > 2)

console.log(quantityOver2)

// function addToCart(sepet) {
//     sepet.push({id:7, productName: "Tablet", quantity:1,unitePrice:2300})    
// }
// addToCart(cart)
// console.log(cart)

// let sayi = 10;

// function sayiTopla(number) {
//     number += 1;
// }
// sayiTopla(sayi)
// console.log(sayi)

