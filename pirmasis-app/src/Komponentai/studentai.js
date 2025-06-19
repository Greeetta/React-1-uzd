import React from 'react';

const Studentai= () =>{
  const studentas1 = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 21,
    pazymiai: [8, 7, 9],
  };

  const studentas2 = {
    vardas: 'Ieva',
    pavarde: 'Ievaitytė',
    amzius: 22,
    pazymiai: [6, 5, 7],
  };

  function rastiVyresni(studentas1, studentas2) {
    return studentas1.amzius > studentas2.amzius ? studentas1.vardas : studentas2.vardas;
  }

  function rastiMazesniVidurki(studentas1, studentas2) {
    const vidurkis1 = studentas1.pazymiai.reduce((a, b) => a + b, 0) / studentas1.pazymiai.length;
    const vidurkis2 = studentas2.pazymiai.reduce((a, b) => a + b, 0) / studentas2.pazymiai.length;

    return vidurkis1 < vidurkis2 ? studentas1.vardas : studentas2.vardas;
  }

  const vyresnis = rastiVyresni(studentas1, studentas2);
  const mazesnioVidurkio = rastiMazesniVidurki(studentas1, studentas2);

  return (
    <div>
      <h2>Studentų informacija</h2>

      <div>
        <h3>Studentas 1:</h3>
        <p>{studentas1.vardas} {studentas1.pavarde}, {studentas1.amzius} m.</p>
        <p>Pažymiai: {studentas1.pazymiai.join(', ')}</p>
      </div>

      <div >
        <h3>Studentas 2:</h3>
        <p>{studentas2.vardas} {studentas2.pavarde}, {studentas2.amzius} m.</p>
        <p>Pažymiai: {studentas2.pazymiai.join(', ')}</p>
      </div>

      <div>
        <p>Vyresnis studentas: <strong>{vyresnis}</strong></p>
        <p>Mažesnio vidurkio studentas: <strong>{mazesnioVidurkio}</strong></p>
      </div>
    </div>
  );
}

export default Studentai;
