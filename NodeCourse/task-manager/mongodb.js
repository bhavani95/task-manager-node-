//CRUD operations


const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "task-manager"

const id = new ObjectID();


MongoClient.connect(connectionURL, { useNewUrlParser : true},  { useUnifiedTopology: true },(error, client)=>{

if(error){


    return console.log("unable to connect database");
}

console.log("connected correctly!!!!");

const db = client.db(databaseName);

db.collection('tasks').findOne((_id = new ObjectID('5e316ff27b22740a7fd08c43'),(err,res)=>{

    if(err){
        return console.log(err);
    }
    console.log(res);

}))
//db.collection().find returns a cursor
db.collection('tasks').find({completed : false}).toArray((err,res)=>{

    if(err){
        return console.log(err);
    }
    console.log(res);
})

const updatePromise = db.collection('users').updateOne({

    _id: new ObjectID('5e31714c2614730ab3a6a88d')},
    {
        $inc : {

            age:1
        }
    }).then((result) =>{

    console.log(result);
}).catch((error)=>{

    console.log(error);
})


db.collection('tasks').update({

   completed: true

},{
    $set: {
        completed : false
    }

}).then((result)=>{

    console.log('modified count '+result.modifiedCount);

}).catch((error)=>{

    console.log(error);

})

db.collection('users').deleteMany({

    age : 24

}).then((result)=>{
console.log(result);

}).catch((error)=>{

    console.log(error);
})

db.collection('tasks').deleteOne({
    description: "buy groceries"
}).then((result)=>{

    console.log(result.deletedCount);
}).catch((error)=>{

    console.log(error);
})

})




