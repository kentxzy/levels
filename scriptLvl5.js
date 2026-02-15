let coins = 0;
const display = document.getElementById('coinCount');

document.getElementById('plusBtn').onclick = () => {
    coins++;
    display.textContent = coins;
};

document.getElementById('minusBtn').onclick = () => {
    if (coins > 0) {
        coins--;
        display.textContent = coins;
    }
};