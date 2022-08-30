// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCF1xRTFon5QqiIf9uSgmVn31Lac9rkswE',
  authDomain: 'nekomimiwasure-fc02e.firebaseapp.com',
  projectId: 'nekomimiwasure-fc02e',
  storageBucket: 'nekomimiwasure-fc02e.appspot.com',
  messagingSenderId: '220843862385',
  appId: '1:220843862385:web:9212f55d798a75112baed0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
