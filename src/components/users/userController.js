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
        
        // await currentUser.save()
        
        console.log(currentUser)

        res.status(201).json({
            message: 'User Created with success.'
        })

    } catch (e) {
        console.log(e)
        res.status(401).json({
            error: e.message,
        })
    }



}

async function logUser(req, res, next) {

    const {email, password} = req.body
    const doesPasswordsMatch = await User.validatePassword(email, password)
    const userExists = await User.findByEmail(email)
    const {name, _id} = userExists

    if(!userExists || !doesPasswordsMatch) return res.send('Email or password incorrect')
    const userToken = jwt.sign({name, userId: _id.toString()}, process.env.JWT_SECRET, {expiresIn: 600}) // expire in 10 minutes

    res.cookie('tk', userToken, {expiresIn: new Date(Date.now() + 600000)}) // expire in 10 minutes
    res.cookie('userName', name)
    res.cookie('userId', _id.toString())

    res.redirect('/')

}

function logout(req, res, next) {
    res.clearCookie('tk')
    res.redirect('/login')

}

// Adicionar validation na hora de mandar as tasks para não ir task vazia
//Adicionar ajax com validation no login e register
 
module.exports = {registerUser, logUser, logout}