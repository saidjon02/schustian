import React, { useState } from 'react';
import logo from '../../Imgs/Group 1 (1).png';
import { Link, NavLink } from 'react-router-dom';
import 'boxicons';
function Header() {
  const handleSubscribe = () => {
    window.location.href =
      'https://www.youtube.com/channel/UCiCcA49h_8ahephOQfxldhA?sub_confirmation=1';
  };
  const [pop, setPop] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="head-row">
          <div className="head-box dfhead">
            <img
              width="auto"
              height="auto"
              className="logo"
              onClick={handleSubscribe}
              src={logo}
              alt=""
            />
            <i class={pop ? 'bx bx-x' : 'bx bx-menu'} onClick={() => setPop(!pop)}></i>
          </div>
          <div className="head-box2">
            <NavLink to={'/'} className="head-links">
              Home
            </NavLink>
            <NavLink to={'/asdf'} className="head-links">
              About me
            </NavLink>
            <NavLink to={'/asdf'} className="head-links">
              Portfolio
            </NavLink>
            <NavLink to={'/asdf'} className="head-links">
              Contact
            </NavLink>
          </div>
          <div className={pop ? 'head-box head-box3 activethis' : 'head-box head-box3'}>
            <button className="head-btn" onClick={handleSubscribe}>
              Subscribe to my channel.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
