const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,(err, db)=>{
if(err){
  throw err;
}
console.log('Database created!');
db.close();
});



//second alternative

const mongoose = require('mongoose')

//const url = "mongodb+srv://okolo:0XE1KBHgTwRhsxdy@cluster0.bhx7cfl.mongodb.net/myFirstDB?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(url,connectionParams).then(()=>{
console.info('Database created!')
}).catch((e)=>{
  console.log('error:',e);
})