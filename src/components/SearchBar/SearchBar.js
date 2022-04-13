import React from 'react'
import './SearchBar.css'
import searchIcon from '../../assets/icon-search.svg'
const SearchBar = () => {
  return (
    <div className='search-bar-container'>
      <img src={searchIcon} alt='search-icon' />
      <input
        type='text'
        placeholder='Search for movies or TV series'
        className='search-box'
      />
    </div>
  )
}

export default SearchBar
