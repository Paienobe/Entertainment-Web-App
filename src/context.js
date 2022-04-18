import React, { useContext, useState } from 'react'
import { data } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [myData, setMyData] = useState(data)
  const [isSearching, setIsSearching] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const searchForItem = (searchTerm) => {
    if (searchTerm) {
      setIsSearching(true)
      const searchResults = data.filter((item) => {
        return item?.title?.toLowerCase().includes(searchTerm)
      })
      setMyData(searchResults)
      console.log(searchResults)
    } else {
      setMyData(data)
      setIsSearching(false)
    }
  }

  return (
    <AppContext.Provider
      value={{
        myData,
        currentPage,
        setCurrentPage,
        searchForItem,
        isSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
