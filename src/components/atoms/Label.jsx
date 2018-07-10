import styled from 'styled-components';
import tokens from '../../tokens';

const Label = styled.label`
    color: ${tokens.colors.gray.light};
    left: 0;
    pointer-events: none;
    position: absolute;
    transform: translateY(100%);
    transition: all 200ms ease-out;
    transition-property: transform, color;
`;

export default Label;
