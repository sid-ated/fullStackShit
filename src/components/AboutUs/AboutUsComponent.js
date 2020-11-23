import React , {Component} from 'react';
class AboutUs extends Component{
    render(){
        return(
            <div>
                <p> Hey! Sorry for  the inconvenience. Please return back to Home. </p>
                <Button onClick={this.getDisease} color="primary">Predict Disease</Button>
            </div>
        );
    }
}

export default AboutUs;
