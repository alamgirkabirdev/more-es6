const numbers = [5, 6, 14, 41, 30, 5,2,19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);


const products = [
    {name:'water bottle', price: 50, color:'yellow'},
    {name:'mobile phone ', price: 15050, color:'black'},
    {name:'smart watch', price: 500, color:'blue'},
    {name:'sticky note', price: 200, color:'pink'},
    {name:'water glass', price: 50, color:'blue'}
];
const expensive = products.filter(product =>product.price> 200);
const expensiveNo = products.filter(product =>product.price < 200);
// console.log(expensiveNo);
const blacks = products.filter(product => product.color == 'red');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'blue');
console.log(whiteItem);
