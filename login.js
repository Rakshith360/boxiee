
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the fields
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
    } else {
        // Proceed with login (this could be an API call)
        alert('Login successful! Redirecting...');
        window.location.href = 'profile.html'; // Redirect to profile page (for example)
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the fields
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
    } else {
        // Proceed with login (this could be an API call)
        alert('Login successful! Redirecting...');
        window.location.href = 'profile.html'; // Redirect to profile page (for example)
    }
});
 
