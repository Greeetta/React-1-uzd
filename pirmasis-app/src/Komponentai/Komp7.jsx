import React from 'react'

const Komp7 = () => {
  // susikurkite žodžių masyvą (tiesiog string reikšmės,
  // ne objektai)
  // ir tą masyvą atvaizduokite return dalyje
const masyvas = ['vienas', 'du', 'trys']
  return (
    <div>Komp7
      {' '+masyvas[0]+' '+masyvas[1]+' '+masyvas[2]}
    </div>
  )
}

export default Komp7;