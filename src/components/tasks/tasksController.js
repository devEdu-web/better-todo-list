const Task = require('./Task')

function getTasksPage(req, res, next) {

    res.render('index')

}

async function addNewTask(req, res, next) {
    const {task, priority} = req.body
    const userId = req.cookies.userId
    const currentTask = new Task(userId, task, priority)
    await currentTask.save()

    res.redirect('/')
}

module.exports = {getTasksPage, addNewTask}