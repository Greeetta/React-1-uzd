import React from 'react';

const Skaiciai= ()=>{
  const skaicius1 = 14;
  const skaicius2 = 8;
  const skaicius3 = 21;

  function rastiDidziausia(a, b, c) {
    return Math.max(a, b, c);
  }

  function rastiMaziausia(a, b, c) {
    return Math.min(a, b, c);
  }

  function skaiciuotiVidurki(a, b, c) {
    return ((a + b + c) / 3).toFixed(2);
  }

  const didziausias = rastiDidziausia(skaicius1, skaicius2, skaicius3);
  const maziausias = rastiMaziausia(skaicius1, skaicius2, skaicius3);
  const vidurkis = skaiciuotiVidurki(skaicius1, skaicius2, skaicius3);

  return (
    <div>
      <h2>Skaičių analizė</h2>

      <p>Skaičius 1: <strong>{skaicius1}</strong></p>
      <p>Skaičius 2: <strong>{skaicius2}</strong></p>
      <p>Skaičius 3: <strong>{skaicius3}</strong></p>

      <div>
        <p>Didžiausias: <strong>{didziausias}</strong></p>
        <p>Mažiausias: <strong>{maziausias}</strong></p>
        <p>Vidurkis: <strong>{vidurkis}</strong></p>
      </div>
    </div>
  );
}

export default Skaiciai;
