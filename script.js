function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    var correctPassword = '111551741111193'; // Replace with your actual password

    if (enteredPassword === correctPassword) {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
