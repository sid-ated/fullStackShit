import React, {Component} from 'react';
import PayApp from './PayApp';
class Payment extends Component{
    render(){
        return(
            <div>
                <p> Make the payment with Razorpay.</p>
                <PayApp auth={this.props.auth}/>
            </div>
        );
    }
}

export default Payment;
