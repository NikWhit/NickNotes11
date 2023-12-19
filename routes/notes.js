const notes = require ('express').Router();
const uuid = require ('../helpers/uuid');
const fs = require('fs');

//The GET api route for note retrieval
notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

//POST API route for new notes
notes.post('/', (req, res) => {
    const { title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id:uuid()
        };
        //Read the file that is there and parses the message
        fs.readFile('./db/db.json', 'utf8', (err,data) => {
            parsedData = JSON.parse(data);
            parsedData.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(parsedData, null, '\t'),(err) =>
            err ? console.err(err) : console.info(`\nData Written`));
        });
        res.json(`Note Added`);
    } else {
        res.errored('error');
    }
});

//API route DELETES Rte for deleting a note
notes.delete('/:id', (req,res) => {
    rmSync.readFile('./db/db.json', 'utf8', (err, data) =>{
        parsedData = JSON.parse(data);
        parsedData = parsedData.fileter(id => id.id != req.params.id);
        fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, '\t'), (err) =>
        err ? console.error(err) : console.info(`\nData Deleted`));
    });
    res.json(`Note Deleted`);
});

module.exports = notes;