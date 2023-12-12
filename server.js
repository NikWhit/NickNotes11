const express = require('express');
const path = require ('path');
// Source is in 21_Modular-Routing/server.js
const { readFromFile, readAndAppend } =require("./helpers/fsUtils");
const uuid = require( './helpers/uuid')

const PORT = process.env.PORT || 3001;

const app = express();

//midware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static middleware pointing to the public folder//11-Express/01-Ins_Setup
app.use(express.static('public'));

//--22-Stu_Modular-Routing
app.get('/api/notes', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(json.parse(data)));
});

app.post('/api/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    readAndAppend (newNote, "./db/db.json");
    res.json('note made');
});
//GET route for notes
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')));
//05-Ins_Query-Params
//GET route for index.html
app.get('/index', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`));

