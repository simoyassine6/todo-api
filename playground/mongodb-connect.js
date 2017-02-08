const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if (err) {
    return console.log('Unable to connect to MongoDB server')
}

console.log('Connected to MongoDB server ');


// db.collection('Todos').insertOne({
//     text: 'be excellent at nodejs',
//     completed:false
//
//
// }, (err,result) => {
//     if (err) { return console.log('Unabel to insert todo', err)}
//     console.log(JSON.stringify(result.ops, undefined, 2));
//
//
// });

    db.collection('user').insertOne({
        name: 'simoyassine',
        age: '21',
        location: 'morocco'

    }, (err, result) => {
        if (err) {return console.log("Unable to insert the user", err)}
        console.log(result.ops);

    });




db.close();

});

