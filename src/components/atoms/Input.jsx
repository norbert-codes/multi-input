import React from 'react';
import { space } from 'styled-system';
import styled from 'styled-components';
import tokens from '../../tokens';

const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'test attribute',
})`
    background-color: transparent;
    border-bottom: ${tokens.colors.gray.light} 2px solid;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    color: ${tokens.colors.black};
    font-size: ${tokens.fonts.sizes.body.default};
    padding-top: ${tokens.space.small};
    transition: border 200ms ease-in-out;
    width: 90%;
    min-height: ${tokens.space.large};
    ${space};

    &::placeholder {
        color: ${tokens.colors.gray.light};
    }

    &:hover {
        border-bottom: ${tokens.colors.gray.dark} 2px solid;
        color: ${tokens.colors.gray.dark};
    }

    &:focus,
    &:active {
        border-bottom: ${tokens.colors.primary} 2px solid;
        color: ${tokens.colors.black};

        &::placeholder {
            color: ${tokens.colors.primary};
            transform: scale(0.9);
            margin-bottom: 2em;
        }
    }
`;

export default Input;