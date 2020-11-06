// Задание 1
// let counter = 0;

// const isPrime = (num) => {
//     for (let i = 2; i < num; i += 1) {
//         if (num % i === 0) return false;
//     }
//     if (num >= 1) return true;
// }

// while (counter <= 100) {
//     if (isPrime(counter)) {
//         console.log(counter);
//     }
//     counter += 1;
// }




// Задание 2
// const cart = [];

// for (let i = 0; i <= Math.random() * 100; i += 1) {
//     const cartItem = {price: Math.ceil(Math.random() * 1000), name: `Cart Item #${Math.ceil(i)}`}
//     cart.push(cartItem);
// }

// console.log(cart);

// let cartPrice = 0;
// for (let i = 0; i < cart.length; i+= 1) {
//     const item = cart[i];
//     cartPrice += item.price;
// }

// console.log(cartPrice);


// Задание 3
// for (let i = 0; i < 10; console.log(i++)) {}

// Задание 4
for (let i = 1; i<= 20; i+= 1) {
    let str = '';
    for (let j = 0; j < i; j += 1) {
        str += 'x'
    }
    console.log(str);
}