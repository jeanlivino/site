import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Sponsors from './index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Sponsors />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Sponsors />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
