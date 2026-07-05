// function poem() {
//   console.log(" Twinkle twinkle, little star");
//   console.log(" How i wonder, what you are");
// }

// poem();

// function dice() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// dice();

// function average(a, b, c) {
//   console.log((a + b + c) / 3);
// }

// average(2, 3, 4);

// function multiTable(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }

// multiTable(5);

// function sum(n) {
//   s = 0;
//   for (i = 1; i <= n; i++) {
//     s += i;
//   }
//   return console.log(s);
// }

// sum(10);

// function concat(arr) {
//   let s = "";
//   for (i = 0; i < arr.length; i++) {
//     s += arr[i] + " ";
//   }
//   return s;
// }

// arr = ["atul", "durga", "chandra"];
// console.log(concat(arr));

// let greet = "Hello";

// function greetmeet() {
//   let greet = "Namste";
//   console.log(greet);

//   function innergreet() {
//     console.log(greet);
//   }
//   innergreet();
// }

// console.log(greet);
// greetmeet();

// let newarr = [];
// let oldarr = [26, 27, 4, 7, 2];
// let num = 5;

// function Elements(abc) {
//   for (i = 0; i < abc.length; i++) {
//     if (abc[i] > num) {
//       newarr.push(abc[i]);
//     }
//   }
//   return newarr;
// }

// console.log(Elements(oldarr));

// str = "abcdabcdefgggh";
// ans = "";
// function unique(durga) {
//   for (i = 0; i < durga.length; i++) {
//     if (ans.includes(durga[i]) == false) {
//       ans += durga[i];

//     }
//   }
//   console.log(ans);
// }
// unique(str);

// country = ["Australia", "United States of America", "Germany"];
// function longcontry(list) {
//   return console.log(country[country.sort().length - 1]);
// }

// longcontry(country);

// str = "atuldurga";
//   count = 0;
// function vowels(argu) {
//   for (i = 0; i < argu.length; i++) {
//     if (
//       argu[i] == "a" ||
//       argu[i] == "e" ||
//       argu[i] == "i" ||
//       argu[i] == "o" ||
//       argu[i] == "u"
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(vowels(str));

// let START = 50;
// let END = 100;

// function genran(START, END) {
//   let diff = END - START;
//   return console.log(Math.floor(Math.random() * diff) + START);
// }

// genran(START, END);
