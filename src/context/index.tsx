import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/theme'
import { RemindersProvider } from './Reminders'

const AppProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RemindersProvider>{children}</RemindersProvider>
    </ThemeProvider>
  )
}

export default AppProvider
