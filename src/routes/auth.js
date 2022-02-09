const {Router} = require('express')
const router = Router()

router.get('/register', (req, res, next) => res.render('register'))
router.get('/login', (req, res, next) => res.render('login'))


module.exports = router