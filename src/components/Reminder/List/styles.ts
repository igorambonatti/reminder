import { Button } from '@components/Button'
import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

interface IColorBar {
  color: string
}
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const Content = styled.div`
  margin: 2.3rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  flex: 1;
`
export const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  font-size: 22px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`
export const Top = styled.div`
  padding: 2.3rem 2.3rem 2.3rem 2.3rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const Date = styled.span`
  color: ${(props) => props.theme.colors.font};

  font-weight: normal;
  font-size: 0.8rem;
  @media ${breakpoints.m} {
    font-size: 1.3rem;
  }
`
export const NoResultsImage = styled.img`
  max-width: 300px;
  @media ${breakpoints.m} {
    max-width: 450px;
  }
`
export const AddButton = styled(Button)`
  background: linear-gradient(90deg, #ff465d 0%, #bc46ba 100%);
  box-shadow: 0px 4px 28px 2px #d1dcf0;
`
export const DescriptionText = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.3rem;
  margin-top: -1rem;
  font-weight: 600;
`
export const Card = styled.div`
  height: 134px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 28px 2px #d1dcf0;
  margin-bottom: 2rem;
  border-radius: 1rem;
  display: flex;
  position: relative;
`

export const EditButtonEvent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(90deg, #3bc6fb 0%, #0fc 100%);

  position: absolute;
  bottom: -0.6rem;
  right: -0.6rem;
  border-radius: 20px;
  border: none;
`
export const ColorBar = styled.div<IColorBar>`
  margin: 0.8rem;
  display: flex;
  background-color: ${(props) => props.color};
  width: 0.8rem;
  border-radius: 100px;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 0.85rem;
`
export const Description = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.font};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const CardContent = styled.div`
  margin: 0.8rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Scroll = styled.div`
  overflow-y: scroll;
  @media ${breakpoints.m} {
    margin: 0 1.5rem 0 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.purple};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
  }
`
export const CardTime = styled.div`
  width: 130px;
  border-left: 1px solid #d1dcf0;
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Time = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.lightGray};
  margin-top: 0.3rem;
`
