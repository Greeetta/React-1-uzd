import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
        <h1>Puslapio pavadinimas</h1>
        <ul>
            <li><a>Paslaugos</a></li>
            <li><a>Apie mus</a></li>
        </ul>
        </nav>
    )
}

export default Navbar;