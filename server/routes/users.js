import express from 'express';
import { getUserDetails, fetchUsers } from '../controllers/userController.js';
const router = express.Router();

router.get('/user-details/:id', getUserDetails);
router.get('/fetch-users', fetchUsers);

export default router;
