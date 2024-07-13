
const vehicles = ['mustang','ford','expedition'] ; 

// old way 

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way 

const [cars, trucks, suvs] = vehicles ; 

// destructuring comes in handy when a function returns an array 

function calculate(a,b){
    const add = a+b ; 
    const subtract = a-b; 
    const multiply = a*b ; 
    const divide = a/b ; 

    return [add, subtract, multiply, divide] ; 
}

const [add, subtract, multiply, divide] = calculate(4,7) ; 

console.log('Addition: ', add);
console.log('Subtraction: ', subtract);
console.log('Multiplication: ', multiply);
console.log('Division: ', divide);


// Object destructuring 

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'Car',
    year: 2024,
    color: 'yellow'
}

const vehicle = {...myVehicle, ...updateMyVehicle} ; 

console.log(vehicle);