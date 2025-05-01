document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Here we assume that you already have a registration process that stores the username and password
    const storedUsername = localStorage.getItem("username");  // The username stored during registration
    const storedPassword = localStorage.getItem("password");  // The password stored during registration

    // Check if the entered username and password match the stored ones
    if (username === storedUsername && password === storedPassword) {
        // Mark user as logged in
        localStorage.setItem("loggedIn", "true");
        
        // Optionally store the username of the logged-in user to access later
        localStorage.setItem("loggedInUser", username);

        // Redirect to home page (index.html)
        window.location.href = "./index.html";
    } else {
        alert("Invalid username or password");
    }
});
