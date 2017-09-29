
// var express = require('express');
// var app = express();
// var passport   = require('passport');
// var session    = require('express-session');
// var bodyParser = require('body-parser');
// var env = require('dotenv').load();
// var exphbs = require('express-handlebars');
// var moment = require("moment");
// var path = require("path");
// //var authRoute = require('./routes/auth.js')(app);




// //For BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // For Passport

// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

// app.use(passport.initialize());

// app.use(passport.session({
//     secret: 'cookie_secret',
//     name: 'cookie_name',
//     proxy: true,
//     resave: true,
//     saveUninitialized: true
// })); // persistent login sessions

// app.get('/', function(req, res) {

//  //res.send('Welcome to Passport with Sequelize');


// res.sendFile(path.join(__dirname, "public/index.html"));

// });
// // app.use('/static', express.static(path.join(__dirname, 'public')));

// //Models

// var models = require("./models");

// var CurrentDate = moment().format("MMMDoYY");
// console.log(CurrentDate);
// //Sync Database
// models.sequelize.sync({}).then(function() {

//     console.log('Nice! Database looks fine' )

// }).catch(function(err) {

//     console.log(err, "Something went wrong with the Database Update!")

// });


// app.listen(8080, function(err) {
//     console.log('SITE IS STARTING');
//     if (!err)
//         console.log("Site is live");
//     else console.log(err)

// });

// //For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');
// console.log("APP IS CHANGED");
// require('./config/passport/passport.js')(passport, models.user);
// //console.log(require('./config/passport/passport.js')('hello world'));

// console.log('Passport defined: ' + passport.authenticate);

// var authRoute = require('./routes/auth.js')(app,passport);

var express = require('express');
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var moment = require("moment");
var path = require("path");
//var authRoute = require('./routes/auth.js')(app);




//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))

// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session({
    secret: 'cookie_secret',
    name: 'cookie_name',
    proxy: true,
    resave: true,
    saveUninitialized: true
})); // persistent login sessions

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, "views/index .html"));



});

//Models

var models = require("./models");

var CurrentDate = moment().format("MMMDoYY");
console.log(CurrentDate);
//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine' )

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});


app.listen(8080, function(err) {
    console.log('SITE IS STARTING');
    if (!err)
        console.log("Site is live");
    else console.log(err)

});

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
console.log("APP IS CHANGED");
require('./config/passport/passport.js')(passport, models.user);
//console.log(require('./config/passport/passport.js')('hello world'));

console.log('Passport defined: ' + passport.authenticate);

var authRoute = require('./routes/auth.js')(app,passport);
