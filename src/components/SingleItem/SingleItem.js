import React, { useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import { ReactComponent as Movies } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as Series } from '../../assets/icon-nav-tv-series.svg'
import bookMarkEmpty from '../../assets/bookMarkEmpty.svg'
import bookMarkFill from '../../assets/bookMarkFull.svg'
import playBtn from '../../assets/icon-play.svg'
import './SingleItem.css'

const SingleItem = ({
  category,
  isBookmarked,
  rating,
  thumbnail,
  title,
  year,
}) => {
  return (
    <div className='single-item'>
      <div className='thumbnail-holder'>
        <img
          src={
            window.innerWidth >= 650
              ? thumbnail?.regular.medium
              : window.innerWidth >= 650 && window.innerWidth >= 950
              ? thumbnail?.regular.large
              : thumbnail?.regular.small
          }
          alt='thumbnail'
          className='item-thumbnail'
        />

        <div className='bookmark-symbol'>
          {isBookmarked ? (
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

      <div className='item-description'>
        <p>{year}</p>
        <BsDot />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {category.toLowerCase() === 'movie' ? (
            <Movies
              style={{ transform: 'scale(0.7)', marginRight: '0.30rem' }}
              fill={'rgba(225,225,225,0.8)'}
            />
          ) : (
            <Series
              style={{ transform: 'scale(0.7)', marginRight: '0.30rem' }}
              fill={'rgba(225,225,225,0.8)'}
            />
          )}
          {category}
        </div>
        <BsDot />
        <p>{rating}</p>
      </div>
      <h4>{title}</h4>
    </div>
  )
}

export default SingleItem
