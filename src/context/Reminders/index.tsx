import { addMonths, format, parse, subMonths } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'

import { createContext } from 'use-context-selector'

export type Event = {
  title: string
  description: string
  time: string
  color: string
  id: string
  date?: string
}
type Mode = 'list_reminder' | 'add_reminder' | 'edit_reminder'

export type IReminderMode = {
  mode: Mode
  event?: Event
}

type EventDate = string

export type IEvent = Record<EventDate, Event[]>

export interface IRemindersContext {
  selectedDate: Date
  selectedMonth: Date
  handleSelectDay(day: Date): void
  handleIncreaseMonth(): void
  handleDecreaseMonth(): void
  reminderMode: IReminderMode
  handleChangeReminderMode(props: IReminderMode): void
  events: IEvent | null
  handleAddEvent(event: IEvent): void
  handleDeleteEvent(id: string): void
  handleEditEvent(event: Event): void
  resetCurrentDate(): void
}
const RemindersContext = createContext<IRemindersContext>({} as IRemindersContext)

RemindersContext.displayName = 'Reminders'

const RemindersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [reminderMode, setReminderMode] = useState<IReminderMode>({ mode: 'list_reminder' })
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date())
  const [events, setEvents] = useState<IEvent | null>(null)

  const handleIncreaseMonth = useCallback(() => {
    setSelectedMonth((prevDate) => addMonths(prevDate, 1))
  }, [selectedMonth])

  const handleChangeReminderMode = useCallback((props: IReminderMode) => {
    setReminderMode({ mode: props.mode, event: props?.event })
  }, [])

  const handleDecreaseMonth = useCallback(() => {
    setSelectedMonth((prevDate) => subMonths(prevDate, 1))
  }, [selectedMonth])

  const resetCurrentDate = useCallback(() => {
    setSelectedMonth(new Date())
    setSelectedDate(new Date())
  }, [selectedMonth])

  const handleAddEvent = useCallback(
    (newEvent: IEvent) => {
      const eventDate = Object.keys(newEvent)[0]
      events?.[eventDate]
        ? setEvents({
            ...events,
            [eventDate]: [...events[eventDate], ...newEvent[eventDate]],
          })
        : setEvents({
            ...events,
            ...newEvent,
          })

      if (events?.[format(selectedDate, 'MM/dd/yyyy')])
        return setReminderMode({ mode: 'list_reminder' })

      const parsedDate = parse(eventDate, 'MM/dd/yyyy', new Date())
      setSelectedDate(parsedDate)
      setSelectedMonth(parsedDate)
      return setReminderMode({ mode: 'list_reminder' })
    },
    [events, selectedDate],
  )
  const handleDeleteEvent = useCallback(
    (eventId: string) => {
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents }
        const dateKey = format(selectedDate, 'MM/dd/yyyy')
        const eventsOnDate = updatedEvents[dateKey]
        const filteredEvents = eventsOnDate.filter((event) => event.id !== eventId)
        updatedEvents[dateKey] = filteredEvents

        if (updatedEvents[dateKey]?.length === 0) delete updatedEvents[dateKey]
        return updatedEvents
      })

      setReminderMode({ mode: 'list_reminder' })
    },
    [selectedDate, events],
  )
  const handleEditEvent = useCallback(
    (event: Event) => {
      const dateKey = format(selectedDate, 'MM/dd/yyyy')
      if (dateKey !== event.date) {
        handleAddEvent({
          [event.date!]: [
            {
              title: event.title,
              description: event.description,
              time: event.time,
              color: event.color,
              id: event.id,
            },
          ],
        })
        handleDeleteEvent(event.id)
        return setReminderMode({ mode: 'list_reminder' })
      }
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents }
        const eventsOnDate = updatedEvents[dateKey]
        const eventIndex = eventsOnDate.findIndex((currentEvent) => currentEvent.id === event.id)
        if (eventIndex !== -1) {
          const editedEvent = { ...eventsOnDate[eventIndex], ...event }
          updatedEvents[dateKey][eventIndex] = editedEvent
        }

        return updatedEvents
      })

      return setReminderMode({ mode: 'list_reminder' })
    },
    [selectedDate, events],
  )
  const handleSelectDay = useCallback((day: Date) => {
    setSelectedDate(day)
  }, [])

  const contextValue = useMemo<IRemindersContext>(
    () => ({
      resetCurrentDate,
      handleEditEvent,
      handleDeleteEvent,
      handleAddEvent,
      selectedDate,
      handleIncreaseMonth,
      handleDecreaseMonth,
      selectedMonth,
      handleSelectDay,
      handleChangeReminderMode,
      reminderMode,
      events,
    }),
    [selectedDate, handleIncreaseMonth, handleDecreaseMonth, reminderMode, events],
  )

  return <RemindersContext.Provider value={contextValue}>{children}</RemindersContext.Provider>
}

export { RemindersContext, RemindersProvider }
