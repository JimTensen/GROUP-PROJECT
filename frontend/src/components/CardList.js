import React, {useState, useEffect} from 'react'
import Card from './Card'

export default function CardList() {

  const [cards, setCards] = useState([])

  // const addCardToState = cardObj => {
  //   setCards([...cards,cardObj])
  // }

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(r=>r.json())
      .then(setCards)
  }, [])

  console.log(cards)

  const cardsArray = cards.map(cardObj => {
    return <Card key={cardObj.id} card={cardObj} />
  })


  return (
    <ul className="cards">
      {cardsArray}
    </ul>
  )
}
