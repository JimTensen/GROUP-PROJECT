import React, {useState, useEffect} from 'react';
import CardForm from './CardForm';
import CardList from './CardList';

function CardContainer() {
    
    const [cards, setCards] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(r=>r.json())
      .then(setCards)
    }, []) 

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
          <CardForm addCard={addCard} />
          <div>
            <CardList cards={cards} />
          </div>
        </div>
    )
}

export default CardContainer;