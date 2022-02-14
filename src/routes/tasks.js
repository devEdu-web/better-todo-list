const {Router} = require('express')
const tasksController = require('../components/tasks/tasksController')
const authMiddleware = require('../components/authentication/authMiddleware')
const router = Router()


router.get('/', authMiddleware.canUserAccessIndexPage, tasksController.getTasksPage)
router.post('/add-task', tasksController.addNewTask)

module.exports = router