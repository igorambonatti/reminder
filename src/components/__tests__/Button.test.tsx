import '@testing-library/jest-dom'
import { fireEvent, render } from '../../utils/test-utils'
import { Button } from '../Button'

describe('Button Component', () => {
  test('renders with children', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  test('handles onClick event', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })
})
