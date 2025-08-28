

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/admin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UsersIcon, DepositsIcon, TransactionsIcon, LoansIcon } from '../components/DashboardIcons';

const cardData = [
  {
    key: 'users',
    label: 'Users',
    route: '/all-users',
    color: 'linear-gradient(135deg, #4f8cff 0%, #a259ff 100%)',
  },
  {
    key: 'deposits',
    label: 'Deposits',
    route: '/all-deposits',
    color: 'linear-gradient(135deg, #4f8cff 0%, #43e97b 100%)',
  },
  {
    key: 'transactions',
    label: 'Transactions',
    route: '/all-transactions',
    color: 'linear-gradient(135deg, #4f8cff 0%, #f7971e 100%)',
  },
  {
    key: 'loans',
    label: 'Loans',
    route: '/all-loans',
    color: 'linear-gradient(135deg, #4f8cff 0%, #ff5858 100%)',
  },
];

const Admin = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ users: 0, deposits: 0, transactions: 0, loans: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [usersRes, depositsRes, transactionsRes, loansRes] = await Promise.all([
      axios.get('http://localhost:6001/api/users/fetch-users'),
      axios.get('http://localhost:6001/api/deposits/fetch-deposits'),
      axios.get('http://localhost:6001/api/transactions/transactions'),
      axios.get('http://localhost:6001/api/loans/fetch-loans'),
    ]);
    setCounts({
      users: usersRes.data.length,
      deposits: depositsRes.data.length,
      transactions: transactionsRes.data.length,
      loans: loansRes.data.length,
    });
  };


  // Dashboard icon mapping
  const dashboardIcons = [
    <UsersIcon key="users" />, <DepositsIcon key="deposits" />, <TransactionsIcon key="transactions" />, <LoansIcon key="loans" />
  ];

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="admin-dashboard-grid fixed-2x2">
          <div className="dashboard-row">
            {[0,1].map(i => (
              <div className="dashboard-card" key={cardData[i].key}>
                <div className="dashboard-card-content">
                  <div className="dashboard-card-info">
                    <span className="dashboard-card-label">{cardData[i].label}</span>
                    <span className="dashboard-card-count">{counts[cardData[i].key].toLocaleString()}</span>
                  </div>
                  <div className="dashboard-card-chart">
                    {dashboardIcons[i]}
                  </div>
                </div>
                <button className="dashboard-card-btn" onClick={() => navigate(cardData[i].route)}>
                  View
                  <span className="dashboard-card-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
          <div className="dashboard-row">
            {[2,3].map(i => (
              <div className="dashboard-card" key={cardData[i].key}>
                <div className="dashboard-card-content">
                  <div className="dashboard-card-info">
                    <span className="dashboard-card-label">{cardData[i].label}</span>
                    <span className="dashboard-card-count">{counts[cardData[i].key].toLocaleString()}</span>
                  </div>
                  <div className="dashboard-card-chart">
                    {dashboardIcons[i]}
                  </div>
                </div>
                <button className="dashboard-card-btn" onClick={() => navigate(cardData[i].route)}>
                  View
                  <span className="dashboard-card-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;