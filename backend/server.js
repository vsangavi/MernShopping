const express=require('express');
const app=express();
const mongoose=require('mongoose');
var PORT=5000;
mongoose.connect('mongodb+srv://root:root1234@clustershop-x5xyj.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}, () => {
  console.log('Connected to DB');
  app.listen({ port: PORT }, () => {
      console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch(err => console.log(err));

