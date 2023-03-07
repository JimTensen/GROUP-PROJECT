import React from 'react'
import CardForm from './CardForm';
// import CardList from './CardList';
import Search from './Search';
import {Link} from 'react-router-dom';

function Vault() {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <h3>Vault</h3>
        <CardForm />
      </div>
      <div>
        {/* <CardList /> */}
      </div>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}


export default Vault;