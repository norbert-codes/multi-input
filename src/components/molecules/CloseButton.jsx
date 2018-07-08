import React from 'react';
import tokens from '../../tokens';
import Button from '../atoms/Button';
import CloseIcon from '../atoms/CloseIcon';

const CloseButton = props => (
    <Button p={0} isDisabled type="button" {...props}>
        <CloseIcon color={tokens.colors.gray.dark} />
    </Button>
);

export default CloseButton;
