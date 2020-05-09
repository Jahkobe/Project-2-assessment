const express = require('express');
const router = express.Router();
const Todo = require('../models/todolist.js');

// add routes


// Index
router.get('/', (req, res) => {
    Todo.find({}, (error, lists) => {
        res.render('Index')
    })
});


// Create
router.post('/', (req, res) => {
        
    res.send("recieved");

});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Player.findByIdAndRemove(req.params.id, (err, player) => {
        res.redirect('/players');
    });
});




// export router
module.exports = router;