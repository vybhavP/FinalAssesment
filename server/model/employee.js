var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//creating schema

var emp=new Schema({
  wave:String,
  name:String,
  email:String,
  phno:String,
  giturl:String,
  empcode:String,
  empdesig:String,
  skills:String,
  exp:String,
})

module.exports=mongoose.model('Employee',emp);
