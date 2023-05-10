import CalendarSmall from '../engine_components/CalendarSmall'
import { styled } from "@mui/system"
import { createTheme } from '@mui/system'

const theme = createTheme()

const CalendarSmallWrapper = styled('div')({
    marginTop: 75,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(1),
    minHeight: 265,
    minWidth: 240,
    background: 'white',
})

function CalendarDrawer() {
    return (
        <CalendarSmallWrapper>
            <CalendarSmall />
        </CalendarSmallWrapper>
    )
}

export default CalendarDrawer
