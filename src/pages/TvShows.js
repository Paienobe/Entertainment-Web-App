import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import SingleItem from '../components/SingleItem/SingleItem'
import { useGlobalContext } from '../context'

const TvShows = () => {
  const { myData } = useGlobalContext()

  const allTvShows = myData.filter((item) => {
    return item.category.toLowerCase() === 'tv series'
  })

  return (
    <div>
      <SearchBar />
      <div className='shows-list'>
        {allTvShows.map((show, index) => {
          return <SingleItem {...show} key={index} />
        })}
      </div>
    </div>
  )
}

export default TvShows
