import React from 'react';

const TeigiamiNeigiami = () =>{
   const masyvas = [-1, -102, 0, 25, 125];

   return(
    <div>
        <h1>Skaičiukai</h1>
        <ul>
            {masyvas.map((skaicius, index)=>(
                <li key={index}>
                    {skaicius} - {skaicius >0 ? 'teigiamas': skaicius < 0? 'neigiamas' : "Nulis"}
                </li>
            ))}
        </ul>
    </div>
   )
}

export default TeigiamiNeigiami;