import React from 'react';

const ZodziuLentele = ({ zodziai }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Žodis</th>
          <th>Simbolių kiekis</th>
        </tr>
      </thead>
      <tbody>
        {zodziai.map((zodis, index) => (
          <tr key={index}>
            <td>{zodis}</td>
            <td>{zodis.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ZodziuLentele;
