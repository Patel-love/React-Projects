import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAKU_JOeJVaDLZ1KoH313d-wQoEoghcWO0",
    authDomain: "mybook-app-9cbc7.firebaseapp.com",
    projectId: "mybook-app-9cbc7",
    storageBucket: "mybook-app-9cbc7.appspot.com",
    messagingSenderId: "830337891990",
    appId: "1:830337891990:web:f53451ad7adeb6d43d4cb7",
    databaseURL:"https://mybook-app-9cbc7-default-rtdb.firebaseio.com"
  };


export const app = initializeApp(firebaseConfig);

export default app
