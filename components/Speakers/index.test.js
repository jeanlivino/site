import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Speakers from './index'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Speakers />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Speakers />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
