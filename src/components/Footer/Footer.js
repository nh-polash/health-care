import React from 'react';
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="text-light">Join Us</h2>
            <>
            <Button href="https://www.facebook.com/groups/programmingHero">FaceBook</Button>
            </>
        </div>
    );
};

export default Footer;