document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get stored username and password from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if entered username and password match the stored ones
    if (username === storedUsername && password === storedPassword) {
        // Set the logged-in status
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedInUser", username);

        // Redirect to home page
        window.location.href = "home.html";  // Ensure home.html is your home page
    } else {
        alert("Invalid username or password");
    }
});
