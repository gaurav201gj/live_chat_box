const { StatusCodes } = require("http-status-codes")
const db = require('../config/db')


const postComment = (req, res) => {

    let cmt = { content: "send me your nudes!..." }

    const sql = `insert into comments(content,userId) values('${cmt.content}',(select userId from users where username='GAURAV'))`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })





}

const updateComment =(req,res)=>{

    const sql =`select users from users where username='Gaurav'`;
    
    
    db.query(sql,(err,result)=>{

        if(err){
            throw err;
        }

        res.status(StatusCodes.OK).json(result)


    })



}



//all comments according to time line
const getAllComments = (req, res) => {
    let userId = '0x37636AB526FA11EDB1593C7C3F59FFDB';// this userId will be from a middleware that checks if the user is valid
    const sql = `select comment from comments where userId=${userId}))`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })


}



const deleteComment = (req, res) => {
    let userId = '0x37636AB526FA11EDB1593C7C3F59FFDB';// this userId will be from a middleware that checks if the user is valid
    const sql = `select comment from comments where userId=${userId}))`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);
        res.status(StatusCodes.OK).json(result)
    })
}



module.exports = { deleteComment, getAllComments, postComment,updateComment }