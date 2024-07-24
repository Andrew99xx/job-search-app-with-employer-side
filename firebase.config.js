// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVj1sL7ftuiv-KFSdLdbU4xGj0NSgyqYM",
    authDomain: "adzigital-intern.firebaseapp.com",
    projectId: "adzigital-intern",
    storageBucket: "adzigital-intern.appspot.com",
    messagingSenderId: "850208566922",
    appId: "1:850208566922:web:10029800fd3e3eded74773"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
