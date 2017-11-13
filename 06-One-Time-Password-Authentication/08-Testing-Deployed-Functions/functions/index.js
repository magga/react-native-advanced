const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// 06-08
// This is how we set up a Google Cloud Function
// Whenever someone makes an HTTP Request to our Firebase project, this 
//   function will be invoked

// Firebase is going to look at every single variable that is assigned to 
//   the "exports" object
// If we assign a property/function to this "exports" object, Firebase is assume
//   that we're going to set up a new Google Cloud Function
// It's going to wire that up inside of all the Google infrastructure as a function
//   that can be executed
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

// 06-08
// We can setup another Google Cloud Function here and named it "goodbye"
// To make it available, deploy it again by running
//   --> firebase deply
// After successfully deployed, you can check the Firebase Console
exports.goodbye = functions.https.onRequest((request, response) => {
    response.send("Goodbye!");
});
