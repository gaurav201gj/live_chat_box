//packages
require('dotenv')
require('express-async-errors')
const fs = require('fs/promises')
const express = require('express');
const bodyParser = require('body-parser');

//routes
const userRoute = require('./routes/users')
const commentRoute = require('./routes/comment')




// middleware
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error-handler');
const handleUser = require("./middleware/handleUser")


const app = express()

app.use(bodyParser.json())

app.use(express.json())

app.use('/users', handleUser, userRoute)
app.use('/comment', handleUser, commentRoute)
// app.use('/comments', (req, res, next) => {

//     setTimeout(() => {
//         try {
//           throw new Error('BROKEN')
//         } catch (err) {
//           next(err)
//         }
//       }, 100)


// })



app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 8000;

const start = () => {
    try {
        app.listen(port, () => console.log(`sever is listening on ${port}`))

    } catch (error) {
        console.log(error);
    }
}

start()
