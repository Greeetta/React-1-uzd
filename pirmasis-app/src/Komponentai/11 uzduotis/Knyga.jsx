
// priima props (knygos objektą)
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų

import React from 'react';

const Knyga = ({ knyga }) => {
  const { pavadinimas, autorius, kaina, metai } = knyga;

  let klase = "";
  if (kaina > 30) {
    klase = "knyga brangi";
  } else if (kaina >= 10 && kaina <= 30) {
    klase = "knyga kainuoja vidutiniškai";
  } else {
    klase = "knyga pigi";
  }

  return (
    <div>
      <p><strong>Pavadinimas:</strong> {pavadinimas}</p>
      <p><strong>Autorius:</strong> {autorius}</p>
      <p><strong>Kaina:</strong> {kaina} €</p>
      <p><strong>Metai:</strong> {metai}</p>
      <p>{klase}</p>
    </div>
  );
};

export default Knyga;
