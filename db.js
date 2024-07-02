const mongoose = require('mongoose');
require('dotenv').config();
// const mongoUrl = process.env.LOCAL_URL;
// const mongoUrl1 = 'mongodb://127.0.0.1:27017/hotels';
// const mongoUrl = 'mongodb+srv://roshansuthar2023:roshan7878@hotelswebpage.f3kxvoa.mongodb.net/'
const mongoUrl = process.env.DB_URL;
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