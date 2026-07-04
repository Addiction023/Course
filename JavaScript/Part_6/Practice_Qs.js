function poem() {
  console.log(" Twinkle twinkle, little star");
  console.log(" How i wonder, what you are");
}

poem();

function dice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

dice();

function average(a, b, c) {
  console.log((a + b + c) / 3);
}

average(2, 3, 4);

function multiTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

multiTable(5);

function sum(n) {
  s = 0;
  for (i = 1; i <= n; i++) {
    s += i;
  }
  return console.log(s);
}

sum(10);

function concat(arr) {
  let s = "";
  for (i = 0; i < arr.length; i++) {
    s += arr[i] + " ";
  }
  return s;
}

arr = ["atul", "durga", "chandra"];
console.log(concat(arr));

let greet = "Hello";

function greetmeet() {
  let greet = "Namste";
  console.log(greet);

  function innergreet() {
    console.log(greet);
  }
  innergreet();
}

console.log(greet);
greetmeet();
