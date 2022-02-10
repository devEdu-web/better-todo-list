const mongoClient = require('../../config/database')
const bcrypt = require('bcrypt')

class User {
    constructor(name, email, password) {
        this.name = name,
        this.email = email,
        this.password = password
    }

    save() {
        const db = mongoClient.getDb()

        return db.collection('users').insertOne(this)

    }

    static findByEmail(email) {
        const db = mongoClient.getDb()
        return db.collection('users').findOne({email})
    }

    static async validatePassword(email, password) {
        const db = mongoClient.getDb()
        const user = await db.collection('users').findOne({email})
        if(!user) return false

        return bcrypt.compare(password, user.password)

    }

}

module.exports = User