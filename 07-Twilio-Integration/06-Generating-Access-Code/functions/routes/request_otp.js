const admin = require('firebase-admin');
const Phone = require('phone');

const twilio = require('./../twilio');

module.exports = (req, res) => {
    if (!req.body.phone) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    admin.auth().getUser(phone)
        .then((userRecord) => {
            const code = Math.floor(Math.random() * 8999 + 1000);
            const locPhone = Phone(phone, 'ID')[0];

            // 07-06
            // Twilio Message Create is an asynchronous function
            // So it will return a promise
            // We can add the then() and catch() function
            twilio.messages.create({
                body: 'Your Amazing App\'s Code is : ' + code,
                to: locPhone,
                from: '+18445040177'
            }).then(() => {
                // 07-06
                // Firebase Authentication is decoupled from Firebase Database
                // It means that Firebase Database can be used to store any kind of data
                // Whereas Firebase Authentication can't do that
                // It means we can't do things like :
                //   --> userRecord.code = code
                // We can't add "code" property to the Firebase Authentication
                // So we save the "code" to the FIrebase Database instead

                // We create a new "row/tree/collection" for that particular phone number 
                //   in database
                // And then we store the "code" inside of it
                // After you test this route, please check the Firebase Database Console
                //   for more information about how this data being stored
                admin.database().ref('users/' + phone).update({ code: code, valid: true })
                    .then(() => {
                        res.send({ message: 'Code has been sent!' });
                    })
                    .catch((error) => {
                        return res.status(422).send(error);
                    });
            }).catch((error) => {
                return res.status(422).send(error);
            });

        })
        .catch((error) => {
            return res.status(422).send(error);
        });
};