
const myArray = ['apple', 'mango', 'banana'] ; 

const myList = myArray.map((item)=> <p>{item}</p> ) ; 

const result = document.getElementById('root').innerHTML = myList ; 

console.log(result);