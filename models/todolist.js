const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({

todotext: { type: String}

}, { timestamps: true });


// Create Model from our Schema
const Todo = mongoose.model('Todo', todoSchema);

// Export Player Model
module.exports = Todo;