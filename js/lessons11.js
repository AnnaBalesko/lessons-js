// "use strict"

// function foo() {
//   console.log("this", this);
  
// }

// foo();

// const mouse = {
//   username: "Alice",
  // showThis() {
  //   // console.log("showThis", this);
  //   this.username = "Petya";
  // }
//   arrowThis: () => {
//     console.log("arrowThis", this);
    
//   }
// }
// mouse.arrowThis();
// mouse.showThis();
// console.log(mouse);

// function foo() {
//   console.log("this", this);
  
// }

// const name = {
//   username: "Yura",
// }

// name.showThis = foo;
// foo();

// name.showThis();

// const petya = {
// username: "Petya",}

// petya.lalala = foo;
// console.log(petya.lalala);
// petya.lalala()


// const name = {
//   username: "Alice",
//   showThis(){
//   console.log("this", this);}
// }

// const foo = name.showThis;
// foo();

//====================================================================

// "use strict"

// const username = {
//   user: "Petya",
//   show() {
//     console.log("this", this);
//     console.log("user", this.user);
    
//   }
// }

// function foo(callback) {
//   console.log(callback);
//   callback();
// }
// foo(username.show);

//================================================================

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(item => item.name === stoneName);
//     if (!stone) {
//       return `${stoneName} not found`;
//     }
//     return stone.price * stone.quantity;
//   }
// };

// console.log(chopShop.calcTotalPrice("Sapphire"));

//==============================================================

// function foo(a, b, arr) {
//   console.log("foo", this); //obj
//   console.log(a,b,arr);
  
// }

// const obj = {
//   a: 5,
//   b:10,
// }


// foo.call(obj, "lalala", 5, [1,2]);
// foo.apply(obj, ["lalala", 5, ["a", "b"]]);

//=====================================================

// function chancheColor(color) {
//   console.log("this", this);
//   this.color = color;
  
// }

// const hat = {
// color: "blue"
// }

// const sweater = {
//   color:"black"
// }


// chancheColor.call(hat, "green");
// console.log(hat);

// chancheColor.apply(sweater, ["yellow"]);
// console.log(sweater);

//===========================================================

//bind()

// function chancheColor(color) {
//   console.log("this", this);
//   this.color = color;
  
// }

// const hat = {
// color: "blue"
// }

// const sweater = {
//   color:"black"
// }

// const changeHatColor = chancheColor.bind(hat);

// changeHatColor("red");
// console.log("hat", hat);

// changeSweaterColor = chancheColor.bind(sweater, "green");

// // changeSweaterColor();
// // console.log(sweater);

// const counter = {
//   value: 0,
//   increment(num) {
//     console.log("increment", this);
//     this.value += num;
//   },
//   decrement(num) {
//     console.log("decrement", this);
//     this.value -= num;
//   }
// }

// function foo(number, callback) {
//   callback(number)
// }

// foo(10, counter.increment.bind(counter));
// foo(5, counter.decrement.bind(counter));

// console.log(counter);


//==============================================================

// const animal = {
//   legs:4,
// }

// const dog = Object.create(animal);
// dog.name = "Patron";

// console.log(dog);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
    
//   }
// }

// const keys = Object.keys(dog);

// console.log(keys);

//=========================================

// const objC = { c: "objC" }

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA);
// console.log(objA.x);

// console.log(objB);
// console.log(objB.b);

// console.log(objC);

//========================================================

// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.brand} прискорюється. Швидкість ${this.speed}`);
    
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log("Авто зупинилось");
//       return;
//     }
//     this.speed -= 10;
//     console.log(`${this.brand} гальмує. Швидкість ${this.speed}`);
    
//   }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

//==================================================================

// const SPEED = 60;

// const bmw = {
//   speed: 30,
//   brand: "BMW"
// }

// const audi = {
//   speed: 80,
//   brand: "Audi"
// }

// function speedSeansor(maxSpeed) {
//  return this.speed <= maxSpeed
//     ? `Автомобіль ${this.brand} рухається з безпечною швидкістю ${this.speed}`
//     : `Автомобіль ${this.brand} рухається з безпечною швидкістю ${this.speed}`;
// //   if (this.speed <= maxSpeed) {
//    return `Автомобіль ${this.brand} рухається з безпечною швидкістю ${this.speed}`
//  }
//   return `Автомобіль ${this.brand} рухається з безпечною швидкістю ${this.speed}`
// }

// const speedSeansorBmw = speedSeansor.bind(bmw);

// speedSeansorBmw(SPEED)

// console.log(speedSeansorBmw(SPEED));

// console.log(speedSeansor.call(audi, SPEED));

























