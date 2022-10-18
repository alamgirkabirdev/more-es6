// let, const
 let balance = 1240;
balance = 120;

const useName = 'kabir';
const name = 'Alamgir';
const fullName = name + ' '+ useName ;
// console.log(fullName);

// template string
let price = 20;
let VAT = 0.2;

// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
let total = `Total: ${price + (price * VAT)}`;
// console.log(total);

const fn = 'Alamgir';
const ln='Kabir';
const fullName2 = `It is my first name:${fn} and it is my last name:${ln}`;
// console.log(fullName2);
