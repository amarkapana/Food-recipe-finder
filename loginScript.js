document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check credentials
    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedInUser', username);  // Save login state
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again. DO you have an account ? Please register');
    }
});
