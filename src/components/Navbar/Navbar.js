import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

// icons
import logo from '../../assets/logo.svg'
import home from '../../assets/icon-nav-home.svg'
import movies from '../../assets/icon-nav-movies.svg'
import series from '../../assets/icon-nav-tv-series.svg'
import bookmarks from '../../assets/icon-nav-bookmark.svg'
import avatar from '../../assets/image-avatar.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='app_logo' />

      <div className='categories'>
        <Link to='/'>
          <img src={home} alt='home_icon' />
        </Link>
        <Link to='/movies'>
          <img src={movies} alt='movies_icon' />
        </Link>
        <Link to='/tvshows'>
          <img src={series} alt='series_icon' />
        </Link>
        <Link to='/bookmarks'>
          <img src={bookmarks} alt='bookmarks_icon' />
        </Link>
      </div>

      <img src={avatar} alt='user_avatar' className='avatar' />
    </nav>
  )
}

export default Navbar
