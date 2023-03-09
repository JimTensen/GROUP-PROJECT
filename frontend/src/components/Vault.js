import React from 'react'
import CardContainer from './CardContainer';
import {Link} from 'react-router-dom';

function Vault() {
  return (
    <div className="bg-black">
      <div>
        <h3>Vault</h3>
      </div>
      <nav className="p-3 text-center"> 
        <CardContainer />
        <div className="p-10">
          <Link to='/home' className="px-10">Home</Link>
          <Link to='/contact' className="px-10">Contact</Link>
        </div>
      </nav>
    </div>
  )
}


export default Vault;