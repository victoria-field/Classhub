
var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    //a route for posting to signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signin',
 
        failureRedirect: '/signup'
    }

 
));
    app.get('/tutorial',isLoggedIn,authController.tutorial);

    app.post('/tutorial',isLoggedIn,authController.tutorial);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/checkin', isLoggedIn, authController.checkin);
    app.post('/present', isLoggedIn, authController.present);
    app.get('/admin', isLoggedIn, authController.admin)
    //app.post('/assignment/submit', isLoggedIn, authController.assignment);
    app.get('/logout', authController.logout);
    app.get('/adminCheckin', isLoggedIn, authController.getAllAssignments);
    app.post('/note', authController.postNote);
    app.get('/note', authController.getNote);


function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated()) {
     
        return next();

    }
         
    res.redirect('/');
 
}


var models = require("../models");
app.post('/signin', passport.authenticate('local-signin', {failureRedirect: "/"}), function(req, res) {
    console.log(req.session.userinfo)
    var classCode = req.session.userinfo.classCode
    if (classCode == 'atx') {
        res.redirect('/dashboard');
    }
    else if (classCode == 'btx') {
        res.redirect('/admin');
    }
    else {
        res.redirect('/');
    }
})

 

}

// {

    
//         successRedirect: '/dashboard',
 
//         failureRedirect: '/signin',
    
        

//     }