const functions = require('firebase-functions')
const facebookService = require('./facebookService')
const token = require('./access_tokens').fb

// create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getAlbum = functions.https.onRequest((req, res) => {
  facebookService.fetchAlbum(token, req.query.album, response => res.send(response), error => res.send(error))
})
