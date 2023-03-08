import React from 'react'

function Search({changeSearchTerm}) {

  const handleChange = e => changeSearchTerm(e.target.value)

  return (
    <div>
      <input type='text' placeholder='Start Searching' onChange={handleChange} />
    </div>
  )
}

export default Search;