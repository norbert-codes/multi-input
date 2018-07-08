import PropTypes from 'prop-types';
import React from 'react';
import Box from '../atoms/Box';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const LabeledInput = props => (
    <Box>
        <Input isRequired={props.isRequired} />
        <Label>{props.label}</Label>
    </Box>
);

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
};

LabeledInput.defaultProps = {
    isRequired: false,
};

export default LabeledInput;
