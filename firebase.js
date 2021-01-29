// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAnF8bKKIsKYAARanT9XwgfDHX_o-83HsI",
    authDomain: "signal-clone-8babd.firebaseapp.com",
    projectId: "signal-clone-8babd",
    storageBucket: "signal-clone-8babd.appspot.com",
    messagingSenderId: "1054314238980",
    appId: "1:1054314238980:web:4028fa96d8415a61539151",
    measurementId: "G-9B2XQ9E9NR"
  };

  let app;
  if(firebase.apps.length=== 0)
  {
    app=firebase.initializeApp(firebaseConfig)
  }
  else{
   app=firebase.app();
  }

  const db=app.firestore();
  const auth= firebase.auth();

  export {db,auth};