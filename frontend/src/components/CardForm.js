import React, {useState} from 'react'

function CardForm() {


  const [cards, setCards] = useState([])


  const [ newAthlete, setNewAthlete ] = useState()
  const [ newPack, setNewPack ] = useState()
  const [ newGrade, setNewGrade ] = useState()
  const [ newCardFront, setCardFront ] = useState()
  const [ newCardBack, setCardBack ] = useState()
  
  const athleteChange = e => setNewAthlete(e.target.value)
  const packChange = e => setNewPack(e.target.value)
  const gradeChange = e => setNewGrade(e.target.value)
  const cardFrontChange = e => setCardFront(e.target.value)
  const cardBackChange = e => setCardBack(e.target.value)
  
  const handleSubmit = e => {
    e.preventDefault()
    const newCard = {
      athlete: newAthlete,
      pack: newPack,
      grade: newGrade,
      cardFront: newCardFront,
      cardBack: newCardBack
    }
    addCard(newCard)
  }
  
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

  
  return (
    <div>
      <form onSubmit={ handleSubmit }>
      <div>
        <input type='text' placeholder='Athlete...'onChange={ e => athleteChange(e) }/>
      </div>
      <div>
        <input type='text' placeholder='Pack...'onChange={ e => packChange(e) }/>
      </div>
      <div>
        <input type='text' placeholder='Grade...'onChange={ e => gradeChange(e) }/>
      </div>
      <div>
        <input type='text' placeholder='Card Front...'onChange={ e => cardFrontChange(e) }/>
      </div>
      <div>
        <input type='text' placeholder='Card Back...'onChange={ e => cardBackChange(e) }/>
      </div>
      <div>
        <button type='submit'>Submit Card</button>
      </div>
      </form>
    </div>
  )
}

export default  CardForm;