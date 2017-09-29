var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
};
var models = require("../models");

exports.present = function(req, res) {
	//console.log(req.session.userinfo.firstname + ' is present, now lets save in db');
	var student = models.student;
	console.log(student);
	console.log('request: ' + req.body.assignment);
	data = {
		id: req.session.userinfo.id,
		email: req.session.userinfo.email,
		firstname: req.session.userinfo.firstname,
		lastname: req.session.userinfo.lastname,
		present: true,
		
	};
	student.create(data).then(function(newstudent, created) {
		if(newstudent) {
			console.log('created');	
		} else {
			console.log('NOT created')
		}
		
	})
	res.redirect('/checkin');
};


exports.assignment = function(req, res) {
	console.log(req.session.userinfo.firstname + ' has submitted an assignment');
	var assignment = models.assignment;
	console.log(assignment);
	console.log('request: ' + req.body.assignment);
	data = {
		email: req.session.userinfo.email,
		firstname: req.session.userinfo.firstname,
		lastname: req.session.userinfo.lastname,
		assignment: req.body.assignment
	};
	assignment.create(data).then(function(newsassignment, created) {
		if(newsassignment) {
			console.log('submitted');	
		} else {
			console.log('NOT submitted')
		}
		
	})
	res.redirect('/checkin');
};


exports.getNote = function(req, res){
    res.render("note")
};
exports.postNote = function(req, res){
    console.log(models);
    var note = models.Note;
    console.log("HEY!");
    console.log(note);
    data = {
        title: req.body.title,
        body: req.body.body
    };
    note.create(data).then(function(newnote, created){
        if(newnote){
            console.log('created a note');
        }else{
            console.log('notes not created');
        }
    }).then(function() {
        return note.findAll()
    }).then(function(notes) {
        res.render('viewnotes', {notes: notes})
    })
};

exports.getAllAssignments = function(req, res) {
	models.assignment.findAll({order: ['firstname']})
		.then(function(data) {
			res.json(data)
	})
}

exports.signin = function(req, res) {
 
    res.render('signin');


    

 
};


exports.tutorial = function(req, res) {
 
    res.render('tutorial');
   
 
};
exports.adminCheckin = function(req, res) {
 
    res.render('adminCheckin');
   
 
};
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
   
 
};

exports.admin = function(req, res) {
	res.render('admin');
};

exports.checkin = function(req, res) {
 
    res.render('checkin');
 
};
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
    
 
}