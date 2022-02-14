const Task = require('./Task')

async function getTasksPage(req, res, next) {
    const userId = req.cookies.userId
    const userTasks = await Task.getAll(userId).toArray()

    res.render('index', {
        tasks: userTasks[0]
    })

}

async function addNewTask(req, res, next) {
    const {task, priority} = req.body
    const userId = req.cookies.userId
    const currentTask = new Task(userId, task, priority)
    await currentTask.save()

    res.redirect('/')
}

module.exports = {getTasksPage, addNewTask}