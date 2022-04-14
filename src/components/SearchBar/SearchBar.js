import React, { useState } from 'react'
import './SearchBar.css'
import searchIcon from '../../assets/icon-search.svg'
import { useGlobalContext } from '../../context'
const SearchBar = () => {
  const { searchForItem } = useGlobalContext()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='search-bar-container'>
      <img src={searchIcon} alt='search-icon' />
      <input
        type='text'
        value={searchTerm}
        placeholder='Search for movies or TV series'
        className='search-box'
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
