import React from 'react';

const Samp = ({ sName, img, bg }) => {
  return (
    <div style={{ backgroundColor: bg, padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{sName}</h3>
      <img src={img} alt={sName} style={{ width: '200px', height: '300px' }} />
    </div>
  );
}

export default Samp;
