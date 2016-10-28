var React = require('react');
var ReactDOM = require('react-dom');
global.jQuery = require('jquery');
require('bootstrap');
import { hashHistory } from 'react-router'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: { name:null,pass:null}};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }

   handleChangeName(event) {
     this.setState(
       {
        user:
          { name: event.target.value,
            pass: this.state.user.pass 
          }
      });  
  }

  handleChangePass(event) {
    this.setState(
       {
        user:
          { name: this.state.user.name,
            pass: event.target.value
          }
      });  
     
  }

  handleSubmit(){
    alert('Save: ' + this.state.user.name + ',' + this.state.user.pass);
    hashHistory.push('/test');
  }


  render(){
    return (<div className="row">
        <div className="col-md-4 col-md-offset-7">
            <div className="panel panel-default" >
                <div className="panel-heading"> <strong className="">Login</strong>
                </div>
            </div> 
            <div className="panel-body">
              <form className="form-horizontal" role="form" name="formLogin">
                <div className="form-group">
                    <label  className="col-sm-3 control-label">Username</label>
                    <div className="col-sm-9">
                        <input type="text" name="username" 
                        className="form-control" id="inputEmail3" 
                        placeholder="Username"  
                        value={this.state.name}  
                        required
                        onChange={this.handleChangeName}/>
                    </div>
                </div>
                <div className="form-group">
                    <label  className="col-sm-3 control-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" 
                        name="password" id="inputPassword3" 
                        placeholder="Password"  
                        value={this.state.pass} 
                        required
                        onChange={this.handleChangePass}/>
                    </div>
                </div>
                <div className="form-group last">
                  <div className="col-sm-offset-3 col-sm-9">
                      <button type="submit" className="btn btn-success btn-sm"
                       onClick={this.handleSubmit}>Sign in</button>
                  </div>
               </div>    
              </form>
            </div> 
        </div>
    </div>
    )
  }
}

ReactDOM.render(<Login />, document.getElementById('root'));

export default Login;