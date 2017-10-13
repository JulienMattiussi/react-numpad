import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'

const KeyPadButton = (props) => {
    const { value, click, style } = props;

    return (
        <Button className='NumPad-keypad-button' style={style} onClick={() => click(value)}>{value}</Button>
    )
}

KeyPadButton.defaultProps = {
    placeholder: '',
};
  
KeyPadButton.propTypes = {
    click: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object
}
export default KeyPadButton