// function fnA(str, callback) {
//     callback(str);
// }

//     function fnB(name) {
//   console.log(`Hello ${name}`);
// }

// fnA("Yura", fnB);





// function calc(a, b, callback) {
//     //         callback (2, 3)
//     const c = callback(a, b);
//     const str = String(c);
//     const res = str + "!!!";
//     return res;
// }
// function calc2(a, b) {
//     const c = a - b;
//     const str = String(c);
//     const res = str + "!!!";
//     return res;
// }

// console.log(calc2(2, 6));

// console.log(calc(2, 3, function (x, y) {
//     return x + y;
// }));

// console.log(calc(10, 2, function (x, y) {
//     return x - y;
// }));

// function each(array, callback) {
//     const newArray = [];
//     for (const item of array) {
//         newArray.push(callback(item))
//     }
//     return newArray
// }

// console.log(each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
// }));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(add (1, 2,3));
// function add(a, b, c) {
//     return a + b + c;
// }


// const addArrow = a => a;

// console.log(addArrow(10));

// const add = (a, b) => a + b;

// console.log(add(5, 5));

// function fnA() {
//     return { a: 10 };
// }

// console.log(fnA());

// const fnB = () => ({ a: 20 });

// console.log(fnB());

// const calc = (a, b, callback) => {
//     const res = callback(a, b);
//     const str = res + "!!!";
//     return str;
// }


// console.log(calc(10, 2, (tototo, lalala) => tototo + lalala));

// console.log(
//   calc(2, 7, (x, y) =>  x - y)
// );

// const numbers = [5, 10, 15, 20, 25];

// let total = 0;

// numbers.forEach(function (number) {
//     total += number;
    
// })

// numbers.forEach(item => total += item);

// console.log(total);

// const logItems = (array) => {
//     array.forEach((item, i) => {
// console.log(`${i+1} - ${item}`);
//     })
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);


// const printInfo = (obj) => {
//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");
//     namesArr.forEach((item, index) => {
//         console.log(`${item} - ${phonesArr[index]}`);
        
//     });
//     phonesArr.forEach((number, index) => {
//         console.log(`${ number} - ${namesArr[index]}`);
        
//     })
    
// }


// printInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055566300",}
//   );

// const calculateAverage = (...args) => {
//     let total = 0;
//     args.forEach(item => total += item);
//     return total / args.length;

// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));
// console.log(calculateAverage(27, 43, 2, 8, 36));

// const allCars = [
//   { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//   { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//   { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//   { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//   { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//   { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//   { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//   { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//   { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//   { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];
// const getModels = (cars) => {
//     const res = [];
//     cars.forEach((item) => {
//         res.push(item.model);
        
//     })
//     return res;
// }

// const getModels = (cars) => {
//     return cars.map(car => car.model);
// }

// const getPrice = (value) => {
//     return value.map(value => value.price);
// }

// console.log(getPrice(allCars));

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//         return { ...car, price:car.price * (1 - discount) }
//     });
// }

// console.log(makeCarsWithDiscount(allCars, 0.2));


// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playerId = "player-3";

// const newPlayers = players.map((item) => {
//     if (item.id === playerId) {
//         return {
//         ...item, timePlayed: item.timePlayed + 100
// } 
//     }
//     return item;
// })

// console.log(newPlayers);

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap((tweet) => tweet.tags);

// console.log(tags);
