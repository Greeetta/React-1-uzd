import React from 'react'

// padarykite kad šis komponentas priimtų props (vieno projekto objektą)
const Projektas = ({projektas}) => {
  const {pavadinimas, tipas, atlikimo_data}=projektas;  // išveskite visą turimą projekto informaciją
  return (
    <div>
    <h3>{pavadinimas}</h3>
    <p><strong>Atlikimo data:</strong>{atlikimo_data}</p>
    </div>
  )
}

export default Projektas;