
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/adminDeposits.css';
import axios from 'axios';

const AdminDeposits = () => {
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    fetchDeposits();
  }, []);

  const fetchDeposits = async () => {
    const response = await axios.get('http://localhost:6001/api/deposits/fetch-deposits');
    setDeposits(response.data);
  };

  return (
    <>
      <Navbar />
      <div className="deposits-modern">
        <h1 className="deposits-title">All Deposits</h1>
        <div className="deposits-grid">
          {deposits.map((deposit) => (
            <div className="deposit-card" key={deposit._id}>
              <div className="deposit-card-section">
                <p><span className="deposit-label">Deposit name:</span> {deposit.depositName}</p>
                <p><span className="deposit-label">Amount:</span> ₹{deposit.amount}</p>
                <p><span className="deposit-label">Duration:</span> {deposit.duration} months</p>
              </div>
              <div className="deposit-card-section">
                <p><span className="deposit-label">Nominee name:</span> {deposit.nomineeName}</p>
                <p><span className="deposit-label">Customer name:</span> {deposit.customerName}</p>
                <p><span className="deposit-label">Start Date:</span> {deposit.createdDate.slice(0, 10)}</p>
              </div>
              <div className="deposit-card-section">
                <p><span className="deposit-label">Nominee age:</span> {deposit.nomineeAge}</p>
                <p><span className="deposit-label">Customer A/c id:</span> {deposit.customerId}</p>
                <p><span className="deposit-label">Mature Date:</span> {deposit.matureDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDeposits;