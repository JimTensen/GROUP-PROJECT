import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search({changeSearchTerm}) {

  const handleChange = e => changeSearchTerm(e.target.value)

  return (
    <div>
      <input className="text-center w-full border-2 border-black rounded-md pt-4 pb-4" type='text' placeholder='Start Searching' onChange={handleChange} /> 
    </div>
  )
}

export default Search;