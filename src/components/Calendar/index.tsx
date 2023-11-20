import { daysOfWeek } from '@constants/form'
import { IEvent } from '@context/Reminders'
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  parse,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import * as S from './styles'

interface CalendarProps {
  selectedDate: Date
  selectedMonth: Date
  onSelectDay: (day: Date) => void
  events: IEvent | null
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedMonth,
  selectedDate,
  onSelectDay,
  events,
  ...rest
}) => {
  const firstDayOfMonth = startOfMonth(selectedMonth)
  const lastDayOfMonth = endOfMonth(selectedMonth)
  const daysOfMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })
  const firstDayOfWeek = startOfWeek(daysOfMonth[0])

  const hasEvent = (dateToCheck: Date): boolean => {
    return Object.entries(events || {}).some(([dateString]) => {
      const dateFromObject = parse(dateString, 'MM/dd/yyyy', new Date())
      return isSameDay(dateFromObject, dateToCheck)
    })
  }
  return (
    <S.Container {...rest}>
      <S.CalendarWrapper>
        {daysOfWeek.map((day) => (
          <S.WeekDay key={day}>{day}</S.WeekDay>
        ))}
        {eachDayOfInterval({ start: firstDayOfWeek, end: daysOfMonth[daysOfMonth.length - 1] }).map(
          (date) => {
            const isCurrentMonth = date.getMonth() === daysOfMonth[0].getMonth()
            const isDateSelected = isSameDay(date, selectedDate)
            const hasEventForDate = hasEvent(date)
            return isCurrentMonth ? (
              <S.Day
                key={date.toISOString()}
                isSelected={isDateSelected}
                onClick={() => {
                  onSelectDay(date)
                }}
              >
                {hasEventForDate && <S.EventSinalizer />}
                {format(date, 'd')}
              </S.Day>
            ) : (
              <S.Day key={date.toISOString()}>{''}</S.Day>
            )
          },
        )}
      </S.CalendarWrapper>
    </S.Container>
  )
}
