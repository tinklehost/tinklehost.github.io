if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAHe1eggtTcOrE84F5oZxiZPnqk-p3B88I",
  "authDomain": "io-pinball.firebaseapp.com",
  "databaseURL": "",
  "messagingSenderId": "957913202562",
  "projectId": "io-pinball",
  "storageBucket": "io-pinball.appspot.com"
});