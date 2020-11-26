import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Cart extends Component{
    render(){
        return(
            <div>
                <p>Hey {this.props.auth.user.username}! Here is your cart...</p>
                <Button color="primary"><Link to="/payment" style={{color: '#FFF' }}>Check Out</Link></Button>
            </div>
        );
    }
}

export default Cart;
