import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyB7euko_f9SAbEX2hVi012QcMyYaVX3Mno",
    authDomain: "chat-git-ce3cc.firebaseapp.com",
    projectId: "chat-git-ce3cc",
    storageBucket: "chat-git-ce3cc.appspot.com",
    messagingSenderId: "946472432624",
    appId: "1:946472432624:web:969062c8e2e5e262e76335",
    measurementId: "G-57LN32BYEW"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const authy = firebase.auth();

export { db, authy };