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
  console.log(username)
  
  var URL = 'mongodb://localhost:14701/user';
  var db = mongoose.createConnection(URL);
  var Schema = new mongoose.Schema({
      username: String,
      password: String
  });
  var User = db.model('goods',Schema);
  User.find({}, function (err, data) {
    console.log(err,data)
      if(!data) {
        res.json({
          code:404,
          error:"用户名不存在"
        }) 
        return;
      }
      if(data.password === password){
          req.session.user = {username: username};
          res.redirect('/');
          res.json({
            code:200,
            token:5848484848
          }) 
          return
      }
      res.json({
        code:404,
        error:"用户名或密码不正确"
      }) 
  })
  
});

module.exports = router;
