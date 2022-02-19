const { Validator } = require('../validation/Validator');

function taskValidation(req, res, next) {
    const validator = new Validator();
    const { priority, task } = req.body;

    try {
        const errors = validator.isEmpty(priority).isEmpty(task);
        next();
    } catch (e) {
        res.status(400).json({
            error: true,
            message: e.message,
        });
    }
}

module.exports = { taskValidation };
