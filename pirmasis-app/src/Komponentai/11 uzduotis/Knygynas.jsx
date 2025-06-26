  // susikurkite tris atskirus knygų objektus
  // su informacija
  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus

import React from 'react';
import Knyga from './Knyga';

const Knygynas = () => {
  const knyga1 = {
    pavadinimas: "Alchemikas",
    autorius: "Paulo Coelho",
    kaina: 8.99,
    metai: 1995
  };

  const knyga2 = {
    pavadinimas: "Sapiens",
    autorius: "Yuval Noah Harari",
    kaina: 24.5,
    metai: 2015
  };

  const knyga3 = {
    pavadinimas: "React: Išsamiai",
    autorius: "John Smith",
    kaina: 45,
    metai: 2022
  };

  return (
    <div>
      <h1>Knygų sąrašas</h1>
      <Knyga knyga={knyga1} />
      <Knyga knyga={knyga2} />
      <Knyga knyga={knyga3} />
    </div>
  );
};

export default Knygynas;