
// Red paragraph
let para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.classList.add("red");
document.body.prepend(para);

// Blue h3
let heading3 = document.createElement("h3");
heading3.innerText = "I'm a blue h3!";
heading3.classList.add("blue");
document.body.prepend(heading3);

// Div with h1 and p
let div = document.createElement("div");
div.classList.add("div");

let divHeading = document.createElement("h1");
divHeading.innerText = "I'm in a div";

let divPara = document.createElement("p");
divPara.innerText = "ME TOO!";

div.append(divHeading);
div.append(divPara);
document.body.prepend(div);

// Input and Button
let input = document.createElement("input");
let button = document.createElement("button");

input.placeholder = "username";
button.innerText = "click me";
button.id = "btn";

document.body.prepend(input, button);

// Style button
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Purple underlined h1
let heading1 = document.createElement("h1");
heading1.innerText = "DOM Practice";
heading1.innerHTML = `<u>${heading1.innerText}</u>`;
heading1.style.color = "purple";

document.body.prepend(heading1);

// Paragraph with bold text
let paragraph = document.createElement("p");
paragraph.innerHTML = "Apna College <b>Sigma</b> Practice";

document.body.prepend(paragraph);