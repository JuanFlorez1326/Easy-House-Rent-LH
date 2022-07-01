import * as firebase from 'firebase'
import '@firebase/firestore'


const Config = {
  apiKey: "AIzaSyBgksubKlyJiqqAIpMNi5mQJOmvQw940-w",
  authDomain: "easyhouserent.firebaseapp.com",
  projectId: "easyhouserent",
  storageBucket: "easyhouserent.appspot.com",
  messagingSenderId: "502993702484",
  appId: "1:502993702484:web:8892abbfed521fb077e7c1"
};

firebase.initializeApp(Config);

export const db = firebase.firestore()