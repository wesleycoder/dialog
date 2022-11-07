import { describe, expect, it } from 'vitest'
import App from './App'
import { render } from '/config/test/render'

describe('App', () => {
  it('should render', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toMatchSnapshot()
  })
})
