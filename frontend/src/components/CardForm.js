import React from 'react'

function CardForm() {
  return (
    <div>
      <div>
        <input type='text' placeholder='Athlete...'/>
      </div>
      <div>
        <input type='text' placeholder='Pack...'/>
      </div>
      <div>
        <input type='text' placeholder='Grade...'/>
      </div>
      <div>
        <input type='text' placeholder='Card Front...'/>
      </div>
      <div>
        <input type='text' placeholder='Card Back...'/>
      </div>
      <div>
        <button type='submit'>Submit Card</button>
      </div>
    </div>
  )
}

export default  CardForm;