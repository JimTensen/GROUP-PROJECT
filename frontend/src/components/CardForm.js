import React, {useState} from 'react';
import CardDeck from '@mui/icons-material/ViewCarousel';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Russo One'
    ].join(','),
  },});

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
      <span className="text-white"> ADD A CARD <CardDeck className="pb-1"/> </span>
      <form onSubmit={ handleSubmit }>
        <div></div>
      <div>
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Athlete...'onChange={ e => athleteChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Category...'onChange={ e => categoryChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Pack...'onChange={ e => packChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Grade...'onChange={ e => gradeChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Card Front...'onChange={ e => cardFrontChange(e) }/>
      </div>
      <div className="pt-4">
        <input className="border-blue-400 border rounded-md bg-black text-blue-400 placeholder-white " type='text' placeholder='Card Back...'onChange={ e => cardBackChange(e) }/>
      </div>
      <div className="pt-4">
        <ThemeProvider theme={theme}>
          <Button variant="contained" className="border-purple-400 " type='submit'>Submit Card</Button>
        </ThemeProvider>
      </div>
      </form>
    </div>
  )
}

export default  CardForm;