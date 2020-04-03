// CRUD create read update delete

/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;*/

// we can archive the same thing with destructuring
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    /*db.collection('users').insertOne(
      {
        name: 'Jose',
        age: 77
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      }
    );*/

    /*db.collection('users').findOne(
      { _id: new ObjectID('5e4ed69ef0b00a216575caa4') },
      (error, user) => {
        if (error) {
          return console.log('Unable to fetch');
        }

        console.log(user);
      }
    );*/

    /*db.collection('users')
      .find({ age: 27 })
      .toArray((error, users) => {
        console.log(users);
      });*/

    /*db.collection('task').findOne(
      { _id: new ObjectID('5e4ee937767f6222dc3e2bc1') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(task);
      }
    );

    db.collection('task')
      .find({ completed: false })
      .toArray((error, taks) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(taks);
      });*/

    /*const updatePromise = db.collection('users').updateOne(
      {
        _id: new ObjectID('5e4ed69ef0b00a216575caa4')
      },
      {
        $set: {
          name: 'Mike'
        }
      }
    );

    updatePromise
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });*/

    /* db.collection('users')
      .updateOne(
        {
          _id: new ObjectID('5e4ed69ef0b00a216575caa4')
        },
        {
          $inc: {
            age: 1
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
      */

    /*db.collection('task')
      .updateMany(
        { completed: false },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });*/

    /*db.collection('users')
      .deleteMany({
        age: 27
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });*/

    db.collection('task')
      .deleteOne({
        description: 'homework'
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
