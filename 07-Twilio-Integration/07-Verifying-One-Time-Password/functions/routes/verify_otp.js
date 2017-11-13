// 07-07
// Create a new file to host a new Google Cloud Function

module.exports = (req, res) => {
    // 07-07
    // Do some filter to make sure that user provide a code and phone number
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number and code' });
    }

    // 07-07
    // Do sanitizing the phone
    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    // 07-07
    // A code is always a number
    // So we can parse (convert) it to an integer
    const code = parseInt(req.body.code);
};