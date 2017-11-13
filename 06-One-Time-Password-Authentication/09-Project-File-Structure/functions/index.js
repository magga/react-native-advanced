const functions = require('firebase-functions');

// 06-09
// Node is currently doesn't fully support the ES6 syntax
// We don't have access to any "import" and "export" keyword yet
// Instead we only have access to common JS syntax
const createUser = require('./routes/create_user');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.goodbye = functions.https.onRequest((request, response) => {
    response.send("Goodbye!");
});

// 06-09
// We then wired up the function to the exports object
// Remember that to wire up, we have to use the onRequest method
exports.createUser = functions.https.onRequest(createUser);
