import styled from 'styled-components';
import tokens from '../../tokens';

const Label = styled.label`
    color: ${tokens.colors.gray.light};
    left: 0;
    pointer-events: none;
    position: absolute;
    transform: translateY(100%);
    transition: transform 200ms ease-in-out;
`;

export default Label;
