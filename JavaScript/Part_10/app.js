let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
btn.addEventListener("click", function () {
    let id = setInterval(() => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        let color = (`rgb(${R}, ${G}, ${B})`)
        h1.innerHTML = color;
        div.style.backgroundColor = color;
        console.log("hi");

    }, 1000);

    setTimeout(() => {
        clearInterval(id);
        h1.innerHTML = "Generate a random color";
        div.style.backgroundColor = (`rgb(255,255,255)`);
        console.log("bye");
    }, 5000);
});