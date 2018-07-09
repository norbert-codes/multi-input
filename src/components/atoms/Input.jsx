import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    font-size: ${tokens.fonts.sizes.body.default};
    padding: ${tokens.space.large} 0 0 0;
    transition: border 200ms ease-in-out;
    width: 100%;

    &:hover {
        border-bottom: ${tokens.colors.gray.dark} 2px solid;
        color: ${tokens.colors.gray.dark};
    }

    /* stylelint-disable selector-type-case, selector-type-no-unknown  */
    &:focus,
    &:active {
        border-bottom: ${tokens.colors.primary} 2px solid;
        color: ${tokens.colors.black};
        padding-bottom: ${tokens.space.tiny};

        + ${Label} {
            color: ${tokens.colors.primary};
            font-size: ${tokens.fonts.sizes.body.small}
            transform: translateY(0);
        }
    }

    &:valid {
        padding-bottom: ${tokens.space.tiny};

        + ${Label} {
            font-size: ${tokens.fonts.sizes.body.small}
            transform: translateY(0);
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
