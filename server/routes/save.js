var express = require('express');
var router = express.Router();

var Emp=require('../model/employee');
router.post('/',function(req,res,next){
  var data=req.body;

  var change=new Emp(req.body);

  change.save(function(err){
    if(err){
      return handleError(err);
    }
    else{
      console.log("saved to DataBase");
    }
  });
  });

  router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  Emp.find(function(err,data){
  if(err)
  {
  console.log("error");
  }
  else {
   res.json(data);

  }
  });



  });

module.exports = router;
