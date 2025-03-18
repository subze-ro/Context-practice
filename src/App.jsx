import React from 'react'
import { CustomerProvider } from './contexts/CustomerContext'
import MainPage from './MainPage'

const App = () => {
  return (
    <CustomerProvider>
      <MainPage/>
   </CustomerProvider>
  )
}

export default App