import React, { useEffect } from 'react'
import { BsDot } from 'react-icons/bs'
import movies from '../../assets/icon-nav-movies.svg'
import series from '../../assets/icon-nav-tv-series.svg'
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
        <p>
          <img
            src={category.toLowerCase() === 'movie' ? movies : series}
            alt='category-icon'
            className='category-icon'
            style={{ width: '0.8rem', marginRight: '0.25rem' }}
          />

          {category}
        </p>
        <BsDot />
        <p>{rating}</p>
      </div>
      <h4>{title}</h4>
    </div>
  )
}

export default SingleItem
