import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

// icons
import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.png'
import { ReactComponent as Home } from '../../assets/icon-nav-home.svg'
import { ReactComponent as Bookmarks } from '../../assets/icon-nav-bookmark.svg'
import { ReactComponent as Movies } from '../../assets/icon-nav-movies.svg'
import { ReactComponent as Series } from '../../assets/icon-nav-tv-series.svg'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const { currentPage, setCurrentPage } = useGlobalContext()
  return (
    <nav className='navbar'>
      <img src={logo} alt='app_logo' />

      <div className='categories'>
        <Link to='/'>
          <Home
            fill={currentPage === 'home' ? '#FC4747' : '#5A698F'}
            onClick={() => {
              setCurrentPage('home')
            }}
          />
        </Link>
        <Link to='/movies'>
          <Movies
            fill={currentPage === 'movies' ? '#FC4747' : '#5A698F'}
            onClick={() => {
              setCurrentPage('movies')
            }}
          />
        </Link>
        <Link to='/tvshows'>
          <Series
            fill={currentPage === 'series' ? '#FC4747' : '#5A698F'}
            onClick={() => {
              setCurrentPage('series')
            }}
          />
        </Link>
        <Link to='/bookmarks'>
          <Bookmarks
            fill={currentPage === 'bookmarks' ? '#FC4747' : '#5A698F'}
            onClick={() => {
              setCurrentPage('bookmarks')
            }}
          />
        </Link>
      </div>

      <img src={avatar} alt='user_avatar' className='avatar' />
    </nav>
  )
}

export default Navbar
