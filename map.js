const numbers = [4, 2, 4, 6, 9];
const outPut2 = [];

// const doubleOld(number){
//     return number * 2;
// }

const doubleIt =number => number * 2;

for(const number of numbers){
    const result = doubleIt(number);
    outPut2.push(result);
}
// console.log(outPut2);

// 1. loop through each element
// 2. for each  element call the provided   function 
// 3. result for each element will be stored in an  array 

// const outPut = numbers.map(doubleIt);
// const outPut = numbers.map(number => number *2);
const outPut = numbers.map(x => x * 2);
// console.log(outPut);

const squares = numbers.map(x => x * x);
console.log(squares);