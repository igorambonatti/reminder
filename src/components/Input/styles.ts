import ReactInputMask from 'react-input-mask'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${(props) => props.theme.colors.font};
  .error-message {
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: #e33c3c;
  }
`
export const InputMask = styled(ReactInputMask)`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  height: 3rem;
  border-radius: 6px;
  padding: 0 0.5rem;
  border: 1px solid rgba(49, 39, 37, 0.4);
  margin-top: 0.2rem;
  font-size: 1rem;
`
export const Input = styled.input`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  height: 3rem;
  border-radius: 6px;
  padding: 0 0.5rem;
  border: 1px solid rgba(49, 39, 37, 0.4);
  margin-top: 0.2rem;
  font-size: 1rem;
`
