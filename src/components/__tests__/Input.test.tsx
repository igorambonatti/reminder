import { render } from '../../utils/test-utils'
import { Input } from '../Input'

describe('Input Component', () => {
  it('renders the input without error', () => {
    const { getByRole, queryByText } = render(<Input />)

    const inputElement = getByRole('textbox')
    const errorMessage = queryByText('Error message')

    expect(inputElement).toBeInTheDocument()
    expect(errorMessage).toBeNull()
  })

  it('renders the input with a label', () => {
    const { getByText } = render(<Input label="Test Label" />)

    const labelElement = getByText('Test Label')

    expect(labelElement).toBeInTheDocument()
  })

  it('renders the input with an error message', () => {
    const { getByRole, getByText } = render(<Input error="This is an error" />)

    const inputElement = getByRole('textbox')
    const errorMessage = getByText('This is an error')

    expect(inputElement).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })
})
