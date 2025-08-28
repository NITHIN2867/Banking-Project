import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/userTransactions.css';

const UserTransactions = () => {

  const userId = localStorage.getItem('userId');

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
      <main className="user-transactions-main">
        <section className="user-transactions-section">
          <h2 className="transactions-title">Your Transactions</h2>
          <div className="transactions-list">
            {transactions && transactions.filter(transaction => transaction.senderId === userId || transaction.receiverId === userId).map((transaction) => (
              <React.Fragment key={transaction._id}>
                {transaction.senderId === userId ? (
                  <>
                    {transaction.deposit || transaction.loan ? (
                      <div className="user-transaction money-sent">
                        <span>
                          <p><b>Amount: </b>&#8377; {transaction.amount}</p>
                          {transaction.deposit ? <p><b>Deposit name:</b> {transaction.deposit}</p> : <p><b>Loan name:</b> {transaction.loan}</p>}
                        </span>
                        <span>
                          <p><b>Remarks:</b> {transaction.remarks} </p>
                          <p><b>Time:</b> {transaction.time.slice(4, 24)} </p>
                        </span>
                      </div>
                    ) : (
                      <div className="user-transaction money-sent">
                        <span>
                          <p><b>Amount: </b>&#8377; {transaction.amount}</p>
                          <p><b>Receiver a/c id:</b> {transaction.receiverId}</p>
                        </span>
                        <span>
                          <p><b>Receiver:</b> {transaction.receiverName} </p>
                          <p><b>Receiver IFSC:</b> {transaction.receiverIFSC} </p>
                        </span>
                        <span>
                          <p><b>Payment Method:</b> {transaction.paymentMethod} </p>
                          <p><b>Time:</b> {transaction.time} </p>
                        </span>
                        <p><b>Remarks:</b> {transaction.remarks} </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {transaction.loan ? (
                      <div className="user-transaction money-received">
                        <span>
                          <p><b>Amount: </b>&#8377; {transaction.amount}</p>
                          <p><b>Loan name:</b> {transaction.loan}</p>
                        </span>
                        <span>
                          <p><b>Remarks:</b> {transaction.remarks} </p>
                          <p><b>Time:</b> {transaction.time.slice(4, 24)} </p>
                        </span>
                      </div>
                    ) : (
                      <div className="user-transaction money-received">
                        <span>
                          <p><b>Amount: </b>&#8377; {transaction.amount}</p>
                          <p><b>Sender a/c id:</b> {transaction.senderId}</p>
                        </span>
                        <span>
                          <p><b>Sender:</b> {transaction.senderName}</p>
                          <p><b>Payment Method:</b> {transaction.paymentMethod} </p>
                        </span>
                        <span>
                          <p><b>IFSC:</b> {transaction.receiverIFSC}</p>
                          <p><b>Time:</b> {transaction.time} </p>
                        </span>
                        <p><b>Remarks:</b> {transaction.remarks} </p>
                      </div>
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default UserTransactions