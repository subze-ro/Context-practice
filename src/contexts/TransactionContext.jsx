import React from "react";
import { useContext, createContext, useEffect, useState } from "react";


const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions") || [])
    setTransactions(storedTransactions);
  }, []);

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  }

  const updateTransaction = (id, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) => {
      transactions.id === id ? updatedTransaction : transaction;
    });
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  }

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => {
      transaction.id !== id;
    })
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

  }

  return (

    <TransactionContext.Provider
    value={{transactions, addTransaction, updateTransaction, deleteTransaction}}
    >
      {children}
      </TransactionContext.Provider>

  )
}

export const useTransaction = () => useContext(TransactionContext)