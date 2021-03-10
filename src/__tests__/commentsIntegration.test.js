import React from "react"
import { mount } from "enzyme"
import Root from "Root"
import App from "Components/App"
import moxios from "moxios"

beforeEach(() => {
  moxios.install()
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Mohamed" }, { name: "Muhsin" }],
  })
})

afterEach(() => {
  moxios.uninstall()
})

it("can fetch a list of comments and display them", (done) => {
  // Render an entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // find the fetch button and click to fetch comments
  wrapped.find(`[data-test='fetch-button']`).simulate("click")

  //expect to find the list of comments
  moxios.wait(() => {
    wrapped.update()

    expect(wrapped.find(`[data-test='comment']`).length).toEqual(2)

    done()
    wrapped.unmount()
  })
})
