document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Add your validation logic here
    if (username === 'admin' && password === 'admin') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }

    // Anime.js animation
    anime({
        targets: '.login-container',
        translateY: [
            { value: -10, duration: 100 },
            { value: 0, duration: 100 }
        ],
        easing: 'easeInOutQuad'
    });
});
