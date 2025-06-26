import React from "react";

const PrekiuSarasas = ()=> {
    const prekes = [
        {id: 1, kodas: "PRK001", pavadinimas: "Obuolys", kaina: 5, savikaina: 3, kiekis: 10},
        {id: 2, kodas: "PRK002", pavadinimas: "Kriaušė", kaina: 10, savikaina: 5, kiekis: 25},
        {id: 3, kodas: "PRK003", pavadinimas: "Bananas", kaina: 7, savikaina: 6, kiekis: 25},
        {id: 4, kodas: "PRK004", pavadinimas: "Arbūzas", kaina: 3, savikaina: 2, kiekis: 35},
        {id: 5, kodas: "PRK005", pavadinimas: "Avokadas", kaina: 2, savikaina: 1, kiekis: 70}
]

const brangiausiaPreke = () =>
    prekes.reduce((max, prekes)=> (prekes.kaina > max.kaina ? prekes: max))

const pigiausiaPreke = () =>
    prekes.reduce((min, prekes)=> (prekes.kaina < min.kaina ? prekes : min))

const vidutineKaina = ()=>{
    const sum = prekes.reduce((acc, p)=> acc + p.kaina, 0);
    return (sum / prekes.length).toFixed(2);
};

const pelnas = (prekes) =>{
    return (prekes.kaina - prekes.savikaina) * prekes.kiekis;
};
// <thead> - yra HTML elemento žyma, naudojama lentelės (<table>) antraštės eilutėms apibrėžti. Ji grupuoja visų lentelės stulpelių pavadinimus (antraštes). 
// <tbody> - pagrindinis turinys.
//<tfoot> - poraštė.
//<tr> - žymi eilutę.
//<td> - žymi paprastą langelį.
return(
    <div>
        <h1>Prekių sąrašas</h1>
        <table>
            <thead> 
            <tr>
            <th>ID</th>
            <th>Kodas</th>
            <th >Pavadinimas</th>
            <th>Kaina (€)</th>
            <th>Savikaina (€)</th>
            <th>Kiekis</th>
            <th>Galimas pelnas (€)</th>
          </tr>
            </thead>
            <tbody>
            {prekes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.kodas}</td>
              <td>{p.pavadinimas}</td>
              <td>{p.kaina}</td>
              <td>{p.savikaina}</td>
              <td>{p.kiekis}</td>
              <td>{pelnas(p)}</td>
            </tr>
          ))}  
            </tbody>
        </table>
        <div>
        <p><strong>Brangiausia prekė:</strong> {brangiausiaPreke().pavadinimas}</p>
        <p><strong>Pigiausia prekė:</strong> {pigiausiaPreke().pavadinimas}</p>
        <p><strong>Kainų vidurkis:</strong> {vidutineKaina()} €</p>
      </div>
    </div>
  );
};

export default PrekiuSarasas;