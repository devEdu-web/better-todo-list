const mongoClient = require('../../config/database')

class Task {
    constructor(userId, task, priority) {
        this.userId = userId,
        this.task = task,
        this.priority = priority
    }

    getAll() {
        const db = mongoClient.getDb()
        return db.collection('tasks').find({userId: this.userId})

    }

    async save() {
        const db = mongoClient.getDb()
        const isThereTasks = await this.getAll().toArray()

        if(isThereTasks.length > 0) {
            return db.collection('tasks').updateOne(
                {userId: this.userId},
                {$push: {tasks: this.task}}
            )
        }
        else {
            return db.collection('tasks').insertOne({
                userId: this.userId,
                tasks: [this.task],
                priority: this.priority
            })
        }
    }
    

}

module.exports = Task