const express = require("express")
const { StatusCodes } = require("http-status-codes")
const pool = require("../config/db")
const { getAUser, getAllUsers, updateUser, deleteUser, addUser } = require('../controllers/users')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/username/:Id', getAUser)
router.get('/delete/:Id', deleteUser)
router.get('/adduser',addUser)
router.get('/update/:Id',updateUser)
//users routes to get users


module.exports = router