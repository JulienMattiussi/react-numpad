import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'
import Input from './Input'

import 'font-awesome/scss/font-awesome.scss';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 5px auto;
    padding: 0 10px;
    background: ${props => props.isValid ? '#fff' : 'yellow'};
    border: none;
    color: #3a3a3a;
    
    .NumPad-display {
        flex-grow: 1;

        .NumPad-display-label {
            font-size: 0.8em;
            width: 100%;
        }
    
        .NumPad-display-value {
            width: 100%;
            alignSelf: right;
            height: 24px;
        }
    }

    .NumPad-display-icon {
        width: 40px;
        padding: 9px;
        background: none;
        border: none;
        outline: none;
    }
`

const Display = ({ value, displayRule, validation, label, cancel }) => (
    <Wrapper className='NumPad-display-wrapper' isValid={validation(value)}>
        <div className='NumPad-display'>
            <label className='NumPad-display-label'>{label}</label>
            <div className='NumPad-display-value'>{displayRule(value)}</div>
        </div>
        <button className='NumPad-display-icon' onClick={cancel}>
            <span className="fa fa-eraser"/>
        </button>
    </Wrapper>
)

Display.defaultProps = {
    label: ''
}

Display.propTypes = {
    value: PropTypes.string.isRequired,
    displayRule: PropTypes.func.isRequired,
    validation: PropTypes.func.isRequired,
    cancel: PropTypes.func,
    label: PropTypes.string
}

export default Display