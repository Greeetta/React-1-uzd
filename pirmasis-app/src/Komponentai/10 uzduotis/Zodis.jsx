import React from 'react'

// šis komponentas turi priimti props
const Zodis = ({zodis}) => {
  const ilgis = zodis.length;
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  return (
    <div>
      <p><p>Zodis:</p> {zodis}</p>
      <p><p>Ilgis:</p>{ilgis} simboliai</p>
    </div>
    
  );
};

export default Zodis;