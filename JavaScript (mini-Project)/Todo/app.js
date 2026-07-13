let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    if (inp.value.trim() !== "") {
        let item = document.createElement("li");
        item.innerText = inp.value.trim().toLowerCase();
        ul.appendChild(item);
        inp.value = "";
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        event.target.remove();
    }
});