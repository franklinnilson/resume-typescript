"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let x = 10;
x = 16;
let y = 12;
let firstName = "franklin";
let age = 34;
const isAdmin = true;
firstName = "Jonas";
console.log(firstName);
console.log(firstName.toUpperCase());
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
let myTuple;
myTuple = [1, "franklin", ["a", "b", 1]];
console.log(myTuple);
const user = {
    name: "Franklin",
    age: 34
};
console.log(user);
let a = 0;
a = "franklin";
a = true;
a = [1, 2, 3];
console.log(a);
let id;
id = "126297635123";
id = 10;
let uderID = 102031;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camiseta Polo",
    size: Size.M
};
console.log(camisa);
let autenticacao;
autenticacao = null;
console.log(autenticacao);
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 11));
function digaOla(name) {
    return `Olá ${name}`;
}
console.log(digaOla('Franklin'));
function logger(msg) {
    console.log(msg);
}
logger('Logger!');
function greeting(name, greet) {
    if (greet) {
        console.log(greet, name);
    }
    else {
        console.log(name);
    }
}
greeting('Franklin');
greeting('Franklin', 'Olá');
function sumNumber(nums) {
    const { n1, n2 } = nums;
    return n1 + n2;
}
console.log(sumNumber({ n1: 1, n2: 2 }));
function calculoQualquer(nums) {
    const { n1, n2, n3 } = nums;
    const returnNumber = n3
        ? Math.floor((n1 + 2) * (n2 - n3))
        : Math.floor((n1 + 2) * n2);
    return returnNumber;
}
console.log(calculoQualquer({ n1: 3, n2: 12, n3: 4 }));
function facaAlgo(info) {
    if (typeof info === 'number') {
        console.log(info.toFixed(2));
        return;
    }
    else {
        console.log(info);
    }
}
facaAlgo(12);
facaAlgo(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O usuário é: ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const franklin = new User('Franklin', 'admin', true);
franklin.showUserName();
franklin.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const ix35 = new Car('IX35', 4);
ix35.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const bmw = new SuperCar("BMW", 4, 3.0);
bmw.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters(),
    __metadata("design:paramtypes", [String])
], Person);
const clara = new Person("Ana Clara");
console.log(clara);
