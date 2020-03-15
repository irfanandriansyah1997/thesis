import * as React from 'react';
import { SFC } from 'react';

import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';
import TextComponent from '../text.component';

/**
 * Text Component Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.15
 */
const TextDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <TextComponent
        align="center"
        fontFamily="primary"
        fontWeight={600}
        styling="heading-1"
        tag="h1"
    >
        {name}
    </TextComponent>
);

export default TextDocumentation;
