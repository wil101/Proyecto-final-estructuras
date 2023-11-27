import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK5CzBHnADC4m101GRgIuVUF2C96ReXv4",
  authDomain: "cafe-bar-colibri.firebaseapp.com",
  databaseURL: "https://cafe-bar-colibri-default-rtdb.firebaseio.com",
  projectId: "cafe-bar-colibri",
  storageBucket: "cafe-bar-colibri.appspot.com",
  messagingSenderId: "7109519246",
  appId: "1:7109519246:web:4ebc1e12243843ca00a6df"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Inicializar Cloud Firestore y obtener una referencia al servicio
//const firestore = firebase.firestore();
//const authentication = firebase.auth();


export const db = firebase.firestore();
export const auth = firebase.auth();