import React from "react"
import ReactDOM from "react-dom"
import App from "../App"
import CommentBox from "../CommentBox"

test("shows hello world", () => {
  // Creating div on JSDOM
  const div = document.createElement("div")

  //   Render App component on JSDOM div. This JSDOM is floating in Jest terminal not in any browser setup
  ReactDOM.render(<App />, div)

  //   Expect div to contain "Hello world" as its text
  expect(div.innerHTML).toContain("Hello world")

  //   Unmount/cleanup JSDOM div as our test cases have finished
  ReactDOM.unmountComponentAtNode(div)
})

test("shows comment Box", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)

  expect(div.innerHTML).toContain("Comment Box")

  ReactDOM.unmountComponentAtNode(div)
})
