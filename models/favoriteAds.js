const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaveAds = new Schema({
    userId:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    }
})

module.exports = Favorite = mongoose.model('favorite', SaveAds);