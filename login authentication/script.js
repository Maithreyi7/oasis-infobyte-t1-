document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match a predefined set
    if (username === "admin" && password === "password") {
        // If match, redirect to dashboard or perform other actions
        window.location.href = "dashboard.html";
    } else {
        // If not match, display error message
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
});