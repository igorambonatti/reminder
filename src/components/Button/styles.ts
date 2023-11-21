import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 0.8rem;
  @media ${breakpoints.m} {
    font-size: 1rem;
  }
`
