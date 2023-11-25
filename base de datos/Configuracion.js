
// See: https://support.google.com/firebase/answer/7015592
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
firebase.initializeApp(firebaseConfig);


// Inicializar Cloud Firestore y obtener una referencia al servicio
var db = firebase.firestore();

// Hacer la referencia a la base de datos globalmente accesible
window.db = db;

