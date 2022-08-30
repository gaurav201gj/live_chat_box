const { StatusCodes } = require("http-status-codes");
//asynchronous errors means the errors which genrated by async function 
//express will not handle them you have to pass them to express [express handles synchronous errors only]
//to catch async error or to get them into error-handler you need to pass them to next like this next(err) 
// so async error will come here and you can handle the error and send them back to user
const errorHandler = (err, req, res, next) => {

    let customError = {
        errname: err.code || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.sqlMessage || "Something went wrong try again later",
    };
    if (err.name === "ValidationError") {
        customError.msg = `Object.values(err.errors)
          .map((item) => item.message)
          .join(",");`
        customError.statusCode = 400;
    }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(
            err.keyValue
        )}field, please choose another value`;
        customError.statusCode = 400;
    }

    if (err.name === "CastError") {
        customError.msg = `No item found with id: ${err.values}`;
        customError.statusCode = 404;
    }
    console.log("here is the error 💓💓💓💓", err);
    res.status(500).json({
        errname: customError.errname,
        message: customError.msg
    })
    // next()

}

module.exports = errorHandler