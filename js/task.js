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




