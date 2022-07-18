
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://database_user:iuGBR83GFk3eGGLY@firstcluster.ynxjxrm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

var collection;

module.exports = {
  connect: () => {
    client.connect((_) => {
      collection = client.db("test").collection("devices");
    });
  },
  collection: () => {
    return collection;
  },
};