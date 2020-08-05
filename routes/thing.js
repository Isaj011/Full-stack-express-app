module.exports = (app) => {
    //const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/api/stuff', (req, res, next) => {
        console.log(req.body);
        res.status(201).json({
            message: 'Thing created successfully!'
        });
    });

    //     // Retrieve all Notes
    //     app.get('/notes', notes.findAll);

    //     // Retrieve a single Note with noteId
    //     app.get('/notes/:noteId', notes.findOne);

    //     // Update a Note with noteId
    //     app.put('/notes/:noteId', notes.update);

    //     // Delete a Note with noteId
    //     app.delete('/notes/:noteId', notes.delete);
}