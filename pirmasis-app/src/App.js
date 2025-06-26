import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import Komponentas6 from './Komponentai/1 uzduotis/komponentas6';
import Paslaugos from './Paslaugos/Paslaugos';
import Komp7 from './Komponentai/2 uzduotis/Komp7';
import Komp8 from './Komponentai/2 uzduotis/Komp8';
import Komp9 from './Komponentai/2 uzduotis/Komp9';
import Navbar from './Komponentai/3 uzduotis/Navbar';
import header from './Komponentai/3 uzduotis/header';
import apieMus from './Komponentai/3 uzduotis/apiemus';
import Footer from './Komponentai/3 uzduotis/footer';
import Header from './Komponentai/3 uzduotis/header';
import Studentai from './Komponentai/4 uzduotis/studentai';
import Skaiciai from './Komponentai/5 uzduotis/skaiciai';
import Masyvas from './Komponentai/6 uzduotis/Masyvas';
import TeigiamiNeigiami from './Komponentai/7 uzduotis/teigiamineigiami';
import PrekiuSarasas from './Komponentai/8 uzduotis/Prekes';
import Zodziai from './Komponentai/10 uzduotis/Zodziai';
import Knygynas from './Komponentai/11 uzduotis/Knygynas';
import Tevinis from './Komponentai/12 uzduotis/tevinis';
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
 <Tevinis/>
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
