const { StatusCodes } = require("http-status-codes")
const db = require('../config/db')



const getAllUsers = (req, res) => {
    let sql = `SELECT * FROM users`;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })

}
const getAUser = (req, res) => {
    const { Id } = req.params
    console.log(req.params);
    let sql = `SELECT * FROM users WHERE username='${Id}'`;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })
}



const addUser = (req, res,next) => {

    let user = { username: "gaurav", gmail: "rgaurav222001@gmail.com", description: "the first user" }
    let sql = `INSERT INTO users(userId,username,gmail,description) values('${user.userId}','${user.username}','${user.gmail}','${user.description}')`;

    db.query(sql, (err, result) => {
        if (err) next(err)
        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })

}

const deleteUser = (req, res) => {
    const { Id } = req.params

    console.log(req.params);
    let sql = `DELETE FROM users WHERE username='${Id}'`;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })

}

const updateUser = (req,res) => {
    const { Id } = req.params
    //ALL VALUES MUST BE PROVID 
    let user = {username: "gaurav2", gmail: "rgaurav222001@gmail.com", description: "the SECOND user" }

    console.log(req.params);
    let sql = `UPDATE users SET username='${user.username}', gmail='${user.gmail}', description='${user.description}' WHERE username='${Id}'`;

    db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })
}


module.exports = {
    getAUser, getAllUsers, updateUser, deleteUser, addUser
}