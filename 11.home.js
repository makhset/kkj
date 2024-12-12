
const box = document.getElementById("box");
const greenButton = document.getElementById("greenButton");
const widenButton = document.getElementById("widenButton");
const heightenButton = document.getElementById("heightenButton");

greenButton.addEventListener("click", () => {
    box.style.backgroundColor = "green";
});

widenButton.addEventListener("click", () => {
    const currentWidth = parseInt(window.getComputedStyle(box).width);
    box.style.width = currentWidth + 20 + "px";
});

heightenButton.addEventListener("click", () => {
    const currentHeight = parseInt(window.getComputedStyle(box).height);
    box.style.height = currentHeight + 20 + "px";
});

box.addEventListener("mouseenter", () => {
    box.textContent = "Сіздің тышқаныңыз қораптың ішінде!";
});

box.addEventListener("mouseleave", () => {
    box.textContent = "Сіздің тышқаныңыз қораптан шығып кетті!";
});