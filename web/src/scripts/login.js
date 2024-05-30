const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error');

function login(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    const data = {
        username,
        password
    }
    sendRequest(`/login`, 'POST', data, (_, status) => {
        if (status !== 200) {
            errorDiv.style.display = 'block';
            return;
        }
        errorDiv.style.display = 'none';
        window.location = '/';
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", login)
}
