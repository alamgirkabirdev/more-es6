const friends = ['Tom Hanks', 'Tom Cruise','Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
     {name:'water bottle', price: 50, color:'yellow'},
     {name:'mobile phone ', price: 15050, color:'black'},
     {name:'smart watch', price: 500, color:'blue'},
     {name:'sticky note', price: 200, color:'pink'},
     {name:'water glass', price: 50, color:'white'}
]

const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
products.map(product => console.log(product));

// console.log(productPrices);