const Schema=mongoose.Schema;
const Userschema=new Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  }
});
const User=mongoose.model("User",Userschema);
module.exports.User=User;