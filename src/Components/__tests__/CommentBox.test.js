import React from "react"
import CommentBox from "Components/CommentBox"
import { mount } from "enzyme"
import { unmountComponentAtNode } from "react-dom"

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it("should have a text area and button", () => {
  //   console.log(wrapped.find("textarea").length)

  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find("button").length).toEqual(1)
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
