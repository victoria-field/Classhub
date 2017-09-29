
var db = require("../models")
//check if needs file name - ../models/notes.js

//retrieving teacher note to student
module.exports = function(app){
app.get("/api/notes/", function(req, res) {
    db.Note.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //creates the note from the teacher to the students
  app.post("/api/notes", function(req, res) {
      console.log(req.body);
      db.Note.create({
        email: req.body.email,
        author: req.body.author,
        note: req.body.note
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
}
