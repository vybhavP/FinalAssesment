var React=require('react');
//var ViewForm=require('./ViewForm');

var Form=React.createClass({

  getInitialState:function(){
      return({wave:"Wave-1",name:"name",email:"email",phno:"phno",giturl:"giturl",empcode:"empcode",empdesig:"empdesig",skills:"skills",exp:"exp",dataArr[]});
  },
  wave1:function(event){
    this.setState({wave:event.target.value});
    console.log(this.state.wave);
  },
  name1:function(event){
    this.setState({name:event.target.value});
    console.log(this.state.name);
  },
  email1:function(event){
    this.setState({email:event.target.value});
    console.log(this.state.email);
  },
  phno1:function(event){
    this.setState({phno:event.target.value});
    console.log(this.state.phno);
  },
  giturl1:function(event){
    this.setState({giturl:event.target.value});
    console.log(this.state.giturl);
  },
  empcode1:function(event){
    this.setState({empcode:event.target.value});
    console.log(this.state.empcode);
  },
  empdesig1:function(event){
    this.setState({empdesig:event.target.value});
    console.log(this.state.empdesig);
  },
  skills1:function(event){
    this.setState({skills:event.target.value});
    console.log(this.state.skills);
  },
  exp1:function(event){
    this.setState({exp:event.target.value});
    console.log(this.state.exp);
  },
  savetoDB:function(){
    $.ajax({
       url: '/save',
       dataType: 'json',
       contentType: "application/json",
       type: 'POST',
       data: JSON.stringify({'wave': this.state.wave,'name':this.state.name,'email':this.state.email,'phno':this.state.phno,
       'giturl':this.state.giturl,'empcode':this.state.empcode,'empdesig':this.state.empdesig,'skills':this.state.skills,'exp':this.state.exp}),
       success: function(data)
       {
         console.log("Success");
         this.setState({dataArr:data});
       }.bind(this),
       async: false,
       error: function(xhr, status, err) {
         console.error("Error.."+err.toString());
       }.bind(this)
      });

},
  render:function()
  {
    return(
	       <div>
            <div className="col-md-3">
            <input type="submit" className="btn btn-primary"/>
            </div>

          <div className="col-md-6">
          <strong>Wave:</strong>

              <select onChange={this.wave1}>
                  <option>SelectYourBatch</option>
                  <option value="Wave-5">Wave-5</option>
                  <option value="Wave-4">Wave-4</option>
                  <option value="Wave-3">Wave-3</option>
                  <option value="Wave-2">Wave-2</option>
                  <option value="Wave-1">Wave-1</option>
              </select>

              <form>

                <div className="form-group">
                  <label for="name">Name:</label>
                  <input type="text" className="form-control" id="name" onChange={this.name1}/>
                </div>

                <div className="form-group">
                  <label for="email">Eamil:</label>
                  <input type="email" className="form-control" type="email" onChange={this.email1}/>
                </div>

                <div className="form-group">
                  <label for="phno">PhoneNumber:</label>
                  <input type="text" className="form-control" id="phno" onChange={this.phno1}/>
                </div>

                <div className="form-group">
                  <label for="giturl">gitURL:</label>
                  <input type="text" className="form-control" id="giturl" onChange={this.giturl1}/>
                </div>

                <div className="form-group">
                  <label for="empcode">EmployeeCode:</label>
                  <input type="text" className="form-control" id="empcode" onChange={this.empcode1}/>
                </div>

                <div className="form-group">
                  <label for="empdesig">EmployeeDesignation:</label>
                  <input type="text" className="form-control" id="empdesig" onChange={this.empdesig1}/>
                </div>

                <div className="form-group">
                  <label for="skills">Skills:</label>
                  <textarea className="form-control" rows="5" id="skills" onChange={this.skills1}></textarea>
                </div>

                <div className="form-group">
                  <label for="exp">Experience:</label>
                  <input type="text" className="form-control" id="exp" onChange={this.exp1}/>
                </div>

              </form>
              <input type="submit" className="btn btn-success" value="submitForm" id="submitForm" onClick={this.savetoDB}/>
            </div>
            <Display display={this.state.dataArr}/>
    	   </div>
    );
  },
  componentDidMount:function(){
    $.ajax({
         url: '/getValues',
         type: 'GET',
         dataType: 'json',
         success: function(response)
         {

          this.setState({dataArr:response});
           console.log(this.state.dataArr);
            console.log("success");
         }.bind(this),
         error: function(xhr, status, err) {
           console.error(err.toString());
         }.bind(this)
       });
  },
  });

module.exports=Form
