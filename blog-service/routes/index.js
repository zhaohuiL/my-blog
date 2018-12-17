var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Cookies = require('cookies')

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.send('home')
// });

//注册
router.post('/api/register', function (req, res, next) {
  console.log(req.body)
  let { password, confirm, prefix} = req.body;
  let user = new User({
    name:req.body.mail, 
    password, 
    confirm, 
    prefix, 
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    notifyCount: 12
  })
  // console.log(user)
  const userName = req.body.name
  const updatestr = {name:userName}
  req.cookies = new Cookies(req,res)
  User.find(updatestr,(err,obj) => {
    if(err){
      res.send('server or db error')
    }else{
      if(obj.length == 0){
        user.save((err) => {
          if(err){
            res.send(err)
          }else{
            req.cookies.set('userInfo',JSON.stringify(user))
            res.send({status:'ok',currentAuthority:'user'})
            return;
          }
        })
      }else{
        res.send({status:'404'})
      }
    }
  })
});

//获得登陆用户信息
router.get('/api/currentUser',(req,res,err) => {
  return res.send(req.cookies.userInfo);
  // return res.cookie(prop, '', {expires: new Date(0)});
})

//登陆
router.post('/api/login/account',(req,res) => {
  console.log(req.body)
  let userPassword = req.body.password
  let userName = req.body.userName
  let userObj = {name:userName}
  let user ={
    name:userName,
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
  }
  req.cookies = new Cookies(req,res)
  User.find(userObj,(err,obj) => {
    if(err){
      return res.send('server or db error')
    }else{
      if(obj.length == 0){
        return res.send('账户不存在')
      }else{
        if(userPassword === obj[0].password){
          req.cookies.set('userInfo',JSON.stringify(user))
          return res.send({status:'ok',currentAuthority:'user'})
        }else{
          return res.send('密码错误');
          
        }
      }
    }
  })
})

//图片上传
router.post('/api/imgupload',(req,res,err) => {
  console.log(req.body)
  return res.send('yo')
})
module.exports = router;