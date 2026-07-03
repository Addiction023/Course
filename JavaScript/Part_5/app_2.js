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