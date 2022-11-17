import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
