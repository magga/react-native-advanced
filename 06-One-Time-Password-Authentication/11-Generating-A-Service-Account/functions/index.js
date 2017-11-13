// 06-11
// Use firebase-admin module to get access to the firebase features
// We don't need to install it via npm as this module is already 
//   installed when we first initialize the firebase project
// This admin object will gives us access to the Service Account that
//   we talked before (see the corresponding image)
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const createUser = require('./routes/create_user');

// 06-11
// The serviceAccount object contains a very secret credentials that authorize
//   us to make any type of changes we want to our Firebase
// You can get this file by accessing the Firebase Console's setting in the
//   "Service Account" tab (see the corresponding image)
const serviceAccount = require("./secret/firebase_admin.json");

// 06-11
// Lastly, we initialize the admin with the credential that we import before
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://otp-rn-class.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
