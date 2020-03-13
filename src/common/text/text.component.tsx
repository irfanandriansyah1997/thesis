import * as React from 'react';
import { SFC } from 'react';

import { TextPropsInterface } from './interface/component.interface';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const TextComponent: SFC<TextPropsInterface> = ({
    align,
    fontFamily,
    fontWeight,
    styling,
    tag,
    children,
    ...res
}: TextPropsInterface) => <p {...res}>asa</p>;

export default TextComponent;
