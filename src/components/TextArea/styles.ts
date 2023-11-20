import styled from 'styled-components'

export const InputWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.font};
  .error-message {
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.error};
  }
`
export const TextArea = styled.textarea`
  resize: none;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  height: 4rem;
  border-radius: 6px;
  border: 1px solid rgba(49, 39, 37, 0.4);
  margin-top: 0.2rem;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
`
