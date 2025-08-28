import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/adminLoans.css'
import axios from 'axios';

const AdminLoans = () => {

    const [loans, setLoans] = useState([]);

    useEffect(()=>{
        fetchLoans();
    },[]);

    const fetchLoans = async () =>{
        await axios.get('http://localhost:6001/api/loans/fetch-loans').then(
            (response) =>{
                setLoans(response.data);
                console.log(response.data);
            }
        )
    }

    const approveLoan = async(id) =>{
        await axios.put('http://localhost:6001/api/loans/approve-loan', {id}).then(
            (response)=>{
                alert("Loan approved!!");
                fetchLoans();
            }
        )
    }
    const declineLoan = async(id) =>{
        console.log(id)
        await axios.put('http://localhost:6001/api/loans/decline-loan', {id}).then(
            (response)=>{
                alert("Loan Declined!!");
                fetchLoans();
            }
        )
    }

  return (
    <>
      <Navbar />

      <div className="loans-page">

          <div className="loans">

              <h2>All loans</h2>
              <div className="loans-grid">
                {loans.map((loan) => (
                  <div className="loan-card" key={loan._id}>
                    <div className="loan-card-header">
                      <span className="loan-type">{loan.loanType}</span>
                      <span className="loan-amount">₹{loan.loanAmount}</span>
                    </div>
                    <div className="loan-card-body">
                      <div className="loan-info"><span className="loan-label">Balance:</span> {loan.balance}</div>
                      <div className="loan-info"><span className="loan-label">Duration:</span> {loan.duration} months</div>
                      <div className="loan-info"><span className="loan-label">Nominee:</span> {loan.nomineeName}</div>
                      <div className="loan-info"><span className="loan-label">Customer:</span> {loan.customerName}</div>
                      <div className="loan-info"><span className="loan-label">A/c ID:</span> {loan.customerId}</div>
                      <div className="loan-info"><span className="loan-label">Start Date:</span> {loan.createdDate.slice(0, 10)}</div>
                      {loan.loanStatus === 'approved' ? (
                        <div className="loan-info"><span className="loan-label">End Date:</span> {loan.endDate}</div>
                      ) : (
                        <div className="loan-info"><span className="loan-label">Status:</span> <span className="loan-status-pending">{loan.loanStatus}</span></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="loan-requests-container">
              <h3>Pending Applications</h3>
              <div className="loan-requests">

                  {loans.filter(loan=> loan.loanStatus === 'pending').map((loan)=>{
                    return(
                      <div className="loan-request" key={loan._id}>
                          <p><b>Loan type: </b>{loan.loanType}</p>
                          <p><b>Customer name: </b>{loan.customerName}</p>
                          <p><b>Customer A/c id: </b>{loan.customerId}</p>
                          <p><b>Amount: </b>{loan.loanAmount}</p>
                          <p><b>Duration: </b>{loan.duration} months</p>
                          <span>
                              <button className="btn btn-primary" onClick={()=> approveLoan(loan._id)}>Approve</button>
                              <button className="btn btn-danger" onClick={()=> declineLoan(loan._id)}>Decline</button>
                          </span>
                      </div>
                    )
                  })}
                  



              </div>
          </div>

          </div>


    </>
  )
}

export default AdminLoans