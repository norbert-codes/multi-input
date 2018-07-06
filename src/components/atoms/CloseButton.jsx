import React from 'react';
import styled from 'styled-components';
import tokens from '../../tokens';

const CloseButton = styled.button`
    background-color: transparent;
    border: 0;
    color: ${tokens.colors.gray.dark};
    cursor: pointer;
    font-size: ${tokens.fonts.sizes.body.default};
    overflow: hidden;
    padding: ${tokens.space.tiny};
    text-align: center;
    text-transform: uppercase;

    &:hover {
        color: ${tokens.colors.black};
    }
`;

export default CloseButton;
