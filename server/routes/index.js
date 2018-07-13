var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var URL = 'mongodb://localhost:14701/user';
  var db = mongoose.createConnection(URL);
  var Schema = new mongoose.Schema({
      username: String,
      password: String
  });
  var User = db.model('goods',Schema);
  User.findOne({username:username}, function (err, data) {
    console.log(err,data)
      if(!data) {
        res.json({
          state:0,
          error:"用户名不存在"
        }) 
        return;
      }
      if(data.password === password){
        req.session && (req.session.user = {username: username}); 
          res.json({
            state:1,
            token:data.username
          }) 
          return
      }
      res.json({
        state:0,
        error:"密码不正确"
      }) 
  })
  
});
router.post('/result', function(req, res, next) {
  var contion = req.body.user ? {user:req.body.user}:{};
  var URL = 'mongodb://localhost:14701/user';
  var db = mongoose.createConnection(URL);
  var Schema = new mongoose.Schema({
      user: String
  });
  var Templates = db.model('templates',Schema);
  Templates.find(contion, function (err, data) {
    if(data && data.length >=0 ) {
      res.json({
        state:1,
        data:data
      }) 
    }else{
      res.json({
        state:0,
        data:"请求异常"
      }) 
    } 
  })
  
});

module.exports = router;
