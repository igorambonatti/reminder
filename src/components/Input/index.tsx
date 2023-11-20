import { InputHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  error?: string | null
  mask?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, mask, ...props }, ref) => {
    const renderInput = () => {
      return <S.Input ref={ref} autoComplete="none" {...props} />
    }

    const renderMaskedInput = () => {
      return <S.InputMask inputRef={ref} mask={mask!} {...props} />
    }

    return (
      <S.InputWrapper className={className}>
        {label}
        {mask ? renderMaskedInput() : renderInput()}
        {error && <span className="error-message">{error}</span>}
      </S.InputWrapper>
    )
  },
)

Input.displayName = 'Input'
