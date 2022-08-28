const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())

app.use(express.json())

app.use('/users',require('./routes/users'))

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: "Something went worrng"
    })
})



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`sever is listening on ${port}`))