const fish = {id: 52, name: 'King Hilsha', price: 9000, phone:'0172554878', address: 'chandpur', dress:'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const dress = fish.dress;

const {phone, price, id, dress} = fish;

// console.log(phone,price);
// console.log(phone, dress);
// console.log(phone);
// console.log(phone, price);
// console.log(phone);

const company = {
    name: 'GP',
     ceo:{id: 1, name: 'ajmol', food:'fuchka'}, 
     web:{work: 'website development', 
        employee: 22,
        framework: 'react',
        tech:{first: 'html', second: 'css', third: 'js'},
    },
};

const {work,framework} = company.web;
const {name} = company.ceo;
const {first, second} = company.web.tech;

console.log(work,framework, name, first, second);
console.log(company?.backend?.tech.third);