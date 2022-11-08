import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTD-9q8C1T7jvogha3mK_RAwVHfutMtRQ",
  authDomain: "babyshowerro.firebaseapp.com",
  projectId: "babyshowerro",
  storageBucket: "babyshowerro.appspot.com",
  messagingSenderId: "534997859965",
  appId: "1:534997859965:web:9af65f23c72b5d53b93b14"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//variables to acces database collection
const db = firestore.collection("formData")
;

//Get submit form
let submitButton = document.getElementById("submit")

//Create Event Listener To allow form submision
submitButton.addEventListener('click', (e) =>{
    //Prevent Default form Submission Behavior
    e.preventDefault()

    //Get form values
    let name = document.getElementById('name').value
    let numero = document.getElementById('numero').value

    //Save form data to firebase
    db.doc().set({
        name: name,
        numero: numero
    }).then(() => {
        console.log('Data saved')
    }).catch((error) => {
        console.log(error)
    })
})

