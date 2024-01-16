//login.js
const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://ardraks:ardraks@cluster0.irlmcdy.mongodb.net/blog?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const userschema=new sc({
    email:String,
    password:String
});

var usermodel=mongoose.model("login",userschema)
module.exports=usermodel;