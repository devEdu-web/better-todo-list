const {Router} = require('express')
const router = Router()

router.get('/', (req, res, next) => res.render('register'))


module.exports = router