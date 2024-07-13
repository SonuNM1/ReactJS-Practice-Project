
// Create a class named car

/*
class Car{
    constructor(name){
        this.brand = name ; 
    }
}

const myCar = new Car("Ford") ; 
*/

// Method inside class 

/*
class Cars{
    constructor(name){
        this.brand = name ; 
    }
    present(){
        return 'I have a ' + this.brand + ' car' ; 
    }
}

const cars = new Cars("BMW") ; 
const result = cars.present() ; 
console.log(result);
*/

// Class Inheritance 

class Car{
    constructor(name){
        this.brand = name ; 
    }
    present(){
        return 'I have a ' + this.brand ; 
    }
}

class Model extends Car{
    constructor(name, model){
        super(name) ; 
        this.model = model ; 
    }
    show(){
        return this.present() + ' of model ' + this.model ; 
    }
}

const myCar = new Model("Mustang", "Ford") ; 

console.log(myCar.show()) ; 
