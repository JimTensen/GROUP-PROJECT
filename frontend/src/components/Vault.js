import React, {useState, useEffect} from 'react'
import CardForm from './CardForm';
import CardList from './CardList';
import Search from './Search';
import {Link} from 'react-router-dom';

function Vault() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(r=>r.json())
      .then(setCards)
  }, [])

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <h3>Vault</h3>
        <CardForm />
      </div>
        <CardList cards={cards}/>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}


export default Vault;