

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Route imports
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import transactionRoutes from './routes/transactions.js';
import depositRoutes from './routes/deposits.js';
import loanRoutes from './routes/loans.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 6001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bankManagement';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  // Use modular routes
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/transactions', transactionRoutes);
  app.use('/api/deposits', depositRoutes);
  app.use('/api/loans', loanRoutes);

  app.listen(PORT, () => {
    console.log(`Running @ ${PORT}`);
  });
})
.catch((e) => console.log(`Error in db connection ${e}`));