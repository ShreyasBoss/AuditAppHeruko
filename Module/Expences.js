const mongoose = require('mongoose');
const expenceSchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    DateOfExpence:{
        type:Date,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    Description:String
})
module.exports=mongoose.model("Expences",expenceSchema);