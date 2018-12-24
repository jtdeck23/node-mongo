//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to db');
    } 
    console.log('connected to db');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // insert new doc into users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Jordan Deck',
    //     age: 26,
    //     location: 'Henderson, TN'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to insert into users');
    //     }

    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});