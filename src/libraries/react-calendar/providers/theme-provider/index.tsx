import { ThemeProvider } from '@mui/system'
import type { ReactNode } from 'react'
import { createTheme } from '@mui/material/styles'
import { lightBlue } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    secondary: {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[800],
    },
  },
})

export type AppTheme = typeof theme

export default function CalendarThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
