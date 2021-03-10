import React from "react"
import { connect } from "react-redux"

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index} data-test="comment">
        {index + 1} - {comment}
      </div>
    )
  })
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)
