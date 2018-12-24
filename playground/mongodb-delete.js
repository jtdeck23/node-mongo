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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    //     .then((res) => {
    //         console.log(res);
    //     });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
    //     console.log(doc);
    // });

    db.collection('Users').deleteMany({name: 'Jordan Deck'}).then((res) => {
        console.log(res);
    });

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5c21545edcd95f33eccf88fc')
    // }).then((res) => {
    //     console.log(res);
    // });
    //client.close();
});