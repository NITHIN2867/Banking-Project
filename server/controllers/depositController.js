import { Deposits, Transactions, User } from '../models/schemas.js';

export const fetchDeposits = async (req, res) => {
  try {
    const deposits = await Deposits.find();
    res.json(deposits);
  } catch (err) {
    res.status(500).json({ message: 'Error occured' });
  }
};

export const newDeposit = async (req, res) => {
  const { depositName, customerId, customerName, nomineeName, nomineeAge, duration, amount: rawAmount, createdDate } = req.body;
  try {
    const date = new Date(createdDate);
    // normalize numeric values
    const amount = Number(rawAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({ message: 'Invalid deposit amount' });
    }

    const matureDate = date.getDate() + '-' + (date.getMonth() % 12) + '-' + (date.getFullYear() + Math.floor((duration || 0) / 12));
    const user = await User.findOne({ _id: customerId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const newDeposit = new Deposits({
      depositName, customerId, customerName, nomineeName, nomineeAge, duration, amount, createdDate, matureDate
    });
    const transaction = new Transactions({
      senderId: customerId, senderName: customerName, deposit: depositName, amount, time: new Date(), remarks: 'Deposit payment'
    });
    await transaction.save();
    await newDeposit.save();

    // ensure numeric addition even if stored as string
    const currentBalance = Number(user.balance) || 0;
    user.balance = currentBalance + amount;

    await user.save();
    res.json({ message: 'deposit created', balance: user.balance });
  } catch (err) {
    res.status(500).json({ message: 'Error occured' });
  }
};
