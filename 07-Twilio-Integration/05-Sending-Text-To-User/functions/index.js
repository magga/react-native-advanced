const admin = require('firebase-admin');
const functions = require('firebase-functions');

const createUser = require('./routes/create_user');
// 07-03
// Import the request_otp function that we made
const requestOtp = require('./routes/request_otp');

const serviceAccount = require("./secret/firebase_admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://otp-rn-class.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
// 07-03
// Create a new route of "requestOtp" and assign it to the function
//   that we imported above
exports.requestOtp = functions.https.onRequest(requestOtp);
