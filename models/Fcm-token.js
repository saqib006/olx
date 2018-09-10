const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    fcmToken:{
        type:String,
        required:true
    },
    
    createdAt:{type:Date, default:Date.now()},

});


module.exports = Token = mongoose.model('token', PostSchema);