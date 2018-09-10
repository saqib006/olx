const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})



module.exports = User = mongoose.model('user', UserSchema);

/*UserSchema.pre('save', (next)=>{
    let user = this;
    bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err){
            return next(err)
        }
        user.password = hash;
        next();
    })
})*/