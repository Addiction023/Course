let btn = document.querySelector("button"); // Select button
let h1 = document.querySelector("h1"); // Select heading
let div = document.querySelector("div"); // Select div

let running = false; // Prevent multiple intervals

window.addEventListener("load", () => {
    if (running) return; // Exit if already running

    running = true; // Mark as running

    // Change color every 1 second
    let id = setInterval(() => {
        // Generate random RGB values
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);

        // Create RGB color string
        let color = `rgb(${R}, ${G}, ${B})`;

        h1.textContent = color; // Show color code
        div.style.backgroundColor = color; // Apply background color

        console.log("hi");
    }, 1000);

    // Stop after 5 seconds
    setTimeout(() => {
        clearInterval(id); // Stop interval

        h1.textContent = "Generate a random color"; // Reset heading
        div.style.backgroundColor = "white"; // Reset background

        running = false; // Allow running again

        console.log("bye");
    }, 5000);
});

let image = document.querySelector("img"); // Select image

// Change image randomly on button click
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 2) + 1;
    image.src = `${random}.jpg`;
});

// Change button text color
btn.addEventListener("click", () => {
    btn.style.color = "green";
});

let input = document.querySelector("input"); // Select input
let h2 = document.querySelector("h2"); // Select h2

// Allow only letters and spaces
input.addEventListener("input", () => {
    input.value = input.value.replace(/[^a-zA-Z ]/g, "");
    h2.textContent = input.value || "=> text-area <="; // Show default text if empty
});