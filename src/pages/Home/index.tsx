import Logo from '@assets/codelitt_logo.svg'
import { Calendar } from '@components/Calendar'
import { Add, Edit, List } from '@components/Reminder'
import { useReminders } from '@hooks/useReminders'
import { format } from 'date-fns'
import { useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import * as S from './styles'

const Home: React.FC = () => {
  const {
    selectedMonth,
    handleIncreaseMonth,
    handleDecreaseMonth,
    reminderMode,
    selectedDate,
    handleSelectDay,
    handleChangeReminderMode,
    events,
    resetCurrentDate,
  } = useReminders()

  const componentsRemider = {
    list_reminder: <List />,
    add_reminder: <Add />,
    edit_reminder: <Edit />,
  }
  const typesOfReminder = useCallback(() => {
    return componentsRemider[reminderMode.mode]
  }, [reminderMode])

  const handleDay = (day: Date) => {
    handleChangeReminderMode({ mode: 'list_reminder' })
    handleSelectDay(day)
  }
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image>
          <S.Logo src={Logo} alt="codelitt_logo" />
        </S.Image>
        <S.Content>
          <S.Reminder>{typesOfReminder()}</S.Reminder>
          <S.CalendarContainer>
            <S.Top>
              <S.Year>{format(selectedMonth, 'yyyy')}</S.Year>
              <S.Month>{format(selectedMonth, 'MMMM')}</S.Month>
            </S.Top>
            <S.Navigation>
              <S.ActionButton onClick={handleDecreaseMonth}>
                <FiChevronLeft size={24} />
              </S.ActionButton>
              <S.Separator onClick={resetCurrentDate}>•</S.Separator>
              <S.ActionButton onClick={handleIncreaseMonth}>
                <FiChevronRight size={24} />
              </S.ActionButton>
            </S.Navigation>
            <Calendar
              selectedDate={selectedDate}
              onSelectDay={handleDay}
              selectedMonth={selectedMonth}
              events={events}
            />
            <S.BottomText>© 2022 Codelitt Inc All rights reserved</S.BottomText>
          </S.CalendarContainer>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
