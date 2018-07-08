import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import tokens from '../../tokens';
import Label from './Label';

const Input = styled.input.attrs({
    type: 'text',
    required: props => props.isRequired,
})`
    background-color: transparent;
    border-bottom: ${tokens.colors.gray.light} 2px solid;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    color: ${tokens.colors.black};
    flex: 1;
    font-size: ${tokens.fonts.sizes.body.default};
    padding: ${tokens.space.large} 0 ${tokens.space.tiny} 0;
    transition: border 200ms ease-in-out;
    width: 100%;
    ${space};
    ${width};

    &:hover {
        border-bottom: ${tokens.colors.gray.dark} 2px solid;
        color: ${tokens.colors.gray.dark};
    }

    /* stylelint-disable selector-type-case, selector-type-no-unknown  */
    &:focus,
    &:active {
        border-bottom: ${tokens.colors.primary} 2px solid;
        color: ${tokens.colors.black};

        + ${Label} {
            /* stylelint-disable-line */
            color: ${tokens.colors.primary};
            top: ${tokens.space.tiny};
            transform: scale(0.9);
        }
    }

    &:valid {
        + ${Label} {
            color: ${tokens.colors.primary};
            font-size: 90%;
            top: ${tokens.space.tiny};
        }
    }
    /* stylelint-enable */
`;

Input.propTypes = {
    isRequired: PropTypes.bool,
};

Input.defaultProps = {
    isRequired: false,
};

export default Input;
