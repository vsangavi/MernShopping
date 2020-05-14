const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
require("dotenv").config();
const PORT=process.env.PORT||5000;
app.use(bodyparser.json());
//routers
const userRouter=require('./routes/userroute');
app.use('/userroute',userRouter);
const newuserrouter=require('./routes/newuserroute');
app.use('/newuserrouter',newuserrouter);
//mongodb connections
const db=process.env.mongoURI;
mongoose.connect(db, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}, () => {
  console.log('Connected to DB');
  app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => console.log(err));
module.exports= app;


