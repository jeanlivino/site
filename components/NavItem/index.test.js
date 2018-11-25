import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NavItem from './index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <NavItem />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<NavItem />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
