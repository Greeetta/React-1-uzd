import React from 'react';

const Masyvas = () => {
    const skaiciai = [1, 6, 7, 8, 99, 15];

    function skaiciuIsvedimas (skaiciai){
        return skaiciai.join(', ');
    }

    function vidurkis(skaiciai){
        let suma = 0;
        for (let i = 0; i < skaiciai.length; i++) {
        suma += skaiciai[i];
        return (suma/skaiciai.length).toFixed(2);
    
        }
    }
    function didziausias(skaiciai){
        return Math.max(...skaiciai);
    }
    function lyginiai(skaiciai){
        return skaiciai.filter(sk => sk % 2 ===0);
    }
    const turimiSkaiciai = skaiciuIsvedimas(skaiciai);
    const gautasVidurkis = vidurkis(skaiciai);
    const gautasDidziausias = didziausias(skaiciai);
    const gautiLyginiai = lyginiai(skaiciai);

    return(
        <div>
            <h1>Masyvas:</h1>
            <p><strong>Turimi skaičiai:</strong>{turimiSkaiciai}</p>
            <p><strong>Vidurkis:</strong>{gautasVidurkis}</p>
            <p><strong>Didžiausias skaičius:</strong>{gautasDidziausias}</p>
            <p><strong>Lyginiai skaičiai:</strong>{gautiLyginiai}</p>
        </div>
    )
}

export default Masyvas;