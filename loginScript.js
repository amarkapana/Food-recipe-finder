document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        // Mark user as logged in
        localStorage.setItem("loggedIn", "true");

        // Redirect to home page
        window.location.href = "./index.html";
    } else {
        alert("Invalid username or password");
    }
});
