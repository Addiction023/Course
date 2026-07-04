const maxnub = prompt("Give me max number:");
const gussnum = Math.floor(Math.random() * maxnub) + 1;
let count = 0;
while (count < 3) {
  let usernum = prompt(`guess a R.G.N b/w 1 to ${maxnub}`);
  if (usernum == gussnum) {
    console.log(`you guess the correct no.`);
    break;
  } else {
    count++;
  }
}
if (count == 3) {
  console.log("Sucks to be you, hahahaah !!!");
  console.log(`Gussnum was ${gussnum}`);
}
let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

const CAR = {
  name: "jaguar",
  model: "SUV_beast",
  color: "steel_blue",
};

console.log(CAR.name);
console.log(CAR["name"]);

const Person = {
  Name: "Atul_Patel",
  Age: 27,
  City: "Lucknow"
};

console.log(Person);

Person.City = "New York";
Person.Country = "United States";

console.log(Person);