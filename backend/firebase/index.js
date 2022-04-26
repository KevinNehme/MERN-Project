var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey-khawabi.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
