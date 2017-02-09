let mongoose = require('mongoose');

let Todo = mongoose.model('Todos', {
    email: {
        type: String,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,

    }
});

module.exports={Todo};

