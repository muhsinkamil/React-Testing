import { SAVE_COMMENT } from "Actions/types"

const comments = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      console.log("saving comment")
      return [...state, action.payload]
    default:
      return state
  }
}

export default comments
