import React from 'react'
import CardContainer from './CardContainer';
import {Link} from 'react-router-dom';

function Vault() {
  return (
    <div>
      <div>
        <h3>Vault</h3>
      </div>
      <CardContainer />
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}


export default Vault;