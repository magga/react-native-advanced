const admin = require('firebase-admin');

module.exports = (req, res) => {
    if (!req.body.phone) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    // 06-13
    // (TO DO)
    // Create a new user account using that phone number

    // The admin object contains many capabilities of Firebase
    // One of them is an auth() function
    // We can use that to access the authentication capability of Firebase

    // createUser() function is going to take an object as parameter that contains
    //   about the user that we're going to create
    // In our case, we're treating the phone number as a unique identifying token
    // In other words, any user can only have a single phone number at any given time
    // And every single user that's been created must have a different phone number
    admin.auth().createUser({ uid: phone })
        // 06-12
        // The createUser function is an asynchronous function, so it'll return a promise
        // It'll take a parameter, that is the "user" that's successfully created
        .then((user) => {
            // 06-12
            // (TO DO)
            // Respond to the user request, saying the account was made
            res.send(user);
        })
        // 06-12
        // Because the createUser return a promise, it have to handle the error scenario too
        .catch((error) => {
            return res.status(422).send(error);
        });

    
};