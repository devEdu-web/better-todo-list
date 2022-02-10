function getLoginPage(req, res, next) {
    res.render('login')
}

function getRegisterPage(req, res, next) {
    res.render('register')
}


module.exports = {getLoginPage, getRegisterPage}