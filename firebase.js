import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAXv2JfpbCV8ZLsKY8yR5Nvb8rhjYPullU",
    authDomain: "mctest-6374a.firebaseapp.com",
    projectId: "mctest-6374a",
    storageBucket: "mctest-6374a.appspot.com",
    messagingSenderId: "898460944776",
    appId: "1:898460944776:web:edd3f954b597a2f1c2123d"
};

let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth};