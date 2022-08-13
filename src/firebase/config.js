import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB72BhEmO5_N0jgLxf3otVkB6Uwo7wFUV0",
    authDomain: "job-listings-73afe.firebaseapp.com",
    projectId: "job-listings-73afe",
    storageBucket: "job-listings-73afe.appspot.com",
    messagingSenderId: "909600530190",
    appId: "1:909600530190:web:7f0eae6e0c350346ac415f"
  };
  
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };