import styled from 'styled-components';
import { space } from 'styled-system';
import tokens from '../../tokens';

const Form = styled.form`
    background-color: ${tokens.colors.white};
    padding: ${tokens.space.normal};
    ${space};
`;

export default Form;
