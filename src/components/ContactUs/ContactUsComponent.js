import React , {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class ContactUs extends Component{
    render(){
        return(
            <div>
                <p> Hey! Sorry for the inconvenience. Please return back to Home. </p>
                <Button color="primary"><Link to="/home" style={{color: '#FFF' }}>Home</Link></Button>
            </div>
        );
    }
}

export default ContactUs;
