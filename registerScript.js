document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful. You can now login.");

    // Redirect to login page (index.html)
    window.location.href = "index.html";  
});
