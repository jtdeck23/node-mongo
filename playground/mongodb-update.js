//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to db');
    } 
    console.log('connected to db');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     text: 'eat lunch'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Jordan Deck'
    }, {
        $set: {
            name: 'Garth Wartrough'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
    //client.close();
});