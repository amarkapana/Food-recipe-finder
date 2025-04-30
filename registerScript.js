// registerScript.js

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
    
    // Check if username already exists in local storage
    if (localStorage.getItem(username) !== null) {
        alert('Username already exists. Please choose another one.');
        return;
    }
    
    // Store username and password in local storage
    localStorage.setItem(username, password);
    
    alert('Registration successful!');
    
    // Optionally, redirect to login page after successful registration
    window.location.href = 'login.html';
});
