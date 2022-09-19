const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const connectUrl = "mongodb://127.0.0.1:27017";
const dbName = "test";
MongoClient.connect(connectUrl, (err, client) => {
  if (err) {
    console.log("err");
  }
  const db = client.db(dbName);
  db.collection("users").insertOne(
    {
      name: "jyoti chauhan",
      age: 19,
      faceColor: "fare",
    },
    (err, result) => {
      if (err) {
        console.log("err");
      } else {
        console.log("inserted");
      }
    }
  );
  db.collection("users").findOne(
    { _id: ObjectId("632199a847db4bc1dabcac6e") },
    (err, result) => {
      if (err) {
        console.log("err");
      } else {
        console.log(result, "data");
      }
    }
  );
});
