import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { colors, fonts } from '.';

// Global styles for the whole application
// using 'injectGlobal' from styled-components
// see: https://www.styled-components.com/docs/api#injectglobal

const GlobalStyles = () => injectGlobal`
    ${styledNormalize}

    body,
    html {
        background-color: ${colors.white};
        color: ${fonts.colors.default};
        font-family: ${fonts.sets.body.default};
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-kerning: normal;
        font-size: ${fonts.body.default};
        font-style: normal;
        font-variant-ligatures: common-ligatures contextual;
        font-weight: ${fonts.weights.default};
        min-height: 100vh;
        min-width: 100vw;
        text-rendering: optimizeLegibility;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        -webkit-padding-start: 0;
    }
`;

export default GlobalStyles;
