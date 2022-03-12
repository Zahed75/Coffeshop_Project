// const addCart=document.getElementById("cart");
// addCart.addEventListener('click',function (){
//     const number = parseInt(document.getElementById("digit").innerText);
//     number.innerHTML=number+1;
// })
// function handleAddToCart(id){
//     console.log(id)
// }
// const cartCount = document.getElementById('digit')
// let cart = []
// const storedCart = localStorage.getItem('cart');
//
// if (storedCart) {
//     cart = JSON.parse((storedCart))
//     showCartCount(cart)
// } else {
//     cart = []
//     showCartCount(cart)
// }
//
// function showCartCount(cart) {
//     cartCount.innerHTML = cart.length
// }
//
//
// function handleaddtocart(id) {
//     console.log('product id', id)
//     // cart.push(id)
//     const isThere = cart.find(item => item[id])
//     if (isThere) {
//         const findIndex = cart.findIndex(i => i[id])
//         const update = {...isThere, [id]: isThere[id] + 1}
//         cart.splice(findIndex, 1, update)
//         localStorage.setItem('cart', JSON.stringify(cart))
//     } else {
//         const newCartItem = {[id]: 1}
//         cart.push(newCartItem)
//         localStorage.setItem('cart', JSON.stringify(cart))
//         // showCartCount(cart)
//     }
//
//     showCartCount(cart)
// }
//
//

// let cart_array = [];
//
// function addToCart(id) {
//     cart_array.push(id);
//     console.log(cart_array)
// }

