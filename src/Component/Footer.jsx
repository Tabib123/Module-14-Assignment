import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container f-container">
                <h1 className="f-h">WEB LOGO</h1>
                <h6 className="f-p">Some footer text about the  Agency. Just a little description to help people understand you better</h6>
                <div className="f-button">
                <button className='f-facebook'><FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffffff' }} /></button>
                        <button className='f-twitter'><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} /></button>
                        <button className='f-linkedIn'><FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#ffffff' }} /></button>
                        <button className='f-instagram'><FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} /></button>
                </div>
                <p className="f-c">Copyright Design Agency 2022</p>
                <div className="ql">
                    <div className="ql-h1">Quick Links</div>
                    <br></br>
                        <div className="ql-t">
                            <h6>Services</h6>
                            <br></br>
                            <h6>Portfolio</h6>
                            <br></br>
                            <h6>About Us </h6>
                            <br></br>
                            <h6>Contact Us</h6>
                        </div>
                </div>
                  <div className="f-a">
                    <div className="fa-h">Address</div>
                    <br></br>
                    <div className="fa-p">
                    Design Agency Head Office.<br></br>
                    Airport Road<br></br>
                    United Arab Emirate
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;