import { useState, useContext } from "react"
import { CalendarContext } from "../common/CalendarContext"
import { styled } from '@mui/system'
import { format, getMonth, addMonths, subMonths } from "date-fns"
import Grid from "@mui/material/Grid"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import Typography, { TypographyProps } from "@mui/material/Typography"
import { lightBlue } from "@mui/material/colors"

const Section = styled('section')({
    minHeight: 264,
    minWidth: 240,
    background: 'white',
})

const Title = styled(Typography)({
    marginLeft: 8,
    textTransform: "capitalize",
})

const Navigation = styled(Grid)({
    marginRight: 4,
})

const DayHeader = styled(Typography)({
    textAlign: "center",
    fontSize: 12,
    color: lightBlue[800],
    lineHeight: "26px",
    padding: 2,
    borderColor: 'white',
    borderStyle: "solid",
    textTransform: "capitalize",
    background: 'white',
    height: 34.3,
    width: 34.3,
})

interface StyledDayProps extends TypographyProps {
    selected?: boolean
    today?: boolean
    isCurrentMonth?: boolean
}

const Day = styled(Typography, {
    shouldForwardProp: (propName) => propName !== 'selected' && propName !== 'today' && propName !== 'isCurrentMonth',
})<StyledDayProps>(({ selected, today, isCurrentMonth }) => ({
    textAlign: "center",
    fontSize: 12,
    cursor: "pointer",
    borderRadius: "50%",
    border: '1px solid white',
    lineHeight: "26px",
    padding: 4,
    height: 34.3,
    width: 34.3,

    color: selected || today ? 'white' :
        !isCurrentMonth ? '#888'
            : 'black',

    background:
        selected ? lightBlue[500]
            : today ? lightBlue[700]
                : 'white',

    '&:hover': {
        opacity: .8
    }
}))


function getDatesAroundProvidedDate(providedDate: Date): Date[] {
    const tenDaysBefore = [];
    for (let i = 1; i <= 10; i++) {
        const date = new Date(providedDate.getTime() - i * 24 * 60 * 60 * 1000);
        tenDaysBefore.push(date);
    }

    const thirtyOneDaysAfter = [];
    for (let i = 1; i <= 31; i++) {
        const date = new Date(providedDate.getTime() + i * 24 * 60 * 60 * 1000);
        thirtyOneDaysAfter.push(date);
    }

    return [...tenDaysBefore.reverse(), providedDate, ...thirtyOneDaysAfter];
}

function breakArrayIntoChunksOfSeven<T>(array: T[]) {
    const subarrays = [];
    for (let i = 0; i < array.length; i += 7) {
        subarrays.push(array.slice(i, i + 7));
    }
    return subarrays;
}

function CalendarSmall() {
    const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
    const { selectedDate } = stateCalendar

    const [internalDate, setInternalDate] = useState(selectedDate)
    const [selectedInternalDate, setSelectedInternalDate] = useState(selectedDate)

    const weeks = breakArrayIntoChunksOfSeven(getDatesAroundProvidedDate(internalDate))

    function MoveMonths(direction: '<' | '>') {
        setInternalDate(direction === "<" ? subMonths(internalDate, 1) : addMonths(internalDate, 1))
    }

    function selectDate(newDate: Date) {
        setStateCalendar({ ...stateCalendar, selectedDate: newDate })
        setSelectedInternalDate(newDate)
    }

    return (
        <Section>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center' spacing={0} wrap='nowrap'>
                <Grid item xs={8}>
                    <Title>
                        {format(internalDate, "MMMM yyyy")}
                    </Title>
                </Grid>
                <Navigation
                    item
                    xs={4}
                    container
                    direction='row'
                    justifyContent='flex-end'
                    alignItems='center'
                    spacing={0}
                    wrap='nowrap'
                >
                    <Tooltip
                        title='Previous Months'
                    >
                        <IconButton size='small' onClick={() => MoveMonths("<")}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Tooltip>{" "}
                    <Tooltip
                        title='Next Months'
                    >
                        <IconButton size='small' onClick={() => MoveMonths(">")}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Tooltip>
                </Navigation>
            </Grid>

            <Grid container spacing={0} direction='row' justifyContent='center' alignItems='center' wrap='nowrap'>
                {weeks[0].map((weekDay: Date, index: number) => {
                    return (
                        <Grid item xs key={`small-calendar-column-header-${index}`}>
                            <DayHeader>
                                {format(weekDay, "dd")}
                            </DayHeader>
                        </Grid>
                    )
                })}
            </Grid>

            {weeks.map((week: Date[], weekIndex: number) => (
                <Grid
                    container
                    spacing={0}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    wrap='nowrap'
                    key={`small-calendar-line-${weekIndex}`}
                >
                    {week.map((day: Date, dayIndex: number) => {
                        const isToday = format(day, "ddMMyyyy") === format(new Date(), "ddMMyyyy")

                        const isSelected =
                            selectedInternalDate !== null &&
                            !isToday &&
                            format(day, "ddMMyyyy") === format(selectedInternalDate, "ddMMyyyy")

                        const isCurrentMonth = getMonth(internalDate) === getMonth(day)

                        return (
                            <Grid item xs key={`small-calendar-line-${weekIndex}-column-${dayIndex}`}>
                                <Day
                                    selected={isSelected}
                                    today={isToday}
                                    isCurrentMonth={isCurrentMonth}
                                    onClick={() => selectDate(day)}
                                >
                                    {day.getDate()}
                                </Day>
                            </Grid>
                        )
                    })}
                </Grid>
            ))}
        </Section>
    )
}

export default CalendarSmall