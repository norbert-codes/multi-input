/* eslint no-prototype-builtins : 0 */
import styled from 'styled-components';
import { createElement as h } from 'react';

/**
 * from: https://twitter.com/_philpl/status/888039838330621953
 *
 * ========== Usage ==========
 *  in your component file:
 * import styled from 'styled-components'
 * import { withDynamicTag } from './DynamicTag'
 *
 * const TitleBase = styled.h1`
 *   font-size: 1.5em;
 *   text-align: center;
 *   color: palevioletred;
 * `
 *
 * export default withDynamicTag(TitleBase)
 *
 * ==========
 *
 * in the file you use the element:
 * <Title tag="span">
 *   Title with span tag
 * </Title>
 */
const withDynamicTag = Component => {
    const bucket = Object.create(null);

    const DynamicTag = props => {
        const { tag } = props;

        if (typeof tag !== 'string' || !styled.hasOwnProperty(tag)) {
            return h(Component, props);
        }

        if (bucket[tag] === undefined) {
            bucket[tag] = Component.withComponent(tag);
        }

        return h(bucket[tag], props);
    };

    const name = Component.displayName || Component.constructor.name;

    if (name) {
        DynamicTag.displayName = `DynamicTag(${name})`;
    }

    return DynamicTag;
};

export default withDynamicTag;
