const mongoose = require('mongoose');
const Todo = require('./new_todo_model');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	login: { type: String,unique: true,  required: true},
    password: { type: String, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
	todos: [{ type: Schema.Types.ObjectId, ref: 'Todo'}]
});

module.exports = mongoose.model('User', UserSchema);