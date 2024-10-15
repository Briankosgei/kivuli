// Show login/register modal on first load
window.onload = () => {
    if (!localStorage.getItem('loggedIn')) {
        document.getElementById('modal').style.display = 'flex';
    }
};

// Toggle between login and register forms
function toggleForms() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('register-form').classList.toggle('hidden');
}

// Mock login function
function login() {
    // Perform input validations (skipped for brevity)
    localStorage.setItem('loggedIn', true);
    closeModal();
}

// Mock register function
function register() {
    // Perform input validations and store user data (skipped for brevity)
    localStorage.setItem('loggedIn', true);
    closeModal();
}

// Close modal and show the main content
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
