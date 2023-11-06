document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (username === 'admin' && password === 'password') {
    
    alert('Login not Successfull');
  } else {
    alert('Login Successful');
  }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (username && email && password && confirmPassword) {
    if (password === confirmPassword) {
      alert('Registration Successful');
      document.getElementById('registrationForm').reset();
    } else {
      alert('Passwords do not match');
    }
  } else 
  {
    alert('Please fill in all fields');
  }
});