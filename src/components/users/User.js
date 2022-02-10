const mongoClient = require('../../config/database')

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

}

module.exports = User