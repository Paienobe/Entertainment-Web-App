import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import Trending from '../components/Trending/Trending'
import Recommended from '../components/Recommended/Recommended'
import { useGlobalContext } from '../context'

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Trending />
      <Recommended />
    </div>
  )
}

export default Home
