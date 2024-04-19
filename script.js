let pad = document.getElementById("pad");
let penColor = "white";
for (let i = 0; i < 100 * 100; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = "5.5px";
    pixel.style.height = "5.5px";

    pixel.addEventListener("mouseover", function () {
        if (!rainbowActive) pixel.style.background = penColor;
        else {
            pixel.style.background = generateRandomColor();
        }
    });
    pad.appendChild(pixel);
}
function generateRandomColor() {
    let maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}
let newBtn = document.getElementById("new");
newBtn.addEventListener("click", function () {
    let pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.background = "black";
    }
});

let colorPicker = document.getElementsByTagName("input");
colorPicker[0].addEventListener("change", function () {
    penColor = colorPicker[0].value;
});

let eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", function () {
    penColor = "black";
    rainbowActive = false;
});

let rainbowBtn = document.getElementById("rainbow");
let rainbowActive = false;
rainbowBtn.addEventListener("click", function () {
    rainbowActive = !rainbowActive;
});
