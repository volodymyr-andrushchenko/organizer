import  { useState, useEffect, useRef, forwardRef } from 'react'
import Typography from '@mui/material/Typography'
import NoSsr from '@mui/material/NoSsr'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { createFilter } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()
const timeRefExp = new RegExp('^([01]?[0-9]|2[0-3]):[0-5][0-9]$')

const inputComponent = forwardRef((props, ref) => (<div ref={ref} {...props} />))


const Control = forwardRef((props, ref) =>  (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.TextFieldProps}
                ref={ref}
        />
    ))

Control.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    selectProps: PropTypes.object.isRequired,
}


function SingleValue(props) {
    return (
        <Typography style={{ lineHeight: 'initial' }} {...props.innerProps}>
            {props.children}
        </Typography>
    )
}

SingleValue.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
}

const ValueContainer = ({children}) => (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    }}>{children}</div>
)

ValueContainer.propTypes = {
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired,
}

const components = {
    Control,
    SingleValue,
    ValueContainer,
    animatedComponents,
}

function TimeSelect(props) {
    const {
        isClearable = false,
        showDropDownIndicator = false,
        allowMulti = false,
        allowSearch = true,
        placeholder = 'Please select',
        required = true,
        options = null,
        originalValue = null,
        length = 5,
        matchFrom = 'start', // 'start' || 'any'
        onChange = () => {},
    } = props

    const [timeValue, setTimeValue] = useState(originalValue || 0)
    const [findElement, setFindElement] = useState(false)

    useEffect(() => {
        if (findElement) {
            const firstTimeElement = document.querySelector(
                '#' + refMenu.current.select.select.inputRef.id.replace('input', 'option-0'),
            )
            const selected =
                firstTimeElement &&
                [...firstTimeElement.parentElement.children].find(
                    el => el.innerHTML === timeValue.value,
                )

            selected && selected.scrollIntoView()
            setFindElement(false)
        }
    }, [findElement])

    useEffect(() => {
        setTimeValue(originalValue)
    }, [originalValue])

    const refMenu = useRef()


        const handleChange = (newValue, actionMeta) => {
            setTimeValue(newValue)
            onChange(newValue)
        }
        const handleInputChange = (inputValue, actionMeta) => {
            if (inputValue.length > length) {
                return inputValue.substr(0, 5)
            }

            if (
                (isNaN(inputValue) &&
                    Array.from(inputValue).find(char => isNaN(char) && char !== ':')) ||
                Array.from(inputValue).filter(char => char === ':').length > 1
            ) {
                const newInputValue = Array.from(inputValue)
                    .filter(value => !isNaN(value))
                    .join('')
                return newInputValue
            }
        }
        const formatCreateLabel = inputValue => {
            return inputValue
        }
        const handleNewOptionValidate = inputValue => {
            const isNew =
                timeRefExp.test(inputValue) && !options.find(cTime => cTime.value === inputValue)
                    ? true
                    : false
            return isNew
        }

        const selectStyles = {
            input: base => ({
                ...base,
                color: '#333',
                paddingTop: 0,
                paddingBottom: 0,
                margin: 0,
                '& input': {
                    font: 'inherit',
                },
            }),
            menuPortal: base => ({ ...base, zIndex: 9999, minWidth: 80 }),

            dropdownIndicator: base => ({
                ...base,
                display: showDropDownIndicator ? 'initial' : 'none',
            }),

            indicatorSeparator: base => ({
                ...base,
                display: showDropDownIndicator ? 'initial' : 'none',
            }),
        }

        return (
            <>
                <NoSsr>
                    <CreatableSelect
                        ref={refMenu}
                        styles={selectStyles}
                        components={components}
                        options={options}
                        defaultValue={originalValue}
                        value={timeValue}
                        isClearable={isClearable}
                        isMulti={allowMulti}
                        isSearchable={allowSearch}
                        menuPortalTarget={document.body}
                        menuPlacement={'auto'}
                        required={required}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onInputChange={handleInputChange}
                        formatCreateLabel={formatCreateLabel}
                        isValidNewOption={handleNewOptionValidate}
                        filterOption={createFilter({ matchFrom: matchFrom })}
                        onMenuOpen={() => {
                            setFindElement(true)
                        }}
                    />
                </NoSsr>
            </>
        )
   
}

export default TimeSelect
