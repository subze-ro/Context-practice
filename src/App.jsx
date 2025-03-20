import React from 'react'
import { CustomerProvider } from './contexts/CustomerContext'
import { AccountProvider } from './contexts/AccountContext'
import MainPage from './MainPage'

const App = () => {
  return (
    <CustomerProvider>
      <AccountProvider>
        <MainPage />
        </AccountProvider>
   </CustomerProvider>
  )
}

export default App