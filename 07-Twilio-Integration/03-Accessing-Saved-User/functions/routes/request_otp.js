// 07-03
// Create a new function to handle the otp request from user

// To find the user in the firebase, we can use a help from firebase-admin module
const admin = require('firebase-admin');

module.exports = (req, res) => {
    // 07-03
    // Do some filter to make sure that the user provide a phone number
    if (!req.body.phone) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number' });
    }

    // 07-03
    // Do the sanitazion
    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    // 07-03
    // getUser function accepting a parameter that is the user's id
    // Remember that we set the phone as the user's id before, so we can simply
    //   use the getUser with the phone as parameter
    // And because of the getUser is an asynchronous function, we can specify
    //   the then() and catch() function too
    admin.auth().getUser(phone)
        // 07-03
        // The then() function will be called with one parameter, that is the
        //   user record that is found from the firebase auth
        .then((userRecord) => {

        })
        .catch((error) => {
            return res.status(422).send(error);
        });
};