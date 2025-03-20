import React from 'react'
import { CustomerProvider } from './contexts/CustomerContext'
import { AccountProvider } from './contexts/AccountContext'
import { TransactionProvider } from './contexts/TransactionContext'
import MainPage from './MainPage'

const App = () => {
  return (
    <CustomerProvider>
      <AccountProvider>
        <TransactionProvider>
          <MainPage />
          </TransactionProvider>
        </AccountProvider>
   </CustomerProvider>
  )
}

export default App