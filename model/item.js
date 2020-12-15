const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        // max:10,
        // min:10,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    AdmitNum:{
        type:Number,
        min:4000,
        required:true
    },
    Hobbies:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
        required:true
    },

})

module.exports = item = mongoose.model('student',itemSchema)