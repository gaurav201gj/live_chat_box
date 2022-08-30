const express = require('express')
const { StatusCodes } = require("http-status-codes")
const handleUser = (req, res, next) => {

    const userId = req.user.userId


    if (!userId) {
        res.status(StatusCodes.UNAUTHORIZED).json({ "msg": "user does not exists" })
    }

    next()






}



module.exports = handleUser


