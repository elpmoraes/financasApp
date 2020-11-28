import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


  let firebaseConfig = {
    apiKey: 'AIzaSyDrKEbLrbWjB5Eox42i3lDJuy_Yy2VLSjE',
    authDomain: 'financasapp-b1f66.firebaseapp.com',
    databaseURL: 'https://financasapp-b1f66.firebaseio.com',
    projectId: 'financasapp-b1f66',
    storageBucket: 'financasapp-b1f66.appspot.com',
    messagingSenderId: '783833850499',
    appId: '1:783833850499:web:d542ace91c455a11b631b6',
  };

if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
  }

export default firebaseConnection;