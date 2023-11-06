// main.js

// Initialize Google Sign-In
gapi.load('auth2', function () {
  gapi.auth2.init({
    client_id: 'YOUR_CLIENT_ID', // Replace with your Google OAuth client ID
  });
});

// Function to handle Google Sign-In
function handleSignInClick() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then(function (googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    // Use the idToken to sign in with Firebase
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
    return firebase.auth().signInWithCredential(credential);
  }).then(function (user) {
    // User is signed in, you can do something with the user object here
  }).catch(function (error) {
    console.error(error);
  });
}
