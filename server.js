const express = require('express');
const path = require ('path');
const api = require('./routes/index');
// Source is in 21_Modular-Routing/server.js

const app = express();

const PORT = process.env.PORT || 3001;

//middleware for JSON Parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static middleware pointing to the public folder//11-Express/01-Ins_Setup
app.use(express.static('public'));

//Requests that have /api to the index.js in the routes folder
app.use('/api', api);

//--22-Stu_Modular-Routing
// app.get('/api/notes', (req, res) => {
//     const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
//     res.json(notes);
    // readFromFile("./db/db.json").then((data) => res.json(json.parse(data)));
// });

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

// app.post('/api/notes', (req, res) => {
//     const newNote = req.body;
//     newNote.id = Date.now().toString();

    // const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    // notes.push(newNote);

    // fs.writeFileSync('db.json', JSON.stringify(notes));
    // res.json(newNote);
    // });

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`));

