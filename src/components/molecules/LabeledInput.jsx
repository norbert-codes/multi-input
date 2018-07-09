import PropTypes from 'prop-types';
import React from 'react';
import generateId from '../../utilities/generateId';
import Box from '../atoms/Box';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const LabeledInput = props => {
    const id = generateId('input');
    return (
        <Box>
            <Input id={id} isRequired={props.isRequired} />
            <Label htmlFor={id}>{props.label}</Label>
        </Box>
    );
};

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
};

LabeledInput.defaultProps = {
    isRequired: false,
};

export default LabeledInput;
