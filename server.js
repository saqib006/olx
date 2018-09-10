const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const post = require('./routes/post');
const path = require('path');
const app = express();
const userRouter = require('./routes/user');
const adsRouter = require('./routes/ads');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const uuid = require('uuid')




mongoose.connect('mongodb://saqib:saqib123@ds133152.mlab.com:33152/olxapp')
mongoose.connection.once('open',()=>{
  console.log('connection starting')
}).on('error', (error)=>{
  console.warn('connection error', error)
})

app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

/*app.use(express.static('client/build'));
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});*/


app.use(express.static(path.join(__dirname + '/uploads')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});


app.use(cookieParser())
app.use(session({
  secret: 'helloworld',
  key:'user_sid',
  resave:false,
  saveUninitialized:true
}))




app.use('/api/post', post);
app.use('/user', userRouter);
app.use('/ads', adsRouter);





app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);