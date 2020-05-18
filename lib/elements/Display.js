import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconBackspace from '@material-ui/icons/BackspaceSharp';

import NButton from './ui';
import useLongPress from '../hooks/useLongPress';

const Wrapper = styled.div`
  display: flex;
  padding: ${props => props.theme.subHeader.paddingTop}
    ${props => props.theme.subHeader.paddingRight} ${props => props.theme.subHeader.paddingBottom}
    ${props => props.theme.subHeader.paddingLeft};
  align-items: center;
  border: none;
  background-color: ${props => props.theme.subHeader.backgroundColor};
  order: ${props => props.theme.subHeader.order};
`;

const Backspace = styled(NButton)`
  color: ${props => {
    console.log('props', props);
    return props.value != null
      ? props.theme.subHeader.primaryColor
      : props.theme.subHeader.emptyColor;
  }};
`;

const Input = styled.input`
  &:read-only {
    cursor: not-allowed;
  }
  border-radius: 0px;
  cursor: default;
  background: transparent;
  font-size: 1.3em;
  outline: none;
  border: none;
  width: 100%;
`;
const Display = styled.div`
  flex-grow: 1;
`;

const DisplayWrapper = ({ value, backspace, longPressBackspace }) => {
  const backspaceLongPress = useLongPress(longPressBackspace, 1000);

  return (
    <Wrapper>
      <Display>
        <Input role="display" value={value} readOnly autoFocus />
      </Display>
      <Backspace {...backspaceLongPress} onClick={backspace}>
        <IconBackspace />
      </Backspace>
    </Wrapper>
  );
};

DisplayWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  backspace: PropTypes.func,
  longPressBackspace: PropTypes.func,
};

DisplayWrapper.defaultProps = {
  backspace: () => {},
  longPressBackspace: () => {},
};

export default DisplayWrapper;
