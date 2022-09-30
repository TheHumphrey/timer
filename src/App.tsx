import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globa'

import { Button } from './components'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success' />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
