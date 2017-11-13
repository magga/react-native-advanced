const admin = require('firebase-admin');

module.exports = (req, res) => {
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number and code' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    const code = parseInt(req.body.code);

    admin.auth().getUser(phone)
        .then((userRecord) => {
            const ref = admin.database().ref('users/' + phone);

            ref.on('value', (snapshot) => {
                ref.off();

                const user = snapshot.val();

                if (user.code !== code) {
                    return res.status(422).send({ message: 'Code is not valid' });
                }

                if (!user.valid) {
                    return res.status(422).send({ message: 'Code is already been used' });
                }

                ref.update({ valid: false });

                // 07-09
                // In Firebase, JSON Web Token (JWT) is used whenever you are using a custom
                //   authentication scheme (which is exactly what we're doing now)
                // Firebase has a built in methodology for doing authentication with OAuth
                //   and email & password
                // But if you're taking care of authentication yourself, using Anonymous sign
                //   in provider, it is completely up to us to prove to Firebase that a 
                //   given user is authenticated to use the app
                // That's the purpose of JSON Web Token

                // So now we generate JWT and send it back to the user
                // createCustomToken takes the ID of the user and generate a JWT for that user
                // createCustomToken is an asynchronous function, so we can add then() there
                admin.auth().createCustomToken(phone)
                    .then((token) => {
                        res.send({ token: token});
                    });
            });
        })
        .catch((error) => {
            return res.status(422).send(error);
        });
};