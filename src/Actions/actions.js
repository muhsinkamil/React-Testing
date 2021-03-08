import { SAVE_COMMENT } from "Actions/types"

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}
