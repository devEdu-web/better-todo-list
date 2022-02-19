const { Router } = require('express');
const userController = require('../components/users/userController');
const authController = require('../components/authentication/authController');
const authMiddleware = require('../components/authentication/authMiddleware');
const userValidation = require('../components/users/userValidation');
const router = Router();

router.get('/register', authMiddleware.shouldUserSeeLoginAndRegisterPage, authController.getRegisterPage);
router.get('/login', authMiddleware.shouldUserSeeLoginAndRegisterPage, authController.getLoginPage);
router.get('/logout', userController.logout);

router.post('/register', userValidation.registerValidation, userController.registerUser);
router.post('/login', userController.logUser);

module.exports = router;
