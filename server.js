require('dotenv').config()
const app = require('./src/app')
const port = process.env.PORT

app.listen(port, (err) => {
    if(err) return console.log(err)

    console.log(`Server running on port ${port}`)

})