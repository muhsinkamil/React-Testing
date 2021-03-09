import { SAVE_COMMENT } from "Actions/types"
import { saveComment } from "Actions/actions"

describe("saveComment action", () => {
  it("has correct type", () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it("has correct payload", () => {
    const action = saveComment("Testing comment")

    expect(action.payload).toEqual("Testing comment")
  })
})
