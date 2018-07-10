import PropTypes from 'prop-types';
import React from 'react';
import Box from '../atoms/Box';
import CloseButton from './CloseButton';
import LabeledInput from './LabeledInput';

const RemovableInput = props => (
    <Box contentLeft>
        <LabeledInput
            isRequired={props.isRequired}
            label={props.label}
            onChange={props.onChange}
        />
        <CloseButton
            aria-label="remove input"
            mb="-1.5em"
            onClick={props.remove}
        />
    </Box>
);

RemovableInput.propTypes = {
    isRequired: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

RemovableInput.defaultProps = {
    isRequired: false,
};

export default RemovableInput;
