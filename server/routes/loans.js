import express from 'express';
import { fetchLoans, newLoan, approveLoan, declineLoan, repayLoan } from '../controllers/loanController.js';
const router = express.Router();

router.get('/fetch-loans', fetchLoans);
router.post('/new-loan', newLoan);
router.put('/approve-loan', approveLoan);
router.put('/decline-loan', declineLoan);
router.post('/repay-loan', repayLoan);

export default router;
