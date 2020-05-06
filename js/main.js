// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6pBW6iZwg9ZM0ttTxvCRpIEJfeVg9Wh4",
    authDomain: "portfolio-36df0.firebaseapp.com",
    databaseURL: "https://portfolio-36df0.firebaseio.com",
    projectId: "portfolio-36df0",
    storageBucket: "portfolio-36df0.appspot.com",
    messagingSenderId: "1096148793051",
    appId: "1:1096148793051:web:16c5c617f20cc156bafefe",
    measurementId: "G-V22PCDPYWF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference Messages Collection
var messagesRef = firebase.database().ref('messages');

// Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {

    // Prevent Default Behaviour
    e.preventDefault();
    
    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, email, message);

}

// Function to Get Form Values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Function to Save Message
function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

// Get current year for copyright
$('#year').text(new Date().getFullYear());

// Working of Collapse
$('.port-item').click(function() {
    $('.collapse').collapse('hide');
});

// Working of Ekko Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});

// Reload Page on Modal Close
function reloadPage(){
    window.location.reload();
}