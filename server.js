const express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Add your authentication logic here (e.g., check credentials)

    // For this example, let's just respond with a success message
    res.send('Login successful!'); 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
