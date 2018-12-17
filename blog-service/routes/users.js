// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

var User = require('../models/User');// 引入模型

// router.get('/',function(req,res,next){
//     // res.render('login');
//     res.send('yo')
// });
// router.post('/api/users/register',function(req,res,next){
//     console.log(req.body)
// })
router.post('/submit',(req,res,next)=>{
//  var user = new User({
//      username:'admin',
//      password:'123'
//  });
//  user.save((err)=>{ //添加
//      console.log('save status:', err ? 'failed' : 'success');
//  });

//  User.find({ //查找
//      username:'admin',
//      password:'123'
//  },(err, docs)=>{
//      if(err){
//          res.send('server or db error');
//      }else{
//          console.log('登录成功用户：'+docs);
//          if(docs.length==0){
//              res.send('用户名或密码有误');
//          }else{
//              req.session.user = {
//                  _id:docs[0]._id,
//                  username:docs[0].username
//              };
//              res.send('login success');
//          }
//      }
//  });

    User.findOne({ //查找一条
        username:'admin',
        password:'123'
    },(err, doc)=>{
        if(err){
            res.send('server or db error');
        }else{
            console.log('登录成功用户：'+doc);
            if(doc==null){
                res.send('用户名或密码有误');
            }else{
                req.session.user = {
                    _id:doc._id,
                    username:doc.username
                };
                res.send('login success');
            }
        }
    })

});

module.exports = router;
