import React from 'react';
import '../../assets/style/partner.css';
function Partner({icon,name }) {
  return (
    <button className="partner">
      <img src={icon} className="ic" alt={name} />
    
    </button>
  );
}

export default Partner;
