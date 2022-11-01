import { describe, expect, it } from 'vitest'
import { render } from '../config/test/render'
import App from './App'

describe('App', () => {
  it('should render', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toMatchSnapshot()
  })
})
