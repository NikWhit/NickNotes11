const express = require('express');

//Import file with notes router
const notesRouter = require('/notes');

//use express instance
const app = express();

//middleware to traverse the notes route
app.use('/notes', notesRouter);

module.exports = app;