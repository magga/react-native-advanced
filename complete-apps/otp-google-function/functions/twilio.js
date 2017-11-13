// 07-02
// This file will contains a configuration setup for starting the
//   Twilio API that we're going to use
// We're not going to make a direct HTTP Request over to the Twilio API
// Instead we're going to use Twilio's official NodeJS Client
// This module will make a sending text much more easier

// To use the Twilio's module, first we have to install it via npm
//   --> npm install --save twilio
// Remember to run the npm install inside the functions' folder
const twilio = require('twilio');

// 07-02
// Get the accountSid and authToken from the Twilio's Console
const { accountSid, authToken } = require('./secret/twilio_token');

// 07-02
// Initialize the twilio module with our accountSid and authToken
// Export that so that our function (from other js file) can use twilio to send text
module.exports = new twilio(accountSid, authToken);
