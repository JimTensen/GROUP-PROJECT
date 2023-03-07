import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom';



export default function NavBar() {
  return (
  <header>
    <nav>
      <h1><Link to="/">Home</Link></h1>
      <Search />
      <h1><Link to="/vault">Vault</Link></h1>
      <h1><Link to="/contact">Contact</Link></h1>
    </nav>
  </header>
  )
}
