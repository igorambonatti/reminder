import GlobalStyle from '@styles/global'

import AppProvider from '@context/index'
import Home from '@pages/Home'

const App: React.FC = () => (
  <AppProvider>
    <GlobalStyle />
    <Home />
  </AppProvider>
)

export default App
