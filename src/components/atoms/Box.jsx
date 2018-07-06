import React from 'react';
import PropTypes from 'prop-types';
import { space, color, height } from 'styled-system';
import styled, { css } from 'styled-components';

const Box = styled.div`
    ${color};
    ${space};
    ${height};

    ${props =>
        props.centerContent &&
        css`
            align-items: center;
            display: flex;
            justify-content: center;
            flex: 1;
        `};

    ${props =>
        props.contentRight &&
        css`
            align-items: center;
            display: flex;
            justify-content: flex-end;
        `};

    ${props =>
        props.contentLeft &&
        css`
            align-items: center;
            display: flex;
            justify-content: flex-start;
        `};
`;

Box.propTypes = {
    centerContent: PropTypes.bool,
    contentLeft: PropTypes.bool,
    contentRight: PropTypes.bool,
};

Box.defaultProps = {
    centerContent: false,
    contentLeft: false,
    contentRight: false,
};

export default Box;
