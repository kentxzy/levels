let level = 1;

function levelUp() {
    if (level < 6) {
        level++;
        document.getElementById('levelNumber').textContent = level;
        let el = document.getElementById('levelNumber');
        let currentNumber = parseInt(el.textContent);
        updateBadge(level);
    } else {
        alert("Reached the maximum level!");
    }
}
function updateBadge(lvl) {
    const badge = document.getElementById('levelBadge');

    if (lvl === 6) {
            badge.classList.replace('bg-primary', 'bg-warning');
            badge.classList.add('text-dark');
            badge.textContent = "MAX LEVEL";
        }
}
