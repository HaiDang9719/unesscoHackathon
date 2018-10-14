var express = require('express');
var router = express.Router();
var User=require('../models/user');
var jwt=require('jsonwebtoken');
var url=require('url');
var loggedin = function (req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/signin')
    }
  }

router.get('/', function(req,res,next){
    res.render('index',{title:"welcome to Klima Kage"});
});

router.get('/signup', function(req,res,next){
    res.render('signup',{title:"Klima Kage || Sign Up"});
});

router.get('/signin', function(req,res,next){
    res.render('signin',{title:"Klima Kage || Sign In"});
});

router.get('/home',function(req,res,next){
    res.render('home',{title:"Klima Kage || Home", user:req.user});
});

router.get('/chatbox',function(req,res,next){
  res.render('chatbox',{title:"Klima Kage || Chatbox", user:req.user});
});

router.get('/newDetail',function(req,res,next){
  res.render('newDetail',{title:"Klima Kage || New Detail", user:req.user});
});

router.get('/newDetail2',function(req,res,next){
  res.render('newDetail2',{title:"Klima Kage || New Detail", user:req.user});
});

router.get('/profile',function(req,res,next){
   res.render('profile',{title:"Klima Kage || Profile"});
})

router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
router.get('/resetPassword',function(req, res)
{
    res.render('reset',{ title:"Klima Kage || Reset Password"})
})

router.get('/news',function(req,res,next){
    res.render('news',{title:"Klima Kage || Technical support"});
});
router.get('/setPassword', function(req,res){
    var q=url.parse(req.url,true).query;
  var text= jwt.verify(q.token,'passwordtoken');
 // res.send(text)
  res.render('setPassword',{title:"Klima Kage || Set New Password",user:text})
})
router.get('/about',function(req,res,next){
    res.render('about',{title:"Klima Kage || About us"});
});



module.exports = router;
