document.getElementById('submitBtn').onclick = function () {
    const name = document.getElementById('nameInput').value;
    const msg = document.getElementById('feedback');
    msg.classList.remove('d-none', 'alert-danger', 'alert-success');

    if (name.trim() === "") {
        msg.textContent = "Error: Please enter a name!";
        msg.classList.add('alert-danger');
    } else {
        msg.textContent = "Success! Welcome, " + name;
        msg.classList.add('alert-success');
    }
};