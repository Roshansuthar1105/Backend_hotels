const mongoos = require('mongoose');
const MenuSchema = mongoos.Schema({
    name:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['spicy','sweet','sour'],
        required :true
    },
    is_drink:{
        type:Boolean,
        default:true,

    },
    price:{
        type : Number,
        required : true
    },
    ingredients: {
        type :[String],
        default :[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});
const Menu = mongoos.model('Menu',MenuSchema);
module.exports = Menu;