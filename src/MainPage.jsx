import React from 'react'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'

const MainPage = () => {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold text-purple-800 mb-8'>Fintech-Manual</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <CustomerForm />
          <CustomerList/>
        </div>
      </div>
    </div>
  )
}

export default MainPage