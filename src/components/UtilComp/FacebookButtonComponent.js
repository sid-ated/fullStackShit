import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends Component{

	 constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      datafetched: false,
	      data: []
	    };
	    this.responseFacebook = this.responseFacebook.bind(this);
	  }
	  
	  componentDidMount() {
	      const url = "https://aichemist-server.herokuapp.com/users";
	      fetch(url)
	      .then((resp) => resp.json()) 
	      .then(
	        (response) =>{
	           this.setState({
	             dataFetched: true,
	             data: response
	           });
	        },
	        (error) => {
	           this.setState({
	              dataFetched: true,
	              error: error
	           });
	        }
	      )
	  }
	  
	  responseFacebook (response) {
		  const theusername = response.email
		  const thepassword = response.email
		  var idx = this.state.data.findIndex(user => user.username === theusername && user.password === thepassword)
		  if(idx===-1){
		     this.props.registerUser({username: theusername, password: thepassword});
		  }
		  else{
		     this.props.loginUser({username: theusername, password: thepassword});
		  }
          }
	
	componentClicked = (event) => {
	  alert("redirecting to Facebook");
	}
	
    render(){
        return(
            <div>
                <FacebookLogin
		    appId="693441821599648"
		    autoLoad={true}
		    fields="name,email,picture"
		    onClick={this.componentClicked}
		    callback={this.responseFacebook} 
		 />
            </div>
        );
    }
}

export default FacebookButton;
