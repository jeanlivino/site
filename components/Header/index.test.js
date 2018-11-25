import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from './index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Header />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
