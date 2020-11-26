import React, {Component} from 'react';
import {Button} from 'reactstrap';

class Cart extends Component{
    render(){
        return(
            <div>
                <p>Hey {this.props.auth.user.username}! Here is your cart...</p>
                <Button color="primary">Check Out</Button>
            </div>
        );
    }
}

export default Cart;
