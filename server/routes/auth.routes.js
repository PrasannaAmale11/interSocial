import express from 'express';
import { signup } from '../controller/auth.controllers.js';
import { login } from '../controller/auth.controllers.js';
import { logout } from '../controller/auth.controllers.js';
const router = express.Router();

router.post("/login",  login)
router.post("/signup", signup)
router.post("/logout", logout)

export default router