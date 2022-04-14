import React, { useContext, useState } from 'react'
import { data } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [myData, setMyData] = useState(data)
  const [currentPage, setCurrentPage] = useState('home')

  const searchForItem = (pageContent, setPageContent, e) => {
    const searchResults = pageContent.filter((item) => {
      return pageContent.title.toLowerCase().contains(e.target.value)
    })
    setPageContent(searchResults)
  }

  return (
    <AppContext.Provider
      value={{ myData, currentPage, setCurrentPage, searchForItem }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
