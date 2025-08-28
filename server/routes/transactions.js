import express from 'express';
import { sendMoney, fetchTransactions } from '../controllers/transactionController.js';
const router = express.Router();

router.post('/send-money', sendMoney);
router.get('/transactions', fetchTransactions);

export default router;
