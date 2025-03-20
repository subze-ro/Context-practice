import React from 'react'
import { useAccount } from '../contexts/AccountContext'
import { useCustomer } from '../contexts/CustomerContext'

const AccountList = () => {

  const { accounts } = useAccount()
  const {customers} = useCustomer()

  const getCustomerName = (customerId) => {
    const customer = customers.find((c) => c.id === customerId);
    return customer ? customer.fullName : 'Unknown';
  };

  return (
    <div></div>
  )
}

export default AccountList