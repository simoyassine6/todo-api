const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server ');
    db.collection('user').findOneAndDelete({_id: ObjectID('589a6b5aec2820b524e73353')}).then((result)=>
        {
            "use strict";
            console.log(result);

        }
    );

    // console.log('Connected to MongoDB server ');
    // db.collection('user').deleteMany({name:'simoyassine'}).then((res) => {
    //     "use strict";
    //     console.log(res);
    //
    //
    // });


    // db.close();

});