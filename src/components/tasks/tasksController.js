const Task = require('./Task');

async function getTasksPage(req, res, next) {
    const userId = req.cookies.userId;
    const userName = req.cookies.userName;
    const userTasks = await Task.getAll(userId).toArray();
    console.log(userName);
    res.render('index', {
        tasks: userTasks[0],
        userName,
    });
}

async function addNewTask(req, res, next) {
    const { task, priority } = req.body;
    const userId = req.cookies.userId;
    const currentTask = new Task(userId, task, priority);
    await currentTask.save();

    res.redirect('/');
}

async function deleteTask(req, res, next) {
    const taskIndex = Number(req.params.taskIndex);
    const userId = req.cookies.userId;
    const userTasks = await Task.getAll(userId).toArray();

    userTasks[0].tasks.splice(taskIndex, 1);

    await Task.deleteTask(userId, userTasks[0].tasks);

    res.sendStatus(200);
}

module.exports = { getTasksPage, addNewTask, deleteTask };
