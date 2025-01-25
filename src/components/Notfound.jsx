import React from 'react';
import frame from '../../Imgs/Frame (1).png';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div className="not">
      <div className="not-box">
        <h2 className="not-title">404</h2>
        <img src={frame} alt="" className="not-img" />
        <Link to={'/'} className="not-link">
          <button className="not-btn">
            <i class="bx bx-arrow-back"></i> Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
