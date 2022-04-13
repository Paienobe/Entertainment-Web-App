import React from 'react'
import SingleItem from '../components/SingleItem/SingleItem'
import SearchBar from '../components/SearchBar/SearchBar'
import { useGlobalContext } from '../context'

const Movies = () => {
  const { myData } = useGlobalContext()

  const allMovies = myData.filter((item) => {
    return item.category.toLowerCase() === 'movie'
  })

  return (
    <div>
      <SearchBar />
      <div className='movies-list'>
        {allMovies.map((movie, index) => {
          return <SingleItem {...movie} key={index} />
        })}
      </div>
    </div>
  )
}

export default Movies
