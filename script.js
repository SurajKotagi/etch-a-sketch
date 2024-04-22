let pad = document.getElementById("pad");
let penColor = "black";
function small() {
    for (let i = 0; i < 100 * 100; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = "3.9px";
        pixel.style.height = "3.9px";

        pixel.addEventListener("mouseover", function () {
            if (!rainbowActive) pixel.style.background = penColor;
            else {
                pixel.style.background = generateRandomColor();
            }
        });
        pad.appendChild(pixel);
    }
}
function medium() {
    for (let i = 0; i < 57 * 57; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = "7.9px";
        pixel.style.height = "7.9px";

        pixel.addEventListener("mouseover", function () {
            if (!rainbowActive) pixel.style.background = penColor;
            else {
                pixel.style.background = generateRandomColor();
            }
        });
        pad.appendChild(pixel);
    }
}
function large() {
    for (let i = 0; i < 51 * 51; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = "9px";
        pixel.style.height = "9px";

        pixel.addEventListener("mouseover", function () {
            if (!rainbowActive) pixel.style.background = penColor;
            else {
                pixel.style.background = generateRandomColor();
            }
        });
        pad.appendChild(pixel);
    }
}
let typeOfPad = "small";
medium();
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
        pixels[i].style.background = "white";
    }
});

let colorPicker = document.getElementsByTagName("input");
colorPicker[0].addEventListener("change", function () {
    penColor = colorPicker[0].value;
});

let eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", function () {
    penColor = "white";
    rainbowActive = false;
});

let rainbowBtn = document.getElementById("rainbow");
let rainbowActive = false;
rainbowBtn.addEventListener("click", function () {
    rainbowActive = !rainbowActive;
});

let smallBtn = document.getElementById("small");
let mediumBtn = document.getElementById("medium");
let largeBtn = document.getElementById("large");

function removeAll() {
    let childDivs = pad.getElementsByTagName("div");
    pad.innerHTML = "";
}
smallBtn.addEventListener("click", function () {
    removeAll();
    small();
});
mediumBtn.addEventListener("click", function () {
    removeAll();
    medium();
});
largeBtn.addEventListener("click", function () {
    removeAll();
    large();
});
