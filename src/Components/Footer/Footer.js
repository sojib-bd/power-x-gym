import React from 'react';
import './Footer.scss';
import fb from './SocialMediaImages/bxl-facebook.png';
import insta from './SocialMediaImages/bxl-instagram.png';
import twt from './SocialMediaImages/bxl-twitter.png';
import what from './SocialMediaImages/bxl-whatsapp.png';
import ytb from './SocialMediaImages/bxl-youtube.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top">
                <h1>POWER <span style={{ color: 'gold' }}>X</span></h1>
                <div className="support">
                    <ul>
                        <li><strong>Need Help?</strong></li>
                        <li>Help Center</li>
                        <li>Email Support</li>
                        <li>Live Chat</li>
                        <li>Gift Certificate</li>
                        <li>Send us Feedback</li>
                    </ul>
                </div>
                <div className="resource">
                    <ul>
                        <li><strong>Digital Resources</strong></li>
                        <li>Articles</li>
                        <li>E-books</li>
                    </ul>
                </div>
                <div className="contact">
                    <ul>
                        <li><strong>Contact with us</strong></li>
                        <li>
                            <img src={fb} alt="" />
                            <img src={insta} alt="" />
                            <img src={twt} alt="" />
                            <img src={what} alt="" />
                            <img src={ytb} alt="" />
                        </li>
                        <li>Forum</li>

                    </ul>
                </div>
                <div className="newsletter">
                    <ul>
                        <li><strong>Join our Newsletter</strong></li>
                        <li>Get exclusive news and features and update from our academy</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p><small>@Md.Rahmatuzzama. All Rights are reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;