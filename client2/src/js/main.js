var React=require('react');
var ReactDOM=require('react-dom');

var {browserHistory,Route,Router,IndexRoute}= require('react-router');

var NavBar=require('./component/NavBar');
var About=require('./component/About');
var Home=require('./component/Home');
var ViewForm=require('./component/ViewForm');
var MainComp=React.createClass({
  render: function(){
    return(
    <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
    </div>
   );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainComp}>
    <Route path="/home" component={Home}/>
    <IndexRoute component={Home}/>
    <Route path="/about/:aboutName" component={About}/>
    <Route path="/viewform" component={ViewForm}/>
    </Route>
  </Router>,
  document.getElementById('app'));
