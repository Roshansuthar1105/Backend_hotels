const mongoos = require('mongoose');
const personSchema = mongoos.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager']
    },
    mobile:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    address:{
        type : String,
    },
    salary:{
        type : Number,
        required:true
    }
});
const Person = mongoos.model('Person',personSchema);
module.exports = Person;