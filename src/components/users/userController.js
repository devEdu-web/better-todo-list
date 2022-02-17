const User = require('./User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerUser(req, res, next) {

    try {

        const {name, email, password} = req.body
        const currentEmailExists = await User.findByEmail(email)
        const passwordEncoded = await bcrypt.hash(password, 10)

        if(currentEmailExists) return res.send('User already exists.')
        
        const currentUser = new User(name, email, passwordEncoded)

        currentUser.save()
        res.send('User saved')

    } catch (e) {
        res.send(e)
    }



}

async function logUser(req, res, next) {

    const {email, password} = req.body
    const doesPasswordsMatch = await User.validatePassword(email, password)
    const userExists = await User.findByEmail(email)
    const {name, _id} = userExists

    if(!userExists || !doesPasswordsMatch) return res.send('Email or password incorrect')
    const userToken = jwt.sign({name, userId: _id.toString()}, process.env.JWT_SECRET, {expiresIn: 600000})

    res.cookie('tk', userToken)
    res.cookie('userName', name)
    res.cookie('userId', _id.toString())

    res.redirect('/')

}


module.exports = {registerUser, logUser}