var express = require( "express" );
var app = express();
var bodyParser = require( "body-parser" );
var MongoClient = require( 'mongodb' ).MongoClient;
var assert = require( 'assert' );
var ObjectId = require( 'mongodb' ).ObjectID;
var bcrypt = require( 'bcryptjs' );
var jwt = require( 'jwt-simple' );
var Joi = require('joi');
// var validate = require('express-jsonschema').validate;
var validate = require('express-validation');

var validation = require('./controllers/testcase.controllers.js');



var JWT_SECRET = 'mealsAppSecret';
app.use( express.static( "public/app" ) );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.use( bodyParser.json() );
var url = 'mongodb://localhost:27017/testcases';
var db;
MongoClient.connect( url, function ( err, dbConnect ) {
  assert.equal( null, err );
  console.log( err, "errrrr" )
  console.log( "Connected correctly to db server" );
  db = dbConnect;
} );
app.get( '/', function ( req, res ) {
  res.render( "index", {
    title: "Home"
  } );
  res.send();
} );
// app.get( '/project', function ( req, res ) {
//   res.render( "index", {
//     title: "Home"
//   } );
//   res.send();
// } );
// app.get( '/suite/:id', function ( req, res ) {
//   db.collection( 'meals' ).find().toArray( function ( err, results ) {
//     res.send( results );
//   } );
// } );
// app.get( '/plan/:id', function ( req, res ) {
//   db.collection( 'meals' ).find().toArray( function ( err, results ) {
//     res.send( results );
//   } );
// } );
// app.get( '/plan/:id/executions', function ( req, res ) {
//   db.collection( 'meals' ).find().toArray( function ( err, results ) {
//     res.send( results );
//   } );
// } );
// app.put( '/update/plan/:id', function ( req, res ) {
//   var mealID = req.params.id;
//   var updatedName = req.body.name,
//     updatedDescription = req.body.desc,
//     updatedNote = req.body.note
//   db.collection( 'meals' ).updateOne( {
//     _id: ObjectId( mealID )
//   }, {
//     $set: {
//       name: updatedName,
//       description: updatedDescription,
//       note: updatedNote
//     }
//   } );
//   res.send( "home" );
// } );
// app.put( '/update/suite/:id', function ( req, res ) {
//   var mealID = req.params.id;
//   var updatedName = req.body.name,
//     updatedDescription = req.body.desc,
//     updatedNote = req.body.note
//   db.collection( 'meals' ).updateOne( {
//     _id: ObjectId( mealID )
//   }, {
//     $set: {
//       name: updatedName,
//       description: updatedDescription,
//       note: updatedNote
//     }
//   } );
//   res.send( "home" );
// } );
// app.put( '/update/execution/:id', function ( req, res ) {
//   var mealID = req.params.id;
//   var updatedName = req.body.name,
//     updatedDescription = req.body.desc,
//     updatedNote = req.body.note
//   db.collection( 'meals' ).updateOne( {
//     _id: ObjectId( mealID )
//   }, {
//     $set: {
//       name: updatedName,
//       description: updatedDescription,
//       note: updatedNote
//     }
//   } );
//   res.send( "home" );
// } );
// app.delete( '/delete/plan/:id', function ( req, res ) {
//   var mealID = req.params.mealId;
//   db.collection( 'meals' ).remove( {
//     _id: ObjectId( mealID )
//   } );
//   res.send( "home" );
// } );
// app.delete( '/delete/suite/:id', function ( req, res ) {
//   var mealID = req.params.mealId;
//   db.collection( 'meals' ).remove( {
//     _id: ObjectId( mealID )
//   } );
//   res.send( "home" );
// } );
// app.delete( '/delete/execution/:id', function ( req, res ) {
//   var mealID = req.params.mealId;
//   db.collection( 'meals' ).remove( {
//     _id: ObjectId( mealID )
//   } );
//   res.send( "home" );
// } );
// //
// app.get( '/execution/:id', function ( req, res ) {
//   db.collection( 'meals' ).find().toArray( function ( err, results ) {
//     res.send( results );
//   } );
// } );
app.get( '/testcase', function ( req, res ) {
  var name = req.body.name,
    description = req.body.description,
    note = req.body.note
    // var collection = db.collection('meals');
  db.collection( 'meals' ).insert( {
    name: name,
    description: description,
    note: note
  }, function ( err, result ) {} );
  res.end( 'End Add Meal' );
} );

app.post( '/testcase',validate(validation),function ( req, res ) {


   title = req.body.title
     section = req.body.section
   type = req.body.type
   priority = req.body.priority
   estimate = req.body.estimate
   reference = req.body.reference
   status = req.body.status
     review = req.body.review
   preconditions = req.body.preconditions
   summary = req.body.summary
   steps = req.body.steps
   expected_results = req.body.expected_results
    // var collection = db.collection('meals');
  db.collection( 'testcase' ).insert( {
    title: 1323,
    section: section,
    type: type,
    priority: priority,
    estimate: estimate,
    reference: reference,
    status: status,
    review: review,
    preconditions: preconditions,
    summary: summary,
    steps: steps,
    expected_results: expected_results
  }, function ( err, result ) {
    if(err) return err
    console.log("The result is ", result)
  } );
 //  console.log(req.body); // => { email: "user@domain", password: "pwd" }
 // res.json(200);
 // console.log(req.body); // => { email: "user@domain", password: "pwd" }
 // res.json(200);
 if (err instanceof ev.ValidationError) return res.status(err.status).json(err);


  res.end( 'Your test case is created' );
} );
// app.get( '/testcase/:id', function ( req, res ) {
//   db.collection( 'meals' ).find( {
//     '_id': ObjectId( req.params.id )
//   } ).toArray( function ( err, results ) {
//     res.send( results );
//   } );
// } );
// app.put( '/update/testcase/:id', function ( req, res ) {
//   var mealID = req.params.id;
//   var updatedName = req.body.name,
//     updatedDescription = req.body.desc,
//     updatedNote = req.body.note
//   db.collection( 'meals' ).updateOne( {
//     _id: ObjectId( mealID )
//   }, {
//     $set: {
//       name: updatedName,
//       description: updatedDescription,
//       note: updatedNote
//     }
//   } );
//   res.send( "home" );
// } );
// app.post('/users/register', function(req, res) {
//
// db.collection('users', function(err, userCollection){
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(req.body.password, salt, function(err, hash) {
//         // Store hash in your password DB.
//       var newUser = {
//       username:req.body.username,
//       firstName:req.body.firstName,
//       lastName : req.body.lastName,
//       email: req.body.email,
//        password: hash
//       }
//
//  userCollection.insert(newUser, function(err, result) {
//       return res.send()
//  });
//
//     });
// });
// })
//
//     res.end('End Add Meal');
// });
//
// app.post('/users/login', function(req, res) {
//
// db.collection('users', function(err, userCollection){
//
//     userCollection.findOne({username: req.body.username }, function(err, user){
//
//         if(!user){
//             res.status(402).send(err)
//         }
//         else{
//                 bcrypt.compare(req.body.password, user.password, function(err, result) {
//
//                     if(result){
//                         var token = jwt.encode(user, JWT_SECRET);
//                         return res.json({token:token})
//                     }
//                     else{
//                        return res.status(400).send()
//                     }
//                 });
//
//         }
//
// });
//
// });
//
// });
// app.post('/rating', function(req, res) {
//     var mealId = req.body.recipeID,
//         rating = req.body.rating
//     db.collection('meals').updateOne({
//         _id: ObjectId(mealId)
//     }, {
//         $set: {
//             rating: rating
//         }
//     });
//     res.end('Ending Get all meals');
// });
// app.put('/update/:id', function(req, res) {
//     var mealID = req.params.id;
//     var updatedName = req.body.name,
//         updatedDescription = req.body.desc,
//         updatedNote = req.body.note
//     db.collection('meals').updateOne({
//         _id: ObjectId(mealID)
//     }, {
//         $set: {
//             name: updatedName,
//             description: updatedDescription,
//             note: updatedNote
//         }
//     });
//     res.send("home");
// });
// app.devare('/delete/:mealId', function(req, res) {
//     var mealID = req.params.mealId;
//     db.collection('meals').remove({
//         _id: ObjectId(mealID)
//     });
//     res.send("home");
// });
var port = 8085;
app.listen( port, function () {
  console.log( 'meals app listening on port ' + port );
} );
