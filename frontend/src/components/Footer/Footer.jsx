import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo2} alt="" />
            <p>At Munch. , we connect you with the best dishes in your area, offering a variety of flavors to suit every taste. Whether it’s a quick meal or a special occasion, we’re here to make your dining experience unforgettable.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>OUR COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
                <li>+1-865-637-8027</li>
                <li>contact@munch.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Munch.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
