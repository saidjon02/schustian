import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const handleSubscribe = () => {
    window.location.href =
      'https://www.youtube.com/channel/UCiCcA49h_8ahephOQfxldhA?sub_confirmation=1';
  };
  return (
    <div className="footer">
      <h2 className="footer-title">
        <Link onClick={handleSubscribe}>Subscribe to my channel.</Link>
      </h2>
    </div>
  );
}

export default Footer;
