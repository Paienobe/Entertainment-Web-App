import React, { useContext, useState } from 'react'
import { data } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [myData, setMyData] = useState(data)

  console.log(myData)
  return (
    <AppContext.Provider value={{ myData }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
