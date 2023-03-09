import React, {useState} from 'react';
import Button from '@mui/material/Button'

function CardForm({addCard}) {
  const [ newAthlete, setNewAthlete ] = useState()
  const [ newCategory, setNewCategory ] = useState()
  const [ newPack, setNewPack ] = useState()
  const [ newGrade, setNewGrade ] = useState()
  const [ newCardFront, setCardFront ] = useState()
  const [ newCardBack, setCardBack ] = useState()
  
  const athleteChange = e => setNewAthlete(e.target.value)
  const categoryChange = e => setNewCategory(e.target.value)
  const packChange = e => setNewPack(e.target.value)
  const gradeChange = e => setNewGrade(e.target.value)
  const cardFrontChange = e => setCardFront(e.target.value)
  const cardBackChange = e => setCardBack(e.target.value)
  
  const handleSubmit = e => {
    e.preventDefault()
    const newCard = {
      athlete: newAthlete,
      category: newCategory,
      pack: newPack,
      grade: newGrade,
      cardFront: newCardFront,
      cardBack: newCardBack
    }
    addCard(newCard)
  }

  return (
    <div className="bg-black">
      <form onSubmit={ handleSubmit }>
      <div>
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Athlete...'onChange={ e => athleteChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Category...'onChange={ e => categoryChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Pack...'onChange={ e => packChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Grade...'onChange={ e => gradeChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Card Front...'onChange={ e => cardFrontChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-purple-400 border rounded-md bg-black text-purple-400 placeholder-yellow-400 " type='text' placeholder='Card Back...'onChange={ e => cardBackChange(e) }/>
      </div>
      <div className="pt-4">
        <Button variant="contained" className="border-purple-400 " type='submit'>Submit Card</Button>
      </div>
      </form>
    </div>
  )
}

export default  CardForm;