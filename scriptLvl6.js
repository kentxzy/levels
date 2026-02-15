const winningDoor = 2;
const resultDiv = document.getElementById('doorResult');
const buttons = document.querySelectorAll('.door-btn');

buttons.forEach(btn => {
    btn.onclick = function () {
        const choice = parseInt(this.getAttribute('data-door'));
        resultDiv.classList.remove('text-success', 'text-danger');

        if (choice === winningDoor) {
            resultDiv.textContent = "Correct! You found the prize! ";
            resultDiv.classList.add('text-success', 'fw-bold');
        } else {
            resultDiv.textContent = "Wrong door! Try again. ";
            resultDiv.classList.add('text-danger');
        }
    };
});