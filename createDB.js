var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var PM = require('promise-mongo')
var pm = new PM()

var url = 'mongodb://localhost:27017';
var db;

collectionNames = ['meals', 'grade']
pm.initDb(collectionNames, 'mongodb://127.0.0.1:27017/test')
.then((value) => {
  console.log(value, "tes")
})

// MongoClient.connect(url, function(err, dbConnect) {
//     assert.equal(null, err);
//     db = dbConnect;
//
//     db.createCollection("testDB")
//
//     console.log("Connected correctly to db server");
//
//
// });
