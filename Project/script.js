// Function to show the login form
function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
}

// Function to show the signup form
function showSignup() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
}

// Handle login form submission
document.getElementById('login')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful!');
        // Redirect to dashboard or perform login logic
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill out all fields.");
    }
});

// Handle signup form submission
document.getElementById('signup')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const dob = document.getElementById('dob').value;

    if (name && email && password && confirmPassword && dob) {
        if (password === confirmPassword) {
            alert(`Welcome, ${name}! Your account has been created.`);
            // Redirect to profile setup page
            window.location.href = "profile.html";
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please fill out all fields.");
    }
});

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Default center
        zoom: 8 // Default zoom level
    });

    // Add a marker (optional)
    new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: "Hello World!"
    });
}