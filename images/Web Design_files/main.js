// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsQecO14ssII9VDVFxgtS9OuWkPHhmbyY",
    authDomain: "resellerclub-f751c.firebaseapp.com",
    databaseURL: "https://resellerclub-f751c.firebaseio.com",
    projectId: "resellerclub-f751c",
    storageBucket: "",
    messagingSenderId: "385375098878",
    appId: "1:385375098878:web:2e97e18e6991dc0f"
};

firebase.initializeApp(config);




//firebase
function contactScript(value) {
    var b = firebase.database().ref("messages");
        $("#contactForm").submit(function(config) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#company").val(),
            x = $("#email").val(),
            y = $("#phone").val(),            
            f = { name: c, email: x, company: d, phone:y};
        return b.push(f).then(function(config) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}


// var db = firebase.firestore();





// var messageRef = firebase.database().ref('messages');




// document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
// let selectedFile;
// handleFileUploadChange(e) {
//   selectedFile = e.target.files[0];
// }




// document.getElementById('contactForm').addEventListener('submit', submitForm);

// function submitForm(e){
//     e.preventDefault();

    // const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
    // uploadTask.on('state_changed', (snapshot) => {
    // // Observe state change events such as progress, pause, and resume
    // }, (error) => {
    // // Handle unsuccessful uploads
    // console.log(error);
    // }, () => {
    // // Do something once upload is complete
    // console.log('success');
    // });



    // var name = getInputval('name');
    // var company = getInputval('company');
    // var email = getInputval('email');
    // var phone = getInputval('phone');

    // saveMessage(name, company, email, phone);

    // // Add a second document with a generated ID.
    // db.collection("users").add({
    //     first: name,
    //     middle: company,
    //     last: email,
    //     born: phone
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }












    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function() {
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000);

    // document.getElementById('contactForm').reset();
    
// }









// function getInputval(id){
//     return document.getElementById(id).value;
// }



// function saveMessage(name, company, email, phone){
//     var newMessageRef = messageRef.push();
//     newMessageRef.set({
//         name:name,
//         company:company,
//         email:email,
//         phone:phone
//     });
// }