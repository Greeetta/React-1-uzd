import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Komponentas6 from './Komponentai/komponentas6';
import Paslaugos from './Paslaugos/Paslaugos';
import Komp7 from './Komponentai/Komp7';
import Komp8 from './Komponentai/Komp8';
import Komp9 from './Komponentai/Komp9';
import Navbar from './Komponentai/Navbar';
import header from './Komponentai/header';
import apieMus from './Komponentai/apiemus';
import Footer from './Komponentai/footer';
import Header from './Komponentai/header';
import Studentai from './Komponentai/studentai';
import Skaiciai from './Komponentai/skaiciai';
import Masyvas from './Komponentai/Masyvas';

function App() {
  const masyvas = [15, 18, 99, 5]
  const [number, setNumber]=useState(7)
  const [btnPresses, setBtnPresses]=useState(0)
  function changeNumber(){
  setNumber(number+1)
  }
  useEffect(changeNumber,[btnPresses])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {number} : {btnPresses}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
   <Masyvas/>
        </a>
       <button onClick={()=>{
          setBtnPresses(btnPresses+1)
        }}>ClickMe</button>
      
      </header>
    </div>
  );
}

export default App;
function Komponentas4 (){
  return(
    <p>
      Tekstas
    </p>
  )
}

const Komponentas5=()=>{
  return(
    <div>
      <h1>Antraste</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}
