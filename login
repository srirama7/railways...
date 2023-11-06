// Example user data (in a real application, this should come from a database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
];

// Handle login form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check credentials against the list of users
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Authentication successful
        res.send('Login successful!'); // You can redirect the user to a dashboard page or provide an access token here.
    } else {
        // Authentication failed
        res.send('Login failed. Please check your credentials.');
    }
});
