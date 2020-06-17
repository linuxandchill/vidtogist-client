import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDDYDI4JG4KZTTtIWwrTUEL0_i9wPIqQ0M",
  authDomain: "gistfromvid.firebaseapp.com",
  databaseURL: "https://gistfromvid.firebaseio.com",
  projectId: "gistfromvid",
  storageBucket: "gistfromvid.appspot.com",
  messagingSenderId: "911380972179",
  appId: "1:911380972179:web:2d61ca4456001f9c338366",
  measurementId: "G-LTTYY0ZNWX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithGithub = () => auth.signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

export default firebase;
