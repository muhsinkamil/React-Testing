import React from "react"
import Root from "Root"
import CommentBox from "Components/CommentBox"
import { mount } from "enzyme"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it("should have a text area and button", () => {
  //   console.log(wrapped.find("textarea").length)

  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find(`[data-test='submit-button']`).length).toEqual(1)
  expect(wrapped.find(`[data-test='fetch-button']`).length).toEqual(1)
})

describe("Testing textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "Mohamed",
      },
    })

    wrapped.update()
  })

  it("textarea is editable and has correct value", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("Mohamed")
  })

  it("submit form and textarea is cleared", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("Mohamed")

    wrapped.find("form").simulate("submit")

    wrapped.update()

    expect(wrapped.find("textarea").prop("value")).toEqual("")
  })
})
