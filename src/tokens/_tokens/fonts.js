import colors from './colors';

const fonts = {
    weights: {
        default: 'normal',
        bold: 'bold',
    },
    sizes: {
        body: {
            default: '16px',
            small: '14px',
        },
    },
    colors: {
        default: colors.gray.dark,
        light: colors.white,
        primary: colors.primary,
        disabled: colors.gray.light,
    },
    sets: {
        body: {
            default:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        },
    },
};

export default fonts;
