import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakpoints.m} {
    height: 100vh;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  @media ${breakpoints.m} {
    max-height: 746px;
  }
`
export const Logo = styled.img`
  margin-bottom: 3rem;
  margin-top: 2rem;
  @media ${breakpoints.m} {
    margin-top: 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex: 1;
  border-radius: 2.5rem;
  box-shadow: 0px 4px 28px 2px #d1dcf0;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  flex-direction: column-reverse;
  @media ${breakpoints.m} {
    flex-direction: row;
  }
`
export const Reminder = styled.div`
  display: flex;
  flex: 1;
`
export const Image = styled.div``
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #101277 0%, #421f91 100%);
  @media ${breakpoints.m} {
    width: 28rem;
  }
`
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
  margin-top: 3.7rem;
`
export const Year = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 4.6rem;
  font-weight: 800;
`
export const Month = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 0;
`
export const Separator = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`
export const BottomText = styled.span`
  text-align: center;
  font-size: 0.7rem;
  margin-top: auto;
  margin-bottom: 3rem;
`
export const ActionButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border: none;
  display: flex;
`
