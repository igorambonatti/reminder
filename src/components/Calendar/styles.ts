import styled from 'styled-components'

interface DayProps {
  isSelected?: boolean
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  min-width: 400px;
  margin: 20px auto;
`

export const WeekDay = styled.span`
  text-align: center;
`
export const EventSinalizer = styled.div`
  width: 0.45rem;
  height: 0.45rem;
  background-color: #00ffcc;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  border-radius: 20px;
`

export const Day = styled.button<DayProps>`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  border: none;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  width: ${(props) => (props.isSelected ? '42px' : '42px')};
  height: ${(props) => (props.isSelected ? '42px' : '42px')};
  border-radius: ${(props) => (props.isSelected ? '1000px' : 'none')};
  background: ${(props) =>
    props.isSelected ? 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)' : 'transparent'};
`
