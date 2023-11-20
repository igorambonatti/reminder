import { Button } from '@components/Button'
import styled from 'styled-components'

interface ColorButton {
  color: string
  selected?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const Date = styled.span`
  color: ${(props) => props.theme.colors.font};
  font-size: 22px;
  font-weight: normal;
`
export const InputGroup = styled.div`
  display: flex;
  gap: 0.4rem;
`
export const ColorGroup = styled.div`
  display: flex;
  flex: 1;
  gap: 0.3rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
`
export const ColorLabel = styled.span`
  color: ${(props) => props.theme.colors.font};
`
export const Colors = styled.div`
  margin-top: 1.4rem;
`
export const ColorButton = styled.button<ColorButton>`
  border: ${(props) =>
    props.selected ? '2.5px solid rgba(49, 39, 37, 0.4)' : '1px solid rgba(49, 39, 37, 0.4)'};
  border-radius: 0.4rem;
  background-color: ${(props) => props.color};
  width: 55px;
  height: 48px;
`
export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`
export const CancelButton = styled(Button)`
  background: #626262;
  box-shadow: 0px 4px 28px 2px #d1dcf0;
`
export const SaveButton = styled(Button)`
  background: #394abc;
  box-shadow: 0px 4px 28px 2px #d1dcf0;
`
export const Break = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  > div {
    height: 1px;
    width: 100%;
    background: rgba(49, 39, 37, 0.2);
  }
`
