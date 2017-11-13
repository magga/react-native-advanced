const admin = require('firebase-admin');
// 07-05
// Import the phone module
const Phone = require('phone');

const twilio = require('./../twilio');

module.exports = (req, res) => {
    if (!req.body.phone) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    admin.auth().getUser(phone)
        .then((userRecord) => {
            // 07-05
            // We always want to send a 4 digit number to the user as a code
            // To do this, we can generate a random number using the built-in
            //   Math.random() function
            // To learn more about Math.random(), visit
            //   --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const code = Math.floor(Math.random() * 8999 + 1000);

            // 07-05
            // Now we want to send the code to the user's provided phone number
            // But remember that the Twilio's phone number that we generated before is
            //   a US' phone number (not Indonesian phone number)
            // To send a text message from US to Indonesia, the phone number have to
            //   be written with a country id (+62) in front of it
            // To put a country id in front of the phone, we can use the "phone" module
            //   to make it easy
            // First install it from npm with
            //   --> npm install --save phone
            // Remember to install it in the "function"s folder
            // To learn more about how to use the "phone" module, visit
            //   --> https://github.com/aftership/phone
            const locPhone = Phone(phone, 'ID')[0];

            // 07-05
            // Use this syntax to send text to the user's phone
            // The "from" property is the US' phone number that we made in the Twilio Console
            twilio.messages.create({
                body: 'Your Amazing App\'s Code is : ' + code,
                to: locPhone,
                from: '+18445040177'
            })

        })
        .catch((error) => {
            return res.status(422).send(error);
        });
};