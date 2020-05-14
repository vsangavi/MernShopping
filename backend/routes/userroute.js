const express=require('express');
const router=express.Router();
const User=require('../models/userschema');
/*router.get('/',(req,res)=>{
User.find()
.then(userroute=>res.json(userroute))
.catch(Error=>console.log(Error))

});*/
router.post('/',(req,res)=>{
  console.log(req.body.name);
const useritem=new User({
  email:req.body.name,
  password:req.body.password
});

useritem.save()
.then(user=>res.json({user}))
.catch(err=>res.json({err}))

});

module.exports=router;