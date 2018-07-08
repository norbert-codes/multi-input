import styled from 'styled-components';
import { space } from 'styled-system';
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
    min-height: ${tokens.space.large};
    padding-top: ${tokens.space.small};
    transition: border 200ms ease-in-out;
    width: 90%;
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
            margin-bottom: 2em;
            transform: scale(0.9);
        }
    }
`;

export default Input;
