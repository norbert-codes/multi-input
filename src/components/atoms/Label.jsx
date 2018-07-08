import styled from 'styled-components';
import tokens from '../../tokens';

const Label = styled.label`
    bottom: ${tokens.space.tiny};
    color: ${tokens.colors.gray.light};
    left: 0;
    position: absolute;
    transition: bottom 1200ms ease-in-out;
`;

export default Label;
