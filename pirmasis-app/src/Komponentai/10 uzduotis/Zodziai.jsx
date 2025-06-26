import React from 'react'
import Zodis from "./Zodis"

const Zodziai = () => {
  let pirmas = 'Kriause'
  let antras = 'Obelis'
  let trecias = 'Medis'
  let ketvirtas = 'Kalnas'

  // turi iškviesti komponentą Zodis kelis kartus,
  // kiekvieną kartą jam perduodant vis skirtingą
  // kintamąjį (pirmas, antras, ...)
  return (
    <div>
    <h1>Zodziai</h1>
    <div>
      <Zodis zodis={pirmas}/>
      <Zodis zodis={antras} />
      <Zodis zodis={trecias} />
      <Zodis zodis={ketvirtas} />
      </div>
    </div>
  )
}

export default Zodziai;