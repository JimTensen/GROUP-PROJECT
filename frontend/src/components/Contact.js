import React from 'react'
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Link to='/home'>Home</Link>
      <Link to='/vault'>Vault</Link>
    </div>
  )
}

export default Contact