const User = require('./User')
const bcrypt = require('bcrypt')

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


module.exports = {registerUser}