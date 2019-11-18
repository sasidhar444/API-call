const functions = require('firebase-functions');
exports.helloWorld = functions.https.onRequest((request, response) => {
    let msg = request.query.msg || 'hello bro';
    reponse.status(200).send(msg.toUpperCase());
});