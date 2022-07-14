
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://database_user:iuGBR83GFk3eGGLY@firstcluster.ynxjxrm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  collection.findOne().then(
    (item) => {
      console.log(item.greeting)
    },
    () => {
      client.close()
    }
  )  
});
