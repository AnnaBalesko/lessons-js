// const numbers = [5, 10, 15, 20, 25];

// const res = numbers.filter(item => item > 10);

// console.log(res);




// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];


// const filterByPrice = (cars, threshold) => {
//     return cars.filter((cars) => cars.price < threshold);
//     }

// console.log(filterByPrice(allCars, 30000));


// const getCarsWithType = (arr, type) => {
//     return arr.filter(item => item.type === type);
//  }

// console.log(getCarsWithType(allCars, "sedan"));



// const numbers = [5, 10, 15, 20, 25];

// const res = numbers.find(num => num > 10);

// console.log(res);

// const getCarsModel = (arr, model) => {
//     return arr.find((car) => car.model === model);
// }
// console.log(getCarsModel(allCars, "Accord"));

// const getCarsWithType = (arr, type) => {
//     return arr.find((car) => car.type === type);
// }

// console.log(getCarsWithType(allCars, "sedan"));


// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const isAllOnline = players.every((item) => item.timePlayed > 100);
// console.log(isAllOnline);


// const isAnyOnline = players.some((item) => item.timePlayed < 100 && item.online);
// console.log(isAnyOnline);

// const numbers = [1, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => res = acc + number, 0
// );

// console.log(total);

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// }

// const values = Object.values(salary);
// const total = values.reduce((acc, value) => acc + value, 0);
// console.log(total);

// const result = players.reduce((acc, player) => acc + player.timePlayed, 0);
// console.log(result);

// const cart = [
//     { label: "Apples", price: 100, quantity: 2 },
//     { label: "Bananas", price: 120, quantity: 3 },
//     {label:"Lemons", price: 70, quantity:4},
// ]

// const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

// console.log(total);

// const numbers = [2, 6, 1, 4, 8];

// const res = numbers.toSorted();

// console.log(res);

// const arr = ["a", "b", "B", "A"];

// console.log(arr.toSorted((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted((a,b) => b.localeCompare(a)));

// const numbers = [2, 6, 1, 14, 8];

// console.log(numbers.toSorted((a, b) => b - a));
// console.log(numbers.toSorted((a, b) => a - b));


// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];


// const res = players.toSorted((a, b) => a.timePlayed - b.timePlayed);
// console.table(res);

// const res2 = players.toSorted((tototo, lalala) => lalala.timePlayed - tototo.timePlayed);
// console.table(res2);
// console.table(players);

// const numbers = [2, 5, 3, 1, 4];

// const first = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .toSorted((a, b) => a - b);
//     console.log(first);

// const getModelIsOnCars = (arr) => {
//     return arr
//         .filter(car => car.onSale)
//         .map(car => car.model)
// }

// console.log(getModelIsOnCars(allCars));


// const getSortedCarsOnSale = (arr) => {
//     return arr
//         .filter(item => item.onSale)
//         .toSorted((a, b) => a.price - b.price)
//         .map(car => car.model);
// }

// console.log(getSortedCarsOnSale(allCars));

// const arr = ["apple,🍎", "orange,🍑", "banana,🍌", "lemon,🍋"];

// const obj = arr.reduce((acc,item) => {
//     const itemArr = item.split(",");
//     const key = itemArr[0];
//     const value = itemArr[1];
//     acc[key] = value;
//     return acc;
    
// }, {})

// console.log(obj);