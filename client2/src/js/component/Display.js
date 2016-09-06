var React=require('react');
var DisplayEmp=require('./DisplayEmp');
var Display=React.createClass({

  var msg= this.props.display.map(function(l){

    render:function(){
      //console.log(this.props.p2);

      var msg= this.props.adata.map(function(e){

          return(
    <DisplayEmp wave={e.wave} name={e.name} email={e.email}  phno={e.phno}
      giturl={e.giturl}
      empcode={e.empcode}
      empdesig={e.empdesig}
      edept={e.empdept}
      skills={e.skills}
      exp={e.exp} ></DisplayEmp>
      );


    });
      return(
        <div>
        {msg}
        </div>
      );
    }
   });
module.exports=Display;
