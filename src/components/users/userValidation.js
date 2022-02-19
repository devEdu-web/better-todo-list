const { Validator } = require('../validation/Validator');

function registerValidation(req, res, next) {
    const validator = new Validator();
    const { name, email, password, confirmPassword } = req.body;

    try {
        const errors = validator
            .isEmpty(name)
            .minLength('Name', 3, name)
            .isEmail(email)
            .isEmpty(password)
            .minLength('Password', 6, password)
            .passwordsMatch(password, confirmPassword);

        next();
    } catch (e) {
        console.log(e);
        res.json({
            error: true,
            message: e.message,
        });
    }
}

module.exports = { registerValidation };
