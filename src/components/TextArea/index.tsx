import { TextareaHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  error?: string | null
}

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        {label}
        <S.TextArea ref={ref} {...props} rows={3} />
        {error && <span className="error-message">{error}</span>}
      </S.InputWrapper>
    )
  },
)

TextArea.displayName = 'TextArea'
