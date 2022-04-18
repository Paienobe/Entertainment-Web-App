import React from 'react'
import { useGlobalContext } from '../../context'
import './Recommended.css'
import SingleItem from '../SingleItem/SingleItem'

const Recommended = () => {
  const { myData, isSearching } = useGlobalContext()

  return (
    <div className='recommended'>
      {!isSearching ? <h2>Recommended for you</h2> : <h2>Search Results</h2>}
      <div className='recommended-content-container'>
        {myData.map((content, index) => {
          return <SingleItem key={index} {...content} />
        })}
      </div>
    </div>
  )
}

export default Recommended
