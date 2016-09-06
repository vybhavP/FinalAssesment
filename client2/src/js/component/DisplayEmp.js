var React=require('react');
var DisplayEmp=React.createClass({
  render:function (){
      //console.log(this.props.bd);
      return(
        <div className="list-group-item">

        <div className="container-fluid">
           <div className="row">
               <div className="col-lg-1">
          {this.props.wave}
               </div>
               <div className="col-lg-1">
              {this.props.name}
                   </div>
               <div className="col-lg-1">
             {this.props.email}
               </div>
               <div className="col-lg-1">
          {this.props.phno}
               </div>
               <div className="col-lg-1">
              {this.props.giturl}
                   </div>
               <div className="col-lg-1">
             {this.props.empcode}
               </div>
               <div className="col-lg-1">
          {this.props.empdesig}
               </div>
               
               <div className="col-lg-1">
             {this.props.skills}
               </div>
               <div className="col-lg-1">
          {this.props.exp}
               </div>

           </div>
        </div>
    </div>

      );
    }
});
module.exports=DisplayEmp
