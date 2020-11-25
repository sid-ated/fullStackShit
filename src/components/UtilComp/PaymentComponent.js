import {React, Component} from 'react';
import {Button} from 'reactstrap';

class Payment extends Component{
    render(){
        return(
            <div>
                <p> Make the payment with Razorpay.</p>
                <Button color="primary">Pay</Button>
            </div>
        );
    }
}

export default Payment;
