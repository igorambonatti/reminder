import { useContextSelector } from 'use-context-selector'

import { IRemindersContext, RemindersContext } from '@context/Reminders'

export function useReminders(): IRemindersContext {
  const handleIncreaseMonth = useContextSelector(RemindersContext, (cs) => cs.handleIncreaseMonth)
  const handleDecreaseMonth = useContextSelector(RemindersContext, (cs) => cs.handleDecreaseMonth)
  const handleSelectDay = useContextSelector(RemindersContext, (cs) => cs.handleSelectDay)
  const selectedDate = useContextSelector(RemindersContext, (cs) => cs.selectedDate)
  const selectedMonth = useContextSelector(RemindersContext, (cs) => cs.selectedMonth)
  const reminderMode = useContextSelector(RemindersContext, (cs) => cs.reminderMode)
  const handleChangeReminderMode = useContextSelector(
    RemindersContext,
    (cs) => cs.handleChangeReminderMode,
  )
  const events = useContextSelector(RemindersContext, (cs) => cs.events)
  const handleAddEvent = useContextSelector(RemindersContext, (cs) => cs.handleAddEvent)
  const handleDeleteEvent = useContextSelector(RemindersContext, (cs) => cs.handleDeleteEvent)
  const handleEditEvent = useContextSelector(RemindersContext, (cs) => cs.handleEditEvent)
  const resetCurrentDate = useContextSelector(RemindersContext, (cs) => cs.resetCurrentDate)

  return {
    resetCurrentDate,
    handleEditEvent,
    handleDeleteEvent,
    handleAddEvent,
    events,
    handleIncreaseMonth,
    selectedDate,
    handleDecreaseMonth,
    selectedMonth,
    handleSelectDay,
    handleChangeReminderMode,
    reminderMode,
  }
}
