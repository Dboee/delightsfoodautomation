import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyB-7HhGT0V2tQ9Hqqnb8g73qKL8Z7k8Rw8",
  authDomain: "delight-s-diet-automation.firebaseapp.com",
  databaseURL: "https://delight-s-diet-automation.firebaseio.com",
  projectId: "delight-s-diet-automation",
  storageBucket: "delight-s-diet-automation.appspot.com",
  messagingSenderId: "821995360611",
  appId: "1:821995360611:web:be64e353ddd56c4d540356",
  measurementId: "G-PBPT933E2P",
};
firebase.initializeApp(config);

export default firebase;