import React, { useState } from "react"
import { connect } from "react-redux"
import { saveComment, fetchComments } from "Actions/actions"

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    saveComment(comment)
    setComment("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button data-test="submit-button">Submit</button>
      </form>
      <button data-test="fetch-button" onClick={fetchComments}>
        Fetch Comments
      </button>
    </>
  )
}

export default connect(null, { saveComment, fetchComments })(CommentBox)
