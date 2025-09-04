// function basicOp(operation, value1, value2)
//{
//     if (operation === "+") {
//         return (value1 + value2);
//     } else if (operation === "-") {
//         return (value1 - value2);
//     } else if (operation === "*") {
//         return (value1 * value2);
//     } else if (operation === "/") {
//         return (value1 / value2);
//     }
// }
// {
//     switch (operation) {
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//     }
// }
// console.log(basicOp("+", 4, 7));
// console.log(basicOp('-', 15, 18))



// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) {
//         return [];
//     }
//     let positiveNumbers = 0;
//     let negativeNumbers = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             positiveNumbers++;
//         } else if (input[i] < 0) {
//             negativeNumbers += input[i];
//         }
//     } return [positiveNumbers, negativeNumbers];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// let styles = ["Джаз", "Блюз"];
// <=shift удаляет элем вначале \\ <=push добавляет элем вконце \\
// pop => удаляет посл элем \\
// console.log(styles.push("Ananas")); // добавляет вконце
// console.log(styles.unshift("Banan")); // добавляет вначале
// console.log(styles);
// let arr1 = styles.push("Roc-n-roll");
// console.log(styles);
// styles[1] = "Clasicall";
// console.log(styles);
// або
// styles[Math.floor((styles.length - 1) / 2)] = "Clasicall";
// console.log(styles);
// let arr2 = styles.shift();
// console.log(styles);
// let arr3 = styles.unshift("Rep", "Reggi");
// console.log(styles);


//  23-24.08 object
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// вкладена властивість
// location: {
// country: "Jamaica",
// city:"Ocho Rios",}
// };

// const apartmentDescr = apartment.descr;
// console.log(apartmentDescr);

// const apartmentCountry = apartment.location.country;
// console.log(apartmentCountry);

// const hobbies = apartment.tags.length;
// console.log(hobbies);


// console.log(apartment["tags"]);
// console.log(apartment["img"]);

// const apartmentPrice = "price";
// console.log(apartment.apartmentPrice);
// console.log(apartment[apartmentPrice]);

// apartment.rating = 6;
// console.log(apartment.rating);
// apartment.tags.push("vip");
// console.log(apartment.tags);

// apartment.name = "Jacob";
// console.log(apartment.name);

// const names = "Hlib Semykopenko";
// const age = 21;

// const user = {
//     names,
//     age,
// };

// console.log(user.names);
// console.log(user.age);

// const propName = "names";
// const user = {
//     age: 21,
//     [propName]: "Hlib Semykopenko",
// };
// console.log(user.names);
// user[propName] = "Hlib Semykopenko";
// console.log(user.names);

//-------------for......in
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key);
//     console.log(book[key]);
// }

//-------------Object.keys() + for....of

// const keys = Object.keys(book);
// console.log(keys);

// const keys = Object.keys(book);
// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];
// for (const key of keys) {
//     values.push(apartment[key]);
    
// }

// console.log(values);

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const allValues = Object.values(salaries);
//     for (const values of allValues) {
//         totalSalary += values;
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//       } return totalPrice;
//   },
// };
// console.log(atTheOldToad.getTotalPrice());


// function multiply(...args) {
// 	console.log(args)
// }

// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]

// function add(...args) {
//   let argsTotal = 0;
//   for (const arg of args) {
//     argsTotal += arg;
//   }
//     return argsTotal;

// } console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//   let totalArg = 0;
//   for(const arg of args){
//     if (arg > value){
//       totalArg += arg;
//     }
//   } return totalArg;
// }

// function getExtremeScores(scores) {
//     const object = {
        // вариант 1
    //     best: Math.max(...scores),
    //     worst: Math.min(...scores),
    // }
// вариант 2
    //     for (const value of scores) {
    //         if (value >= Math.max(...scores)) {
    //             object.best += value;
    //         } if (value <= Math.min(...scores)) {
    //             object.worst += value;
    //        }}
//     return object;
// }
// }


// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));


// колбек-функції=============================

// function greet(name) {
//     return `Welcome ${name}!`;
// }
// console.log(greet("Mango"));
// console.log(greet);

// function makePizza() {
//    return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// function greet(name) {
//     console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//     console.log(`Register ${name}`);
//     callback(name);
// }

// registerGuest("Mango", greet);
// registerGuest("Mango", notify);


// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//     console.log(
//     `Delivering ${pizzaName} pizza.`);
// }

// function makePizza(pizzaName) {
//     console.log(
//     `Pizza ${pizzaName} is being prepared, please wait...`);
// }


// makeMessage("Royal Grand", deliverPizza);
// makeMessage("Ultracheese", makePizza);

// інлайн=колбеки===============================
// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
// }

// registerGuest("Mango", function greet(name) {
//     console.log(`Welcome ${name}!`);
// })

// registerGuest("Polly", function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// })

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
    
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

//============forEach

// const numbers = [5, 10, 15, 20, 25];

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(`Index ${i}, value ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);

// });


// function calculateTotalPrice(orderedItems) {
//     let totalPrise = 0;
//     orderedItems.forEach(function (number) {
//         totalPrise = totalPrise + number;
//     });
//     return totalPrise;
// }
// console.log(
//  calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//     const newArray = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             newArray.push(number);
//         };
//     });
//     return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


//===========стрілочні функції

// function classicAdd(a, b, c) {
//     return a + b + c;
// }

// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// };

// const addO = a => {
//     return a + 5;
// };

// const add = () => {
//     console.log("Hello!");
// };

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));


// const add = (a, b) => a + b;

// console.log(add(4, 5));

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));

// const add = (...args) => {
//     console.log(args);
// }

// add(1, 2, 3);

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);
// });

// numbers.forEach((number, index) => {
//     console.log(`Index ${index}, value ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//     console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//     return totalPrice;
// }
// console.log(
//  calculateTotalPrice([12, 85, 37, 4]));

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


//====================map i flatMap

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// console.log(numbers);

// const pureMultiply = (array, value) => {
//     const newArray = [];
//     array.forEach(element => {
//         newArray.push(element * value);
//     });
//     return newArray;
// }

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);

// console.log(doubledNumbers);

// function changeEven(numbers, value) {
//     const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//     newArray.push(number + value);
//       } else { newArray.push(number) };
//   });
//     return newArray;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ==========перебираючі методи
//=============метод мар()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toLocaleUpperCase());

// console.log(planetsInUpperCase);
// console.log(planets);

// const planetsInLowerCase = planets.map(planet => planet.toLocaleLowerCase());

// console.log(planetsInLowerCase);
// console.log(planets);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// for (const student of students) {
//     console.log(`${student.name}:${student.score}`);
// }
// const names = students.map(student => student.name);

// console.log(names);

// const values = students.map(value => value.score);

// console.log(values);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

// console.log(titles);

//=============flatMap()
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);

// console.log(mappedCourses);

// const flattenedCourses = students.flatMap(student => student.courses);

// console.log(flattenedCourses);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres);


//==================filter()


// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
//  console.log(negativeValues);
 
// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);

// console.log(values);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);

// const average = students.filter(student => student.score >= LOW_SCORE && student.score < HIGH_SCORE);
// console.log(average);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return  users.filter(user => user.eyeColor === color );
// }

// console.log(getUsersWithEyeColor(users, "green"));


//=====================find()

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const color = colorPickerOptions.find((option) => option.label === "blue");
// console.log(color);
// console.log(colorPickerOptions);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "elmahead@omatom.com"));



//=========================every,some,reduce

// const products = [
//   { name: "apple", quantity: 2 },
//   { name: "orange", quantity: 5 },
//   { name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);

// console.log(hasEveryProduct);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, player) => {
//     return previousValue + player;
// },0);
// console.log(totalPlayTime);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(totalScore);

// console.log(Math.round(averageScore));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const acc = 0;
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names);

// const names = students.toSorted((a, b) => a.score - b.score).map(student => student.name);
// console.log(names);

// const uniqueSortedCourses = students
//     .flatMap(student => student.courses)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .toSorted((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(value => value.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .toSorted((a, b) => a.localeCompare(b));
// console.log(names);















