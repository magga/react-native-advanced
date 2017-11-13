// 06-10
// Everytime the user makes a request to the Google Cloud Function, the function
//   is called with 2 parameters, that is Request and Response object
// It's basically the same as the Express' Request and Response object
// To know more about Express' Request and Response object, visit :
//   Request : http://expressjs.com/en/4x/api.html#req
//   Response : http://expressjs.com/en/4x/api.html#res

// To put it simply, Request is the request/communication that's coming from the
//   user, when Response is the response/object that used for replying to the
//   user's request
module.exports = (req, res) => {
    // 06-10
    // req.body is js object that contains all the different data that was passed
    //   to this function from the user when the user called it
    // res.send is the way to send back some information to the user
    // So now we just make a function that echoes the user's request
    // You can test it out by using Postman
    res.send(req.body);
};