import React from 'react'

// susikurkite ir prijunkite stiliaus failą
// prekių skiltį ir prekių blokelius sustiliuokite,
// pvz kad prekių bloko antraštė būtų per vidurį,
// būtų sudėti paddings, margins ir pan,
// o patys prekių blokeliai būtų 2, 3 ar 4 eilėje

const Komp9 = () => {
  let prekes = [
    { id: 1, pavadinimas: 'Tusinukas', kaina: 2.5, kiekis: 283 },
    { id: 2, pavadinimas: 'Flomesteriai', kaina: 3, kiekis: 103 },
    { id: 3, pavadinimas: 'Sasiuvinys', kaina: 1.2, kiekis: 401 },
    { id: 4, pavadinimas: 'Obuoliai', kaina: 2.2, kiekis: 231 },
    { id: 5, pavadinimas: 'Kriauses', kaina: 2.1, kiekis: 74 },
  ]


  // turite prekių objektų masyvą, visus turimus duomenis
  // atvaizduokite return dalyje

  return (
    <div className='prekiu-wrapper'>
        <h2>Prekės</h2>
        <div className='prekiu-list'>
            {/* šį blokelį (prekes-blokas) kartokite tiek kartų
            kiek turite prekių masyve ir į atitinkamas vietas
            sudėkite reikiamą informaciją */}
            {prekes.map((e)=>{
              return(
            <div className='prekes-blokas'>
                <h3>{e.pavadinimas}</h3>
                <p>Prekė kainuoja: {e.kaina}€</p>
                <p>Jos turime: {e.kiekis} vnt.</p>
            </div>
              )
            })}
            
        </div>
    </div>
)}

export default Komp9