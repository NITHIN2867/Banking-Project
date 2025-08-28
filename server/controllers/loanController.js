import { Loans, Transactions, User } from '../models/schemas.js';

export const fetchLoans = async (req, res) => {
  try {
    const loans = await Loans.find();
    res.json(loans);
  } catch (err) {
    res.status(500).json({ message: 'Error occured' });
  }
};

export const newLoan = async (req, res) => {
  const { loanType, customerId, customerName, nomineeName, nomineeAge, duration, loanAmount, createdDate } = req.body;
  try {
    const date = new Date(createdDate);
    const endDate = date.getDate() + '-' + (date.getMonth() % 12) + '-' + (date.getFullYear() + Math.floor(duration / 12));
    const balance = loanAmount;
    const newLoan = new Loans({
      loanType, customerId, customerName, nomineeName, nomineeAge, duration, loanAmount, balance, createdDate, endDate
    });
    await newLoan.save();
    res.json({ message: 'loan request created' });
  } catch (err) {
    res.status(500).json({ message: 'Error occured' });
  }
};

export const approveLoan = async (req, res) => {
  const { id } = req.body;
  try {
    const loan = await Loans.findOne({ _id: id });
    const user = await User.findOne({ _id: loan.customerId });
    loan.loanStatus = 'approved';
    user.balance = user.balance + loan.loanAmount;
    await loan.save();
    await user.save();
    res.json({ message: 'loan approved successfully' });
    const transaction = new Transactions({
      receiverId: user._id, receiverName: user.name, loan: loan.loanType, amount: loan.loanAmount, time: new Date(), remarks: 'Loan approval'
    });
    await transaction.save();
  } catch (err) {
    res.status(500).json({ message: 'error occured' });
  }
};

export const declineLoan = async (req, res) => {
  try {
    const { id } = req.body;
    const loan = await Loans.findOne({ _id: id });
    loan.loanStatus = 'declined';
    await loan.save();
    res.json({ message: 'loan declined successfully' });
  } catch (err) {
    res.status(500).json({ message: 'error occured' });
  }
};

export const repayLoan = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const loan = await Loans.findOne({ _id: id });
    const user = await User.findOne({ _id: loan.customerId });
    loan.balance = loan.balance - amount;
    user.balance = user.balance - amount;
    await loan.save();
    await user.save();
    const transaction = new Transactions({
      senderId: user._id, senderName: user.name, loan: loan.loanType, amount, time: new Date(), remarks: 'Loan re-payment'
    });
    await transaction.save();
    res.json({ message: 'repayment successful' });
  } catch (err) {
    res.status(500).json({ message: 'message occured' });
  }
};
