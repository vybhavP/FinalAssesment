var React=require('react');

var viewForm=React.createClass({
  getInitialState:function(){
      return({empID:"0"});
  },
getDetails:function(){
    this.setState({empID:this.props.empID});
    console.log(empID);
},
viewFromDB:function(){
  $.ajax({
     url: '/viewDetails',
     dataType: 'json',
     contentType: "application/json",
     type: 'PUT',
     data: JSON.stringify({"empID":this.state.empID}),
     async:false,
  });
},
  render:function()
  {

    return(
      <div>
      <div className="col-md-3">
      </div>
        <div className="col-md-3">
        <form>
          <div className="form-group">
            <label for="empID">FindByEmpID:</label>
            <input type="text" className="form-control" id="empID" onChange={this.getDetails}/>
            <input type="submit" className="btn btn-success" value="getDETAILS" onClick={this.viewFromDB}/>
          </div>
        </form>
        </div>
      </div>
    );
  },

});
module.exports=viewForm;
