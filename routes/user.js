const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{


    bcrypt.hash(req.body.password, 10).then(function(hash) {
        const newUser = new User ({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })

        newUser.save().then(user=>{

            const userInfo = {
                _id:user._id,
                email:user.email,
                username:user.username
                
            }
                res.json(userInfo)
           

            
        })
    });

    
})

router.post('/signin', (req, res, next)=>{


    
        const userInfo = {
            email:req.body.email,
            password:req.body.password,
        }

       
        User.findOne({email:userInfo.email})
        .exec((err, user)=>{
            if(err){
                return next(err)
            }
            else if(!user){
                let err = new Error('User Not Found')
                err.status = 401
                return next(err)
            }

            bcrypt.compare(userInfo.password, user.password, (err, result)=>{
                if(result === true){
    
                    const userInfo = {
                        username:user.username,
                        email:user.email,
                        id:user._id,
                    }

                    
        
                    jwt.sign({userInfo}, 'helloworld', (err, token)=>{
                        res.json({userInfo, token})
                    })     
                }
                else{
                    return next();
                }
            })
        })
       
})



router.post('/session', (req, res, next)=>{
 
        var token = req.body.token;
        var decoded = jwt.decode(token, {complete: true});
        res.json(decoded.payload)    
           
})


var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }

router.get('/logout', (req, res, next)=>{
    if(req.session){
        
        req.session.destroy((eror)=>{
            return next(eror)
        })
    }
    else{
        return res.redirect('/')
    }
})

module.exports = router;