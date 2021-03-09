import { SAVE_COMMENT } from "Actions/types"
import comments from "Reducers/comments"

it("works on SAVE_COMMENT action", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "Testing Comment",
  }

  expect(comments([], action)).toEqual(["Testing Comment"])
})

it("does not throw error on INVALID action", () => {
  const invalidComment = comments([], { type: "INVALID_ACTION" })

  expect(invalidComment).toEqual([])
})
