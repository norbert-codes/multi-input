import PropTypes from 'prop-types';
import React from 'react';
import CloseButton from '../atoms/CloseButton';
import CloseIcon from '../atoms/CloseIcon';
import Input from '../atoms/Input';

const RemoveableInput = props => (
    <fieldset>
        <Input onChange={props.onChange} />
        <CloseButton type="button" onClick={props.remove}>
            <CloseIcon />
        </CloseButton>
    </fieldset>
);

RemoveableInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default RemoveableInput;
