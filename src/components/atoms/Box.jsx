import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borders, color, height, space } from 'styled-system';
import tokens from '../../tokens';
import withDynamicTag from '../../utilities/dynamicTag';

const Box = styled.div`
    flex: 1;
    flex-wrap: wrap;
    position: relative;
    ${borders};
    ${color};
    ${height};
    ${space};

    ${props =>
        props.centerContent &&
        css`
            align-items: center;
            display: flex;
            justify-content: center;
        `};

    ${props =>
        props.contentRight &&
        css`
            display: flex;
            justify-content: flex-end;
        `};

    ${props =>
        props.contentLeft &&
        css`
            display: flex;
            justify-content: flex-start;
        `};

    ${props =>
        props.group &&
        css`
            > * + * {
                margin-top: ${tokens.space.normal};
            }
        `};
`;

Box.propTypes = {
    centerContent: PropTypes.bool,
    contentLeft: PropTypes.bool,
    contentRight: PropTypes.bool,
    group: PropTypes.bool,
    ...borders.propTypes,
    ...color.propTypes,
    ...height.propTypes,
    ...space.propTypes,
};

Box.defaultProps = {
    centerContent: false,
    contentLeft: false,
    contentRight: false,
    group: false,
};

export default withDynamicTag(Box);
