import React from 'react'
import { useGlobalContext } from '../../context'
import './Trending.css'
import { BsDot } from 'react-icons/bs'
import movies from '../../assets/icon-nav-movies.svg'
import series from '../../assets/icon-nav-tv-series.svg'
import bookMarkEmpty from '../../assets/bookMarkEmpty.svg'
import bookMarkFill from '../../assets/bookMarkFull.svg'
import playBtn from '../../assets/icon-play.svg'

const Trending = () => {
  const { myData } = useGlobalContext()

  const trendingContent = myData.filter((item) => {
    return item.isTrending === true
  })

  return (
    <div className='trending-container'>
      <h2>Trending</h2>
      <div className='trending-items-container'>
        {trendingContent.map((item, index) => {
          return (
            <div className='trending-item' key={index}>
              <div>
                <img
                  src={
                    window.innerWidth >= 650
                      ? item?.thumbnail?.trending?.large
                      : item?.thumbnail?.trending?.small
                  }
                  alt='thumbnail'
                />

                <div className='bookmark-symbol'>
                  {item?.isBookmarked ? (
                    <img src={bookMarkFill} alt='bookmark-status' />
                  ) : (
                    <img src={bookMarkEmpty} alt='bookmark-status' />
                  )}
                </div>

                <div className='play-modal'>
                  <div className='modal-content'>
                    <img src={playBtn} alt='play-btn' />
                    <p>Play</p>
                  </div>
                </div>
              </div>

              <div className='description-container'>
                <div className='trending-item-description'>
                  <p>{item?.year}</p>
                  <BsDot />
                  <p>
                    <img
                      src={
                        item?.category.toLowerCase() === 'movie'
                          ? movies
                          : series
                      }
                      alt='category-icon'
                      className='category-icon'
                      style={{ width: '1rem', marginRight: '0.25rem' }}
                    />

                    {item?.category}
                  </p>
                  <BsDot />
                  <p>{item?.rating}</p>
                </div>
                <h3 className='trending-item-title'>{item?.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
