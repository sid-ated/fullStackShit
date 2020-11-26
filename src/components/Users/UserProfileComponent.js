import React, {Component} from 'react';
import {Button} from 'reactstrap';

class UserProfile extends Component{
    render(){
        return(
            <div>
                <p> Hey {this.props.auth.user.username}!</p>
                <p>Your password is: {this.props.auth.user.password}</p>
                <p> We are still designing your profile</p>
            </div>
        );
    }
}

export default UserProfile;
