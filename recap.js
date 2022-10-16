// let and const
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'samsung Galaxy A13';

// default parameter
// spread or three dots (...)
function maxNumber(array=[]){
    const max= Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// template string
const myNotes = `I an mojnu of ${hubby} . I do not have a ${phone} ` ;
console.log(myNotes);

//arrow function
const square = x => x * x;
console.log(square(9));
