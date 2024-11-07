document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.querySelector('.login-container');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'your_username' && password === 'your_password') {
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Login successful!';
            loginContainer.style.backgroundColor = 'rgba(0, 255, 0, 0.6)';
        } else {
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Invalid username or password. Please try again.';
            loginContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        }
    });

    document.getElementById('username').addEventListener('input', function() {
        loginContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    });

    document.getElementById('password').addEventListener('input', function() {
        loginContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    });
});
