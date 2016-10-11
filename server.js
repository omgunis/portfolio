// var express    = require('express'),
//     app        = express(),
//     bodyParser = require('body-parser'),
//     logger     = require('morgan'),
//     path       = require('path'),
//     port       = process.env.PORT || 3000
//
// // app.set('view engine', 'ejs')
//
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
//
// app.use(logger('dev'))
//
// app.use(express.static(path.join(__dirname, 'public')))
// // app.get('/', function(req, res){
// //   res.json('Welcome to the home page')
// // })
//
// // app.use('/', function(req,res){
// //   express.static('public')
// // })
//
// app.get('/', function(req, res){
//   console.log('Sending index');
//   res.sendFile(__dirname + 'index.html')
//   // res.render('index')
// })
//
// app.listen(port, function(){
//   console.log('Listening on port ' + port)
// })
