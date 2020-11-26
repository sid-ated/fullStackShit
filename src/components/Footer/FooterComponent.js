import React from 'react';
import {Link} from 'react-router-dom'

function Footer (props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/medical_store">Medical Store</Link></li>
                            <li><Link to="/aisuggest">AI Suggest</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                          102, Limbdi Hostel<br />
                          IIT BHU, LANKA<br />
                          Varanasi<br />
                          <i className="fa fa-phone fa-lg"></i>: +91 9956783055<br />
                          <i className="fa fa-fax fa-lg"></i>: +91 8299762082<br />
                          <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                             siddhartha.shukla.cer16@iitbhu.ac.in</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/sidated0/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/shuklasiddhartha/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:siddhartha.shukla.cer16@iitbhu.ac.in"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 aichemist</p>
                        <p>Created by Siddhartha and Robin</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Footer;
