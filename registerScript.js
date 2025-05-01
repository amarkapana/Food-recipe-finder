document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (username && password) {
        // Save credentials in localStorage (for demo purposes only)
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Registration successful! Redirecting to login...");

        // ✅ Redirect to login page using relative path
        window.location.href = "./index.html";
    } else {
        alert("Please enter both username and password.");
    }
});
