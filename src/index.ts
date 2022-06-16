// string, boolean, number, ...
// inferencia x annotation
let x: number = 10;
x = 16;
let y = 12;

// tipos básicos
let firstName: string  = "franklin";
let age: number = 34;
const isAdmin: boolean = true;

firstName = "Jonas"
console.log(firstName);
console.log(firstName.toUpperCase());

// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);

// tuplas
let myTuple: [number, string, (string|number)[]]
myTuple = [1, "franklin", ["a", "b", 1]];
console.log(myTuple);

// object literals -> { prop : value}
const user: { name: string, age: number } = {
  name: "Franklin",
  age: 34
}
console.log(user);

// any - bad pratice  
let a: any = 0;
a = "franklin";
a = true;
a = [1, 2, 3];
console.log(a);

// union type
let id: string | number;
id = "126297635123";
id = 10; 

// type alias
type myidType = number | string;
let uderID: myidType = 102031;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}
const camisa = { 
  name: "Camiseta Polo",
  size: Size.M
}
console.log(camisa);

// literal types
let autenticacao: "autenticado" | null;
autenticacao = null;
console.log(autenticacao);

// funcoes
function soma(a: number, b: number){
  return a + b;
}
console.log(soma(12, 11));

// retorno da funcao
function digaOla(name: string):string {
  return `Olá ${name}`;
}
console.log(digaOla('Franklin'));

// funcao sem retorno = void 
function logger(msg: string): void{
  console.log(msg);
}
logger('Logger!');

function greeting(name: string, greet?: string){
  if(greet){
    console.log(greet, name);
  }else{
    console.log(name);
  }
}

greeting('Franklin')
greeting('Franklin', 'Olá')

// interfaces
interface NumsSetParams{
  n1: number,
  n2: number,
  n3?: number
}

function sumNumber(nums: NumsSetParams){
  const {n1, n2} = nums;
  return n1 + n2;
}
console.log(sumNumber({n1: 1, n2: 2}));

function calculoQualquer(nums: NumsSetParams){
  const {n1, n2, n3} = nums;
  const returnNumber: number = n3
    ? Math.floor((n1 + 2) * (n2 - n3))
    : Math.floor((n1 + 2) * n2);
  return returnNumber;
}
console.log(calculoQualquer({n1: 3, n2: 12, n3: 4}));

// narrowing - checagem de tipos
function facaAlgo( info: number | boolean){
  if(typeof info === 'number'){
    console.log(info.toFixed(2));
    return;
  }else{
    console.log(info);
  }
}

facaAlgo(12)
facaAlgo(true)

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`Item ${item}`);
  })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User { 
  name
  role
  isApproved
  constructor(name: string, role: string, isApproved: boolean){
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName(){
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean): void{
    if(canShow){
      console.log(`O usuário é: ${this.role}`);
      return;
    }
    console.log('Informação restrita');
  }
}

const franklin = new User('Franklin', 'admin', true);
franklin.showUserName();
franklin.showUserRole(true);

// interfaces em classes

interface IVehicle {
  brand: string,
  showBrand(): void
}

class Car implements IVehicle{
  brand
  wheels
  constructor(brand: string, wheels: number){
    this.brand = brand
    this.wheels = wheels
  }
  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`)
  }
}

const ix35 = new Car('IX35', 4);

ix35.showBrand();

// heranca
class SuperCar extends Car {
  engine
  constructor( brand: string, wheels: number, engine: number){
    super(brand, wheels)
    this.engine = engine
  }
}

const bmw = new SuperCar("BMW", 4, 3.0);
bmw.showBrand();

// decorators - constructor decorator
function BaseParameters() {
  return function <T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    }
  }
}
@BaseParameters()
class Person {
  name
  constructor(name: string){
    this.name = name
  }
}
const clara = new Person("Ana Clara")
console.log(clara);




