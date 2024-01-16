//Register.js
const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://ardraks:ardraks@cluster0.irlmcdy.mongodb.net/blog?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const Registerschema=new sc({
  username: String,
  email: String,
  password: String,
});

var Registermodel=mongoose.model("register",Registerschema)
module.exports=Registermodel;