const mongoClient = require('../../config/database');

class Task {
    constructor(userId, task, priority) {
        (this.userId = userId), (this.task = task), (this.priority = priority);
    }

    static getAll(userId) {
        const db = mongoClient.getDb();
        return db.collection('tasks').find({ userId });
    }

    getUserTasks() {
        const db = mongoClient.getDb();
        return db.collection('tasks').findOne({ userId: this.userId });
    }

    static async deleteTask(userId, updatedTasks) {
        const db = mongoClient.getDb();
        return db
            .collection('tasks')
            .updateOne({ userId: userId }, { $set: { tasks: updatedTasks } });
    }

    async save() {
        const db = mongoClient.getDb();
        const isThereTasks = await this.getUserTasks();
        if (isThereTasks) {
            return db
                .collection('tasks')
                .updateOne(
                    { userId: this.userId },
                    {
                        $push: {
                            tasks: { task: this.task, priority: this.priority },
                        },
                    }
                );
        } else {
            return db.collection('tasks').insertOne({
                userId: this.userId,
                tasks: [{ task: this.task, priority: this.priority }],
            });
        }
    }
}

module.exports = Task;
