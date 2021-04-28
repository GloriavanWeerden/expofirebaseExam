import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCcFbHDvSrhfiyhIO_jkjFHVVuyIU-O_mg",
    authDomain: "finalexam-82022.firebaseapp.com",
    databaseURL:"https://finalexam-82022-default-rtdb.firebaseio.com/",
    projectId: "finalexam-82022",
    storageBucket: "finalexam-82022.appspot.com",
    messagingSenderId: "1070209354294",
    appId: "1:1070209354294:web:4889003a592a87c20fe697",
    measurementId: "G-Z9CRLGVV5E"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };