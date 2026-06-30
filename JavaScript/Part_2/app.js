let num = 100;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

let name = prompt("Name:")
let age = prompt("Age:")
console.log(`${name} is ${age} years old.`)
console.warn(`${name} is ${age} years old.`)
console.error(`${name} is ${age} years old.`)
alert(`${name} is ${age} years old.`)

let quarter = 3;
switch (quarter) {
  case 1:
    console.log(`January february march`);
    break;
  case 2:
    console.log(`April May June`);
    break;
  case 3:
    console.log(`July August September`);
    break;
  case 4:
    console.log(`October November December`);
    break;
  default:
    console.log(`Invalid NO.`);
}

let str = `atuldurga`;
if (str[0] == "A" || (str[0] == "a" && str.length > 5)) {
  console.log(`Golden string`);
} else {
  console.log(`Not golden string`);
}

let a = 2;
let b = 3;
let c = 4;

if (a > b) {
  if (a > c) {
    console.log(`Largest is ${a}.`);
  } else {
    console.log(`Largest is ${c}.`);
  }
} else {
  if (b > c) {
    console.log(`Largest is ${b}.`);
  } else {
    console.log(`Largest is ${c}.`);
  }
}

if (a > b && a > c) {
  console.log(`Largest is ${a}.`);
} else {
  if (b > c) {
    console.log(`Largest is ${b}.`);
  } else {
    console.log(`Largest is ${c}.`);
  }
}

let num = 4782;
let num2 = 32;
if (num % 10 == num2 % 10) {
  console.log(`Same last digit`);
} else {
  console.log(` Not same last digit`);
}
