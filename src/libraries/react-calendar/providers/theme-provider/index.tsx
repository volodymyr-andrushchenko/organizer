import { ThemeProvider } from '@mui/system'
import type { ReactNode } from 'react'
import { createTheme } from '@mui/material/styles'

const theme = createTheme()

export default function CalendarThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
