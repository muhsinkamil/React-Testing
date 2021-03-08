import { SAVE_COMMENT } from "Actions/types"

const comments = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]

    default:
      return state
  }
}

export default comments
