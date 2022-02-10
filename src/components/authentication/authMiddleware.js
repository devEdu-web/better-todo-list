const jwt = require('jsonwebtoken');

function canUserAccessIndexPage(req, res, next) {
    const userToken = req.cookies.tk
    if(!userToken) return res.redirect('/login')

    try {
        const isUserVerified = jwt.verify(userToken, process.env.JWT_SECRET)
        next()
    } catch(e) {
        res.redirect('/login')
    }

}

function shouldUserSeeLoginAndRegisterPage(req, res, next) {
    const userToken = req.cookies.tk
    try {
        const isUserVerified = jwt.verify(userToken, process.env.JWT_SECRET)
        res.redirect('/')
    } catch(e) {
        next()
    }
}

module.exports = {canUserAccessIndexPage, shouldUserSeeLoginAndRegisterPage}