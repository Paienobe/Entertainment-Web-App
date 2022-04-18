import React from 'react'
import { useGlobalContext } from '../../context'
import './Trending.css'
import { BsDot } from 'react-icons/bs'
import bookMarkEmpty from '../../assets/bookMarkEmpty.svg'
import bookMarkFill from '../../assets/bookMarkFull.svg'
import playBtn from '../../assets/icon-play.svg'
import { ReactComponent as Movies } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as Series } from '../../assets/icon-nav-tv-series.svg'

const Trending = () => {
  const { myData, isSearching } = useGlobalContext()

  const trendingContent = myData.filter((item) => {
    return item.isTrending === true
  })

  return (
    <div className='trending-container'>
      {!isSearching && <h2>Trending</h2>}
      {!isSearching && (
        <div className='trending-items-container'>
          {trendingContent.map((item, index) => {
            return (
              <div className='trending-item' key={index}>
                <div className='details'>
                  <img
                    src={
                      window.innerWidth >= 650
                        ? item?.thumbnail?.trending?.large
                        : item?.thumbnail?.trending?.small
                    }
                    alt='thumbnail'
                    className='trending-item-thumbnail'
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div className='category-icon'>
                        {item?.category.toLowerCase() === 'movie' ? (
                          <Movies fill={'rgba(255, 255, 255, 0.8)'} />
                        ) : (
                          <Series fill={'rgba(255, 255, 255, 0.8)'} />
                        )}
                      </div>

                      <p>{item?.category}</p>
                    </div>
                    <BsDot />
                    <p>{item?.rating}</p>
                  </div>
                  <h3 className='trending-item-title'>{item?.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Trending
