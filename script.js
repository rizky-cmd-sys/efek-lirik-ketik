const potonganLirik = [
    "All because my head is full of poison",
    "And my heart is full of doubt",
    "I got toxins in my bloodstream ",
    "You tried so hard to suck out",
    "And it feels like medication",
    "And it's good for me, I'm sure",
    "But it don't matter how \n your love feels anymore",
    "It'll never be the cure",
    "It'll never be the cure",
    "It'll never be" 
];

const wadahLirik = document.getElementById("lirik-container");
const wadahHati = document.getElementById("hearts-container");

let baitIndex = 0;
let hurufIndex = 0;
const kecepatanKetik = 150;
const jedaGantiBait = 1500;

function ketikLirik() {
    if (baitIndex < potonganLirik.length) {
        let baitSekarang = potonganLirik[baitIndex];

        if (hurufIndex < baitSekarang.length) {
            if (baitSekarang.charAt(hurufIndex) === '\n') {
                wadahLirik.innerHTML += '';
} else {
wadahLirik.innerHTML += baitSekarang.charAt(hurufIndex);
}
hurufIndex++;
setTimeout(ketikLirik, kecepatanKetik);
} else {
baitIndex++;
hurufIndex = 0;

        if (baitIndex < potonganLirik.length) {
            setTimeout(() => {
                wadahLirik.innerHTML = ""; 
                ketikLirik();
            }, jedaGantiBait);
        } else {
            triggerLoveShower();
        }
    }
}
}

function triggerLoveShower() {
const jumlahHati = 30;

for (let i = 0; i < jumlahHati; i++) {
    const hati = document.createElement("span");
    hati.innerHTML = "❤️";
    hati.classList.add("heart-bounce");

    const randomX = Math.random() * 100;
    const randomY = Math.random() * 80;
    const randomDelay = Math.random() * 1.5;

    hati.style.left = `${randomX}%`;
    hati.style.top = `${randomY}%`;
    hati.style.animationDelay = `${randomDelay}s`;

    wadahHati.appendChild(hati);
}
}

window.onload = function() {
ketikLirik();
};