// Load express
// grabs whatever is module.exports for express and stores as a variable
const express = require('express');
const path = require('path');
// require the students "database"
const studentsDb = require('./data/students-db');

// Create the Express app
// we can see that module.exports for express is a function, and this function returns an object that we are storing as app
// now we can use dot notation to access the properties on the Express app object
const app = express();
 // Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 	
 // Mount middleware (app.use)

 	
 // Mount routes

app.get('/', function(req, res) {
    res.redirect('/students');
});
app.get('/students', function(req, res) {
    res.render('students/index', {
        students: studentsDb.getAll()
    });
});

app.get('/students/00:number', function(req, res) {
    console.log(`The value for the :number route parameter is: ${req.params.number}`);
    res.render('students/show', {student: studentsDb.getOne(req.params.number), partial: false});
});

// Tell the app to listen on port 3000 for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});