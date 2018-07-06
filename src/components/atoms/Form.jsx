import React from 'react';
import { space } from 'styled-system';
import styled from 'styled-components';
import tokens from '../../tokens';

const Form = styled.form`
    background-color: ${tokens.colors.white};
    padding: ${tokens.space.normal};
    ${space};
`;

export default Form;
