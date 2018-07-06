import React from 'react';
import Input from '../atoms/Input';
import CloseButton from '../atoms/CloseButton';
import CloseIcon from '../atoms/CloseIcon';

const RemoveableInput = props => (
    <fieldset>
        <Input onChange={props.onChange} />
        <CloseButton type="button" onClick={props.remove}>
            <CloseIcon />
        </CloseButton>
    </fieldset>
);

export default RemoveableInput;
