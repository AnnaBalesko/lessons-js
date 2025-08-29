// =========================створення об'єкта

// const playlist = {
//     name: "My playlist",
//     rating: 4,
//     isFavorite: true,
//     tracks: ["track-1", "track-2"],
// };

// console.log(playlist);

// const key = "rating";
//            playlist["rating"]
// console.log(playlist[key]);

// const lalala = prompt();

// console.log(playlist[lalala]);

// playlist.rating = 5;
// playlist.name = "Lalala";

// playlist.user = "Alice";

// console.log(playlist.name);

// let user = "Petya";

// user = "Alice";

// console.log(user);

// ==========================вкладені властивості

// const obj = {
//     name: "Alice",
//     age: 20,
//     skills: {
//         html: true,
//         css: false,
//         js: true,
//     }
// }
// // const obj2 = obj.skills;
// console.log(obj.skills.css);

// =========================== масиви це специфічні об'єкти
// const arr = [1, 2, 3];
// arr.lalala = "tototo"
// console.log(arr);
// function foo() {
//     console.log("hello");
// }

// foo.lalala = "tototo";

// console.dir(foo);

// ========================== копіювання складних об'єктів за посиланням
// let a = {x: 1, y: 2}; //  http://my-pc/obj/1
// let b = a; // b = http://my-pc/obj/1

// a.x = 10;



// console.log("a", a); //  http://my-pc/obj/1
// console.log("b", b); //  http://my-pc/obj/1

// ============================ короткі і обчислювальні властивості

// const username = "Alice";
// const age = 20;

// const obj = {
//     username,
//     age,
// }

// console.log(obj);
// function foo(username, email) {
//     return {
//         username,
//         email,
//     }
    
// }
// console.log(foo("Petya", "petya@emaile.com"));


// const inputName = "color";

// const obj = {
// [inputName]: "red"
// }
// console.log(obj);

// function foo(key, value) {
//     return {
//         [key]: value
//     }
// }
// console.log(foo("name", "Alice"));
// console.log(foo("age", 30));


//===========================цикл for...in
// const feedback = {
//     good: 5,
//     neutral: 7,
//     bad: 5
// }
// let total = 0;

// for (const key in feedback){
//     console.log(key, feedback[key]);
//     total += feedback[key]
// }
// console.log(total);
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     console.log(feedback[key]);
//     total += feedback[key];
// }
// console.log(total);


//=============================
// const values = Object.values(feedback);

// for (const value of values) {
//     total += value;
// }
// console.log(total);

//========================задачі

const user = {
    name: "Alice",
    age: 20,
    hobby: "js",
    premium: true,
}
const user2 = {
    name: "Yura",
    age: 30,
    hobby: "js",
    premium: true,
}

// user.mood = "happy";
// user.hobby = "skyidiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//      console.log(
//       `${key}:${user[key]}`);
     
//  }
 
// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skyidiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);

//     for (const key of keys) {
//       console.log(`${key}:${obj[key]}`);
//     }
// }

// foo(user);
// foo(user2);


// const salaries = {
//     alice: 130,
//     petya: 100,
//     yura: 160
// }

// function summa(obj) {
//     let sum = 0;
//     const values = Object.values(obj);
//     for (const value of values) {
//         sum += value;
//     }
//     return sum;
    
// }
// console.log(summa(salaries));
