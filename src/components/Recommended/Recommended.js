import React from 'react'
import { useGlobalContext } from '../../context'
import './Recommended.css'
import SingleItem from '../SingleItem/SingleItem'

const Recommended = () => {
  const { myData } = useGlobalContext()

  const recommendedContent = myData.filter((item) => {
    return item.isTrending === false
  })

  return (
    <div className='recommended'>
      <h2>Recommended for you</h2>
      <div className='recommended-content-container'>
        {recommendedContent.map((content, index) => {
          return <SingleItem key={index} {...content} />
        })}
      </div>
    </div>
  )
}

export default Recommended
