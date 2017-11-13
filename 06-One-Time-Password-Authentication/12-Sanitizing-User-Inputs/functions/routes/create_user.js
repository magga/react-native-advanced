// 06-12
// Import the firebase-admin module to help us create the user
const admin = require('firebase-admin');

module.exports = (req, res) => {
    // 06-12
    // (TO DO)
    // Verify that user provide us a phone
    if (!req.body.phone) {
        // 06-12
        // We return an HTTP Response status of 422 (Unprocessable Entity)
        // To know more about HTTP Response Statuses, visit
        //   --> https://httpstatuses.com/
        return res.status(422).send({ message: 'Bad Input. Please provide a phone number' });
    }

    // 06-12
    // (TO DO)
    // Format the phone number to remove dashes and parens
    // Sometimes user may input a different kind of phone number for example
    //   0812-3456-7890
    //   0812 3456 7890
    //   081234567890
    //   etc
    // To remove all of the unnecessary string (hence, we just need a number),
    //   we can remove that string by using Regex
    // To learn more about Regex (Regular Expression), visit 
    //   --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    // (TO DO)
    // Create a new user account using that phone number

    // (TO DO)
    // Respond to the user request, saying the account was made
};