const { StatusCodes } = require("http-status-codes")

const notFound=(req,res)=>{

    res.status(StatusCodes.NOT_FOUND).json({"msg":"the route does not exists!.."})
}

module.exports =notFound;