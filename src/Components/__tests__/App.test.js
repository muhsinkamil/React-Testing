import { shallow } from "enzyme/build"
import React from "react"
import App from "Components/App"
import CommentBox from "Components/CommentBox"
import CommentList from "Components/CommentList"

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it("has an instance of comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it("has an instance of Comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
