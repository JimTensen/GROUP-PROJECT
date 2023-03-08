import React from 'react'

function Search({changeSearchTerm}) {

  const handleChange = e => changeSearchTerm(e.target.value)

  return (
    <div>
      <input className="text-center w-full border-2 border-black rounded-md" type='text' placeholder='Start Searching' onChange={handleChange} />
    </div>
  )
}

export default Search;