import React from 'react';
import ZodziuLentele from './ZodziuLentele';

const Tevinis = () => {
  const vaisiai = ['Obuolys', 'Bananai', 'Kriause', 'Vynuoge'];
  const gyvunai = ['Suo', 'Katinas', 'Triusis', 'Zirafa'];

  return (
    <div>
      <h2>Vaisiai</h2>
      <ZodziuLentele zodziai={vaisiai} />

      <h2>Gyvūnai</h2>
      <ZodziuLentele zodziai={gyvunai} />
    </div>
  );
};

export default Tevinis;
