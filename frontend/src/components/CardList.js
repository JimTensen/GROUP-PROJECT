import React from 'react'
import Card from './Card'

function CardList( {removeCardFromList, cards} ) {

  const cardsArray = cards.map(cardObj => {
    return <Card removeCardFromList={removeCardFromList} key={cardObj.id} card={cardObj} />
  })

  return (
    <ul className="bg-black shadow-lg">
      {cardsArray}
    </ul>
  )
}

export default CardList;