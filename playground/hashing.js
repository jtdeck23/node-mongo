const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

token = jwt.sign(data, '123abc');
console.log(token);

var decodedResult = jwt.verify(token, '123abc');
console.log(decodedResult);

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('data was not changed');
// } else {
//     console.log('data was changed, do not trust');
// }