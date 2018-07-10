import styled from 'styled-components';
import media from 'styled-media-query';
import tokens from '../../tokens';

const Form = styled.form`
    background-color: ${tokens.colors.white};
    padding: ${tokens.space.normal};

    ${media.greaterThan('medium')`
        display: grid;
        grid-template-columns: 1fr 2fr;

        footer {
            grid-column: 1/-1;
        }
  `};
`;

export default Form;
