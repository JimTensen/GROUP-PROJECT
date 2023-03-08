import React from 'react'
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <nav className="p-3 text-center">
        <Link to='/home' className="p-10">Home</Link>
        <Link to='/vault' className="p-10">Vault</Link>
      </nav>
    </div>
  )
}

export default Contact