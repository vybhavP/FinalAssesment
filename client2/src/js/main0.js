var React=require('react');
var ReactDOM=require('react-dom');

var MainComp=React.createClass({

  render:function(){
    return(
      <h1>hello</h1>
    );
  }
})
ReactDOM.render(<MainComp/>,document.getElementById('app'));
