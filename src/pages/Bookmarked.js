import React from 'react'
import SingleItem from '../components/SingleItem/SingleItem'
import SearchBar from '../components/SearchBar/SearchBar'
import { useGlobalContext } from '../context'

const Bookmarked = () => {
  const { myData } = useGlobalContext()

  const bookmarkedContent = myData.filter((item) => {
    return item.isBookmarked === true
  })

  return (
    <div>
      <SearchBar />
      <div className='bookmarks'>
        {bookmarkedContent.map((item, index) => {
          return <SingleItem {...item} key={index} />
        })}
      </div>
    </div>
  )
}

export default Bookmarked
