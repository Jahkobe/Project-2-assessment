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
    Todo.create(req.body, (error, createdList) => {
        console.log(req.body)
        res.redirect('/lists');
    })    
    

});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Todo.findByIdAndRemove(req.params.id, (err, list) => {
        res.redirect('/lists');
    });
});




// export router
module.exports = router;