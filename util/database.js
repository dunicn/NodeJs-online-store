const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    'mongodb+srv://Nemanja:JCuiIMmqKSyOsxaO@cluster0.x6zjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected MONGODB');
      cb(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
00000;
