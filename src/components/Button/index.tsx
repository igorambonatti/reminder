import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>{children}</S.Container>
)
