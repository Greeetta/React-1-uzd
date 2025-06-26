import React from 'react'
import './Komp8.css'

const Komp8 = () => {
  let preke = {
    kodas: 'BAK364',
    pavadinimas: 'Tusinukas',
    kaina: 2.34,
    savikaina: 1.50,
    nuotrauka: 'https://via.placeholder.com/200'
  }

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)
  
  return (
    <div className='kodas'>
<div>
    {preke.kodas}
    </div>
    <div>
    {preke.pavadinimas}
    </div>
    <div>
    {preke.kaina}
    </div>
    <div>
    {preke.savikaina}
    </div>
    <div>
    {preke.nuotrauka}
    </div>
    </div>
  )
}

export default Komp8