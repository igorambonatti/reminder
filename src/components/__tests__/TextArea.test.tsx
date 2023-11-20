import { render } from '../../utils/test-utils'
import { TextArea } from '../TextArea'

describe('TextArea Component', () => {
  it('renders the textarea without error', () => {
    const { getByRole, queryByText } = render(<TextArea />)

    const textareaElement = getByRole('textbox')
    const errorMessage = queryByText('Error message')

    expect(textareaElement).toBeInTheDocument()
    expect(errorMessage).toBeNull()
  })

  it('renders the textarea with a label', () => {
    const { getByText } = render(<TextArea label="Test Label" />)

    const labelElement = getByText('Test Label')

    expect(labelElement).toBeInTheDocument()
  })

  it('renders the textarea with an error message', () => {
    const { getByRole, getByText } = render(<TextArea error="This is an error" />)

    const textareaElement = getByRole('textbox')
    const errorMessage = getByText('This is an error')

    expect(textareaElement).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })
})
