const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Newuserschema=new Schema({
  name:{
    type:String,
    maxlength:50 
   },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  mobile:{
   type:Number
  }
});
const Newuser=mongoose.model("Newuser",Newuserschema);
module.exports=Newuser;