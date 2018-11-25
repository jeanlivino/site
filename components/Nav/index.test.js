import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Nav from './index'
import navigation from '../../static/json/nav.json'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Nav items={navigation} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Nav items={navigation} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
