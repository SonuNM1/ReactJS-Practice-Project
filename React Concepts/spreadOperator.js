
// Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object

const numbersOne = [1,2,3] ; 
const numbersTwo = [4,5,6] ;

const numbersCombined = [...numbersOne, ...numbersTwo]; 

console.log((numbersCombined));

// spread opeator is used in combination with destructuring 

const numbers = [1,2,3,4,5,6] ; 

const [one, two, ...rest] = numbers

console.log(rest);