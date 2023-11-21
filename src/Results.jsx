// Wyniki wyszukiwania lotów po wpisaniu odpowiednich danych do formularza na stronie Mainp.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo4 from './assets/logo4.png';

export const Results = () => { //przekazać PROPS jako argument, będzie to lista lotów z bazy spełniająca zadane wymagania, przekazana z Mainp.jsx
  return (
    <div>
      <div className='mainframe'>
        <img className="img-m" src={logo4} alt="logo" style={{ width: 'auto', height: '70px' }} />
        <h2 style={{ marginLeft: '20px' }}>SkyHunt.</h2>
      </div>

      {/* zrobic z tego klase w css */}
      <div style={{ backgroundColor: 'rgba(255, 190, 50, 1)', height: '80px', width: '100%' }}>
      </div>
    </div>
  );
};

export default Results;
