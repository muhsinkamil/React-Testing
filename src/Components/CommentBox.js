import React, { useState } from "react"
import { connect } from "react-redux"
import { saveComment } from "Actions/actions"

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    saveComment(e.target.value)
    setComment("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Comment</h4>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button data-test="submit-button">Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { saveComment })(CommentBox)
