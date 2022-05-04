import firebase from 'firebase' 

const config = {
  apiKey: "AIzaSyCqb9JtEUBnWIs8rDRFftpACJN_E1bhAx0",
  authDomain: "buildingblox-9bf9e.firebaseapp.com",
  projectId: "buildingblox-9bf9e",
  storageBucket: "buildingblox-9bf9e.appspot.com",
  messagingSenderId: "797290442147",
  appId: "1:797290442147:web:a918cccb4d4690b840fe16",
  measurementId: "G-4MPLMG6VMC"
};

const app = firebase.initializeApp(config)
export const db = firebase.firestore()


