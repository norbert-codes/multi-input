import { em, rem } from 'polished';

// unitless(but means pixel values) base sizes to use in calculations
const appFontSize = 16;
const baseSpacing = 16;

const tokens = {
    colors: {
        black: 'hsla(0, 0%, 0%, 1)',
        white: 'hsla(0, 0%, 100%, 1)',
        gray: {
            light: 'hsla(0, 0%, 76%, 1)',
            dark: 'hsla(0, 0%, 40%, 1)',
        },
        primary: 'hsla(216, 71%, 66%, 1)',
        secondary: 'hsla(211, 100%, 95%, 1)',
    },
    fonts: {
        weights: {
            default: 'normal',
            bold: 'bold',
        },
        sizes: {
            body: {
                default: rem('16px', appFontSize),
                small: rem('14px', appFontSize),
            },
        },
        sets: {
            body: {
                // Default font set (with system fonts)
                default:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            },
        },
    },
    // Breakpoints
    breakpoints: ['40em', '52em', '64em'],
    // @media screen and (min-width: 40em)
    // @media screen and (min-width: 52em)
    // @media screen and (min-width: 64em)

    // Spacing Scale (used for margin and padding)
    space: {
        tiny: em(0.25 * baseSpacing, appFontSize),
        small: em(0.5 * baseSpacing, appFontSize),
        normal: em(1 * baseSpacing, appFontSize),
        large: em(2 * baseSpacing, appFontSize),
        huge: em(4 * baseSpacing, appFontSize),
    },
};

export default tokens;
