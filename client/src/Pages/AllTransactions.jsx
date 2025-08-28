import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/allTransactions.css'
import axios from 'axios';

const AllTransactions = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    fetchDeposits();
  },[]);

  const fetchDeposits = async () =>{
    await axios.get('http://localhost:6001/api/transactions/transactions').then(
      (response) =>{
        setTransactions(response.data.reverse());
      }
    )
  }

  return (
    <>
      <Navbar />

      <div className="all-transactions-page">
        <h2>All Transactions</h2>
        <div className="transactions-grid">
          {transactions.map((transaction) => (
            <div className="transaction-card" key={transaction._id}>
              <div className="transaction-card-header">
                <span className="transaction-amount">₹{transaction.amount}</span>
                <span className="transaction-method">{transaction.paymentMethod}</span>
              </div>
              <div className="transaction-card-body">
                <div className="transaction-info"><span className="transaction-label">Receiver:</span> {transaction.receiverName} ({transaction.receiverId})</div>
                <div className="transaction-info"><span className="transaction-label">Receiver IFSC:</span> {transaction.receiverIFSC}</div>
                <div className="transaction-info"><span className="transaction-label">Sender:</span> {transaction.senderName} ({transaction.senderId})</div>
                <div className="transaction-info"><span className="transaction-label">Time:</span> {transaction.time}</div>
                <div className="transaction-info"><span className="transaction-label">Remarks:</span> {transaction.remarks}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default AllTransactions