//---------------3

/**
 *  Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 26;
//  let time;
// if (minutes > 0) {
//     time = `${hours}г. ${minutes}хв.`;
// } else {
//     time = `${hours}г.`;
// };

//  console.log(time);


/**
 *  Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
// let canConnect;
// if (sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

// console.log("canConnect", canConnect);

// const sub = "pro";

// const res1 = sub === "pro";
// const res2 = sub === "vip";

// console.log(res1 || res2);

/**
 *  Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

// const isOnlaine = true;
// const isFriend = true;
// const isDnD = true;
//                     true   &&   true   && false
// const canOpenChat = isOnlaine && isFriend && !isDnD;

// console.log("canOpenChat", canOpenChat)


//------------------------------------4

/**
 *  * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, 
 * але тільки якщо число кратне 5.
 */

// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++){
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// const str = "Alise";

// for (let i = 0; i < str.length; i += 1){
//     if (str[i] === 'i') {
        // break;
//     }
//     console.log(i, str[i]);
// }

// let a = 10;
//const b = a++;  b = a; a += 1;
// const b = a--; // b = a, a -= 1;

// console.log("a", a);
// console.log("b", b);

//--------------------while

// console.log("before");

// let counter = 0;
//      1 < 3
// while (counter < 3) {
//     console.log(counter);
//     counter += 1;
// }

// console.log("after");


// let counter = 0;

// do {
//     console.log(counter);
//     counter++;
// } while (counter < 3)

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;
// let total = 0;
 
// for (let i = min; i <= max; i++){
//     if (i % 2 === 0) {
//         total += i;
//     }
// }
// console.log(total);
// for (let i = min; i <= max; i++){
//     if(i % 2 !== 0){
        //console.log(i);
//         continue;
//     }
//     console.log("lalala", i);
// }


//-------------------------5

// const friends = ["Rachel", "Fibi", "Rasel", "Joe"];

// for (let i = 0; i < friends.length; i++){
//     console.log(i, friends[i]);
// }
//без індекса
// for (const arr of friends) {
//     console.log(arr);
// }

/**
 * * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = "8 10";

// const arr = values.split(" ");
//             index 8   index 10
// const result = arr[0] * arr[1];

// const result = (+arr[0] + +arr[1]) * 2;
// const result1 = (Number(arr[0]) + Number(arr[1])) * 2;


// console.log(result, result1);

/**
 *  Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (i = 0; i < fruits.length; i++){
//     console.log(`${i + 1}:${fruits[i]}`);
// }

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 15, 16, 24];

// let total = 0;

// for (const num of numbers) {
//     if (!(num % 2)) {
//         total += num;
//     }
// }
// console.log(total);

// for (const num of numbers) {
//     if (num % 2) {
//         continue;
//     }
//     total += num;
// }
// console.log(total);

/**
 * * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */


// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i++){
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/**
 *  Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "    Welcome to the    future    ";
// const arr = string.trim().split(" ");
// const result = arr.slice(1, arr.length - 1).join(" ").trim();
// console.log(result);


/**
 *  Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const numbers = [2, 17, 9, 94, 5, 1];
// let min;

// for (let i = 0; i < numbers.length; i++){
//     if (i === 0) {
//        min = numbers[i];
//     } else if(numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min);


//--------------------------------------6


// function fillArray(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i += 2){
//         return arr.push(i);
//     }
// }
// console.log(fillArray(2, 10));


/**
 * * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */
// function logItems(item) {
//     for (let i = 0; i < item.length; i++){
//         console.log(`${i + 1} - ${item[i]}`);
//     }
// }

// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4]);

/**
 *  * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");
//     for (let i = 0; i < namesArr.length; i++){
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`)};
// }


// printInfo(    "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
// );
// printInfo("Alise,Yura,Petya", "101,102,103");


/**
 *  Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const doubleHours = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0);
//     return `${doubleHours}:${doubleMinutes}`;
// }

// console.log(formatTime(70))
//  console.log(formatTime(460))
//  console.log(formatTime(1441))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function foo(arr, count) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += count){
//         const numbers = arr.slice(i, i + count);
//         res.push(numbers);
//     }
//     return res;
// }
// console.log(foo(arr, 4));