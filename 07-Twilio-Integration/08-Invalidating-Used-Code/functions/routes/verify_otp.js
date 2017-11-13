// 07-08
// Import firebase-admin to get access to firebase authentication and database
const admin = require('firebase-admin');

module.exports = (req, res) => {
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number and code' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    const code = parseInt(req.body.code);

    admin.auth().getUser(phone)
        .then((userRecord) => {
            // 07-08
            // Get the "reference" to the firebase database that contains
            //   the user's phone number
            // Once we get the reference, we can do anything, like, read the
            //   data inside of it
            const ref = admin.database().ref('users/' + phone);

            // The "on" function says that everythime the "value" changed, run
            //   the function that described on the second parameter
            // That function will be called with one parameter, that is the 
            //   current value of that collection
            ref.on('value', (snapshot) => {
                // 07-08
                // To prevent things for getting complicated, after we "watch"
                //   the ref using "on" method, stop watching it (turn it off)
                //   by calling the "off" method
                ref.off();

                // 07-08
                // The data that stored in the database can be read in the 
                //   snapshot's val()
                const user = snapshot.val();

                // 07-08
                // Check the code that's stored with the code that user provided
                if (user.code !== code) {
                    return res.status(422).send({ message: 'Code is not valid' });
                }

                // 07-08
                // Check the code if it's been used
                if (!user.valid) {
                    return res.status(422).send({ message: 'Code is already been used' });
                }

                // 07-08
                // Lastly, if the code reached here, it means that the code is valid
                // We have to invalidate that code and send something to user
                ref.update({ valid: false });
            });
        })
        .catch((error) => {
            return res.status(422).send(error);
        });
};