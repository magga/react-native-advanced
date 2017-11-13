const admin = require('firebase-admin');
const functions = require('firebase-functions');

const createUser = require('./routes/create_user');
const requestOtp = require('./routes/request_otp');
// 07-07
// Import the verify_otp function that we made
const verifyOtp = require('./routes/verify_otp');

const serviceAccount = require("./secret/firebase_admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://otp-rn-class.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOtp = functions.https.onRequest(requestOtp);
// 07-07
// Create a new route of "verifyOtp" and assign it to the function
//   that we imported above
exports.verifyOtp = functions.https.onRequest(verifyOtp);
