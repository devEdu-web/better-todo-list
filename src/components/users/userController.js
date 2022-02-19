const User = require('./User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        const currentEmailExists = await User.findByEmail(email);
        const passwordEncoded = await bcrypt.hash(password, 10);

        if (currentEmailExists)
            return res.status(400).json({
                error: true,
                message: 'Email already exists.',
            });

        const currentUser = new User(nameCapitalized, email, passwordEncoded);
        console.log(currentUser);
        await currentUser.save();

        res.redirect(303, '/login');
    } catch (e) {
        console.log(e);
        res.status(401).json({
            error: true,
            message: e.message,
        });
    }
}

async function logUser(req, res, next) {
    const { email, password } = req.body;
    const doesPasswordsMatch = await User.validatePassword(email, password);
    const userExists = await User.findByEmail(email);

    if (!userExists || !doesPasswordsMatch)
        return res.status(400).json({
            error: true,
            message: 'Email or password incorrect',
        });

    const { name, _id } = userExists;
    const userToken = jwt.sign(
        { name, userId: _id.toString() },
        process.env.JWT_SECRET,
        { expiresIn: 600 }
    ); // expire in 10 minutes

    res.cookie('tk', userToken, { expiresIn: new Date(Date.now() + 600000) }); // expire in 10 minutes
    res.cookie('userName', name);
    res.cookie('userId', _id.toString());

    res.redirect('/');
}

function logout(req, res, next) {
    res.clearCookie('tk');
    res.redirect('/login');
}

module.exports = { registerUser, logUser, logout };
