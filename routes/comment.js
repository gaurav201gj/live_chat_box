const express = require('express')

const router = express.Router()

const { getComment, deleteComment, updateComment, getAllComments, postComment } = require("../controllers/comments")

router.route('/').get(postComment).get(getAllComments)
router.route('/comment/:id').post(updateComment).delete(deleteComment)


module.exports = router