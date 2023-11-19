// Importuj potrzebne komponenty i style
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo4 from './assets/logo4.png';

export const Results = () => {
  return (
    <div>
      <div className='mainframe'>
        <img className="img-m" src={logo4} alt="logo" style={{ width: 'auto', height: '70px' }} />
        <h2 style={{ marginLeft: '20px' }}>SkyHunt.</h2>
      </div>

      {/* zrobic z tego klase w css */}
      <div style={{ backgroundColor: 'rgba(255, 190, 50, 1)', height: '80px', width: '100%' }}>
        {/* Zawartość pomarańczowego prostokąta o wysokości 60 px */}
      </div>
    </div>
  );
};

export default Results;
