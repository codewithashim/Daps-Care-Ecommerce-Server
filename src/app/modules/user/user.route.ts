import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post(
  '/create-user',
  UserController.createUser
);

router.get('/email/:email', UserController.getUserByEmail);
router.get('/id/:id', UserController.getUserById);
router.get('/', UserController.getAllUsers);

// == Get admin form the user by email and is admin true  == user.route.ts

router.get('/admin/:email', UserController.getAdminByEmail);

export const UserRoutes = router;
