import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import themes from './themes'
import { Typography } from '@mui/material'
import palette from './themes/palette'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline>
        <header>
          <Typography component='h2'>React Enterprise</Typography>
        </header>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
