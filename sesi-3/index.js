//pembuatan class
// class Employee {
//     doWork() {
//         return "complete!";
//     }
// }

// let scott = new Employee();
// console.log(scott.doWork());



class Person {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

//class inheritance
class Employee extends Person{
    doWork() {
        return this._name + " is working";
    }

}

let scott = new Employee("Aristu");
console.log(scott.getName());
console.log(scott.doWork());


//method super untuk mengakses di class parent nya
class EmployeeOne extends Person {
    constructor (name, title) {
        super(name);
        this._title = title;
    }
    getTitle() {
        return this._name + " is" + " " + this._title;
    }
}

let hasil = new EmployeeOne ("Aristu","Joging");
console.log(hasil.getTitle());
console.log(hasil.getName());