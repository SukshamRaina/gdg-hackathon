document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            btn.classList.add('active');
            document.getElementById(`${btn.dataset.tab}-form`).classList.add('active');
        });
    });

    // Password Toggle
    const toggleBtns = document.querySelectorAll('.password-toggle');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                btn.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });
});

function validateLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
        window.location.href = 'profile.html';
    }
    return false;
}

function validateSignup(event) {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    if (fullname && email && password && confirmPassword) {
        window.location.href = 'profile.html';
    }
    return false;
} 