const {Router} = require('express')
const userController = require('../components/users/userController')
const router = Router()

router.get('/register', (req, res, next) => res.render('register'))
router.get('/login', (req, res, next) => res.render('login'))


router.post('/register', userController.registerUser)

module.exports = router