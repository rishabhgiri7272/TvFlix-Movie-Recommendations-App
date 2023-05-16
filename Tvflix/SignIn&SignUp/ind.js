const firebaseConfig = {
    apiKey: "AIzaSyBA60A1fta8H3S-xHauPJFA5VpT3JdoWIM",
    authDomain: "newusertvflix.firebaseapp.com",
    databaseURL: "https://newusertvflix-default-rtdb.firebaseio.com",
    projectId: "newusertvflix",
    storageBucket: "newusertvflix.appspot.com",
    messagingSenderId: "641758746602",
    appId: "1:641758746602:web:55c13565edd2e4e53d4493"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var signupFormDB = firebase.database().ref('signupform');
document.getElementById('signup').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getElementVal('full_name');
    var email = getElementVal('emailid');
    var password = getElementVal('password');

    // console.log(name,email,password);
    saveDetails(name,email,password); 
    
    // Enabling alert
    document.querySelector(".alert").style.display = "block";

    // reset form
    document.getElementById('signup').reset();
}

const saveDetails = (name, email, password) =>{
    var newUserForm = signupFormDB.push();

    newUserForm.set({
        name: name,
        emailid: email,
        pwd: password,
    });


};
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

