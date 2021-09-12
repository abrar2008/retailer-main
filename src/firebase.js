import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoBpJuQLNIfFi4w1m1q7sFSOgsDKEC5gE",
  authDomain: "ibuy-retailer.firebaseapp.com",
  projectId: "ibuy-retailer",
  storageBucket: "ibuy-retailer.appspot.com",
  messagingSenderId: "1018474678157",
  appId: "1:1018474678157:web:f2a73a99ba15bd9ba9dfc4",
  measurementId: "G-4FFCNVLP09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;