import PropTypes from 'prop-types';
import React from 'react';
import Box from '../atoms/Box';
import CloseButton from './CloseButton';
import LabeledInput from './LabeledInput';

const RemoveableInput = props => (
    <Box contentLeft>
        <LabeledInput
            isRequired={props.isRequired}
            label={props.label}
            onChange={props.onChange}
        />
        <CloseButton aria-label="remove input" ml="0.5em" mb="-1.5em" onClick={props.remove} />
    </Box>
);

RemoveableInput.propTypes = {
    isRequired: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    remove: PropTypes.func,
};

RemoveableInput.defaultProps = {
    isRequired: false,
};

export default RemoveableInput;
