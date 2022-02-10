const {Router} = require('express')
const userController = require('../components/users/userController')
const authController = require('../components/authentication/authController')
const authMiddleware = require('../components/authentication/authMiddleware')
const router = Router()

router.get('/register', authMiddleware.shouldUserSeeLoginAndRegisterPage, authController.getRegisterPage)
router.get('/login', authMiddleware.shouldUserSeeLoginAndRegisterPage, authController.getLoginPage)


router.post('/register', userController.registerUser)
router.post('/login', userController.logUser)

module.exports = router