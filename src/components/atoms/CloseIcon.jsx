import PropTypes from 'prop-types';
import React from 'react';
import tokens from '../../tokens';

const CloseIcon = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        viewBox="0 0 14 17.5"
    >
        <path
            fill={props.color}
            d="M14 .462L13.538 0 7 6.538.462 0 0 .462 6.538 7 0 13.538.462 14 7 7.462 13.538 14l.462-.462L7.462 7z"
        />
    </svg>
);

CloseIcon.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

CloseIcon.defaultProps = {
    color: tokens.colors.gray.dark,
    width: tokens.space.normal,
};

export default CloseIcon;
