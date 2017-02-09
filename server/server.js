let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());


app.post('/todos',(req,res) => {

    let todo = new Todo ({
        text: req.body.text
    });

    todo.save().then((doc) => {
        "use strict";

    res.send(doc);

    }, (e) =>
    {
        "use strict";
    res.status(400).send(e);
    })

});



app.listen(3000, () => {
    "use strict";
    console.log('started on port 3000')

});


