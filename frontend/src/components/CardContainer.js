import React, {useState, useEffect} from 'react';
import CardForm from './CardForm';
import CardList from './CardList';
import Search from './Search';

function CardContainer() {
    
  const [cards, setCards] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/cards')
    .then(r=>r.json())
    .then(setCards)
  }, []) 

  const [searchTerm, setSearchTerm] = useState("")

  const changeSearchTerm = newString => setSearchTerm(newString.toLowerCase())

  const byAthlete = ({athlete}) => {
    if(athlete.toLowerCase().includes(searchTerm)) {
      return true
    }
  }

  const removeCardFromList= (removeableCardId) => {
    const newArray = cards.filter(cardObj => {
      if( cardObj.id !== removeableCardId) {
        return true
      }
    })
    setCards(newArray)
  }



  const searchCard = cards.filter(byAthlete)

    const addCard = (cO) => {
      const cardArr = [...cards, cO]
      fetch('http://localhost:3000/cards', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cO)
      })
      .then(response => response.json())
      setCards(cardArr)
    }
    
    return(
        <div>
          <div className="p-5">
            <Search changeSearchTerm={changeSearchTerm} />
          </div>
          <div>
            <CardForm addCard={addCard} />
          </div>
          <div >
            <CardList removeCardFromList={removeCardFromList} cards={searchCard} />
          </div>
        </div>
    )
}

export default CardContainer;