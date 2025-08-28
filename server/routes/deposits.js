import express from 'express';
import { fetchDeposits, newDeposit } from '../controllers/depositController.js';
const router = express.Router();

router.get('/fetch-deposits', fetchDeposits);
router.post('/new-deposit', newDeposit);

export default router;
