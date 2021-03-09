import React from "react"
import { mount } from "enzyme"
import CommentList from "Components/CommentList"
import Root from "Root"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  )
})

it("should have a div for every comment", () => {})
