import NoResult from '@assets/no_result.svg'
import { Event } from '@context/Reminders'
import { useReminders } from '@hooks/useReminders'
import { compareAsc, format, isSameDay, parse } from 'date-fns'
import { useCallback } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import * as S from './styles'

export const List: React.FC = () => {
  const { selectedDate, handleChangeReminderMode, events } = useReminders()

  const hasEvent = (dateToCheck: Date): boolean => {
    return Object.entries(events || {}).some(([dateString]) => {
      const dateFromObject = parse(dateString, 'MM/dd/yyyy', new Date())
      return isSameDay(dateFromObject, dateToCheck)
    })
  }

  const sortedArray = events?.[format(selectedDate, 'MM/dd/yyyy')]?.reduce(
    (acc: { current: Event; converted: Date }[], curr) => {
      const dateObject = parse(curr.time, 'HH:mm', new Date())
      acc.push({ current: curr, converted: dateObject })
      return acc
    },
    [],
  )
  sortedArray?.sort((a, b) => compareAsc(a.converted, b.converted))
  const resultArray = sortedArray?.map(({ current }) => current)

  const renderEventList = useCallback(() => {
    return resultArray?.map((event) => (
      <S.Card key={event.id}>
        <S.ColorBar color={event.color} />
        <S.CardContent>
          <S.Title>{event.title}</S.Title>
          <S.Description>{event.description}</S.Description>
        </S.CardContent>
        <S.CardTime>
          <FiClock size={32} color={'#797979'} />
          <S.Time>{event.time}</S.Time>
        </S.CardTime>
        <S.EditButtonEvent
          onClick={() => handleChangeReminderMode({ mode: 'edit_reminder', event })}
        >
          <FaPencilAlt size={16} color={'#fff'} />
        </S.EditButtonEvent>
      </S.Card>
    ))
  }, [events, selectedDate])

  return (
    <S.Container>
      <S.Top>
        <S.Date>{format(selectedDate, 'EEEE, MMMM d, yyyy')}</S.Date>
        <S.AddButton onClick={() => handleChangeReminderMode({ mode: 'add_reminder' })}>
          Add reminder
        </S.AddButton>
      </S.Top>
      <S.Scroll>
        <S.Content>
          {hasEvent(selectedDate) ? (
            renderEventList()
          ) : (
            <S.NoResultsWrapper>
              <S.NoResultsImage src={NoResult} alt="" />
              <S.DescriptionText>No reminders registered so far</S.DescriptionText>
            </S.NoResultsWrapper>
          )}
        </S.Content>
      </S.Scroll>
    </S.Container>
  )
}
