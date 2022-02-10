require('dotenv').config()
const app = require('./src/app')
const db = require('./src/config/database')
const port = process.env.PORT



db.connectWithMongo()
.then(result => {
    app.listen(port, (err) => {
        if(err) return console.log(err)
        console.log(`Server running on port ${port}`)
    })    

})
.catch(e => console.log(e))