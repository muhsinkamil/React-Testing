import React from "react"
import { mount } from "enzyme"
import CommentList from "Components/CommentList"
import Root from "Root"

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2", "comment3"],
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it("should have a div for every comment", () => {
  expect(wrapped.find("div").length).toEqual(3)
})

it("shows text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment1")
  expect(wrapped.render().text()).toContain("comment2")
  expect(wrapped.render().text()).toContain("comment3")
})
