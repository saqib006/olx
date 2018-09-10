const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');
const Token = require('../models/Fcm-token');
const Favorite = require('../models/favoriteAds');
const multer = require('multer');
const uuidv4 = require('uuid/v4')
const path = require('path');
const Category = require('../models/Category');
const axios = require('axios');
const FCM = require('fcm-node');
const serverKey = "AAAASIrjad4:APA91bFmGk1Sn0T1Z3wJrSDo4CgyC12WZpe1C6txI3WEpZDBLTj_cm8-X4zdpDLE_9rEkogMKa7U18KVH0IUAbEJvEByJzd1e9YsgcPkFEZtv7DZP5N71_lVRGxBK5jfJT-Maeczstp4";
const fcm = new FCM(serverKey)


const app = express()


const storage = multer.diskStorage({
    destination:(req, file, cb) => {
      cb(null, './uploads')
    },
    filename:(req, file, cb) => {
      const newFileName = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFileName)
    }
  })
  
  const upload = multer({storage});


router.get('/', (req, res)=>{
    Ads.find()
    .then(post =>{
        res.json(post)
    })
})



router.get('/find/:id', (req, res)=>{
    Ads.find({userId:req.params.id})
    .then(post =>{
        res.json(post)
    })
})


var fcm_token = '';

router.post('/fcm', (req,res)=>{

    
    console.log(req.body)
    

})






router.post('/', upload.single('selectedFile'), (req, res)=>{

//console.log(req.body.fcm)

const data = req.body
console.log(data.title)
   /* const newPost = new Ads({
        image:req.file.filename,
        title:data.title,
        category:data.category,
        description:data.description,
        model:data.model,
        year:data.year,
        price:data.price,
        userId:data.userId,
        userName:data.userName
    })
    newPost.save().then((item)=>{
        res.json(item)
    })
*/


    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to : fcm_token,

        //collapse_key: 'your_collapse_key',
        priority : "high",
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };

    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }

        res.json(response)
    });


})


router.post('/saveAds', (req, res)=>{
        const saveAds = new Favorite({
            userId: req.body.userId,
            postId:req.body.postId
        })

        saveAds.save().then((item)=>{
            res.json(item)
        })
})

router.get('/saveAds/:id', (req, res)=>{

    Favorite.find({userId:req.params.id})
    .then(post =>{
        let arr = [];
        post.map((value)=>{
           
           arr.push(value.postId)
        })

        console.log (arr)
        Ads.find({_id:{$in:arr}})
    .then(posts =>{
        res.json(posts)
    })

    })
})


router.delete('/:id', (req, res)=>{
    Ads.findById(req.params.id)
    .then(item=>{
        item.remove().then(()=>{
            res.json({success:true})
        })
    }).catch(err => res.status(404).json({success:false}))
})

router.post('/category', (req, res)=>{
    const newCategory = new Category({
        title:req.body.title
    })
    newCategory.save().then(category=>{
        res.json(category)
    })
})


router.get('/category', (req, res)=>{
    Category.find().then(categories=>{
        res.json(categories)
    })
})


function promiseHandler(model, obj){
  
    
        model.find({obj}).then(result=>{
            return result
        }).catch(error=>{
            return error
        })
    
   
    
}

router.get('/search/:id', (req, res)=>{

    let obj = {
        title:req.params.id
    }
   

  
   Ads.find(obj).then(result=>{
        res.json(result)
    })
})



module.exports = router;