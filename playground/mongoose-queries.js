const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');




// Todo.find({
//
//     _id : id
// }).then((todos) => {
//     "use strict";
//
//     console.log('this are the todos', todos);
// });
//
// Todo.findOne({
//
//     _id : id
// }).then((todo) => {
//     "use strict";
//
//     console.log('and this is the one todo', todo);
// });

User.findById('589c86e99c20d02f4944bd48').then((users) => {

    if (!users) {
        return console.log('there is no user in the database');
    }
    console.log('user' , users).catch((e) => {
        "use strict";

        console.log(e);
    });
});

