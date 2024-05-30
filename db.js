const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/hotels';
const mongoUrl1 = ' mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoUrl
// ,{//no need in newer versions
//     useNewUrlParser:true,
//     // useUnifiedTopology:true
// }
);
const db = mongoose.connection;
db.on('connected',()=>{
    console.log("mongo db connected");
})
db.on('disconnected',()=>{
    console.log("mongo db disconnected");
})
db.on('error',(err)=>{
    console.log("mongo db got error : ",err);
})

module.exports = db;