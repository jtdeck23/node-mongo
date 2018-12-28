const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((res) => {
//     console.log(res);
// });

//Todo.deleteOne();

Todo.findByIdAndDelete('5c2443053473d2ff54e44826').then((todo) => {
    console.log(todo);
});

