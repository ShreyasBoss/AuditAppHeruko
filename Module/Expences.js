const mongoose = require('mongoose');
const expenceSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
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
    Description:String,
    InsertedDate:{
        type:Date,
        Default:Date.now()
    }
})
module.exports=mongoose.model("Expences",expenceSchema);