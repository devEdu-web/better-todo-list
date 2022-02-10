const {Router} = require('express')
const tasksController = require('../components/tasks/tasksController')
const router = Router()


router.get('/', tasksController.getTasksPage)


module.exports = router