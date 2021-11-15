// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID(); //just to see what is there in an id.
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to databases!");
    }
    const db = client.db(databaseName);
    db.collection("users").findOne(
      { _id: new ObjectID("61913acc3f43687221d3e40a") },
      (error, user) => {
        if (error) {
          return console.log("could not fetch the data");
        }
        console.log(user);
      }
    );
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vijay",
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     // console.log(result.ops); //It does not support in 4x version of mongoDB
    //     console.log(result);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Arjun",
    //       age: 28,
    //     },
    //     {
    //       name: "Ajay",
    //       age: 29,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "cleaning",
    //       completed: false,
    //     },
    //     {
    //       description: "study",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Oops could not insert the data");
    //     }
    //     console.log(result);
    //   }
    // );
  }
);
