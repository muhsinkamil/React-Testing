import { FETCH_COMMENTS, SAVE_COMMENT } from "Actions/types"
import axios from "axios"

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}

export const fetchComments = () => async (dispatch) => {
  const response = await axios.get(
    "http://jsonplaceholder.typicode.com/comments"
  )
  dispatch({ type: FETCH_COMMENTS, payload: response })
}
