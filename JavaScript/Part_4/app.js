let todo = [];
let req;

while (true) {
  req = prompt("Enter your request:");

  if (req === null) {
    console.log("Input cancelled. Exiting the app.");

    break;
  }

  req = req.trim().toLowerCase();

  if (req === "quit") {
    console.log("Quitting App");

    break;
  } else if (req === "list") {
    if (todo.length === 0) {
      console.log("No tasks in the todo list.");
    } else {
      for (let i = 0; i < todo.length; i++) {
        console.log(i, todo[i]);
      }
    }
  } else if (req === "add") {
    const task = prompt("Please add your task:");
    if (task !== null && task.trim() !== "") {
      todo.push(task.trim());
      console.log(`Task Added ${task}`);
    } else {
      console.log("No task added.");
    }
  } else if (req === "delete") {
    const idx = prompt("Please enter the task index to delete:");
    const index = Number(idx);
    if (!Number.isNaN(index) && index >= 0 && index < todo.length) {
      todo.splice(index, 1);
      console.log("Task Deleted");
    } else {
      console.log("Invalid index. No task deleted.");
    }
  } else {
    console.log("Invalid request! Please enter list, add, delete, or quit.");
  }
}

let arr=[1,2,3,4,5,6,2,3];
let num=2;

for (let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i,1);
    }

}
console.log(arr);



let number = 287152;
let count = 0;

nums = String(number);

for (num of nums) {
  count+=num;
}
console.log(count);



let number1 = 287152;
let sum = 0;

nums = String(number1);

for (num of nums) {

  sum += Number(num);
}
console.log(sum);

let n = 0;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(fact);

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i <= arr1.length; i++) {
  if (largest < arr1[i]) {
    largest = arr1[i];
  }
}
console.log(largest);
