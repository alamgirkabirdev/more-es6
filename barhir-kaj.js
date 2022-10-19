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

// arrow function
// (a)
 const multi = num => num * 10;
 const sum = multi(9);

 const dividing = (x ,y) => (x + y) /5;
 const result = dividing(40, 50);
// (b)
const addDivi = (num1,num2) => num1 + num2;
const sum2 = addDivi * 12;
const result2 = addDivi(14, 15);

const multiNum =(nu1, nu2, nu3)=> nu1 * nu2 * nu3;
const tot =multiNum (14, 15, 13);
// console.log(tot);

// 5.array of numbers...
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron'
  ];
  
//   console.log(materials.map(material => material.length *5));
  // expected output: Array [8, 6, 7, 9,5] * 5
  

  // 6. numbers of array. get odd numbers by using filter with arrow function
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];

var evens = arr1.filter(function(x) {
   return x % 2 === 1;
})
// console.log(evens);

// 7. arrow of Object (e.g. products) use find to get the object with price 5000

// 8. using destructing 
const [x, y, z] =[10, 20, 30];
// console.log(x, z);
 

const func = (param1 = 'param1', param2 = 'param2') => {
    return param1 + param2;// Other instructions
  }
  // console.log(func);

  const products = [
    {name:'water bottle', price: 50, color:'yellow'},
    {name:'mobile phone ', price: 15050, color:'black'},
    {name:'smart watch', price: 5500, color:'blue'},
    {name:'sticky note', price: 200, color:'pink'},
    {name:'water glass', price: 50, color:'blue'}
];
const expensive = products.filter(product =>product.price> 5000);

console.log(expensive);