const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server ');

    // db.collection('Todos').find({_id: new ObjectID('589a0bfa4391be058b780a91')}).toArray().then((docs) => {
    //
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },
    // (err) => {
    //     console.log('Unable to fetch the todos', err)
    // }
    // );
    // db.collection('Todos').find().count().then((count) => {
    //
    //         console.log(`todos count : ${count}`);
    //
    //     },
    //     (err) => {
    //         console.log('Unable to fetch the todos', err)
    //     }
    // );

    db.collection('todos').find({_id: new ObjectID('589ba28d849d3c25b21128cf')}).toArray().then((docs)=>
        {
            "use strict";

            console.log(docs);
        },
        (err) => {
        "use strict";
        console.log('Unable to fetch the name you typed', err)

        }
    );


   // db.close();

});

