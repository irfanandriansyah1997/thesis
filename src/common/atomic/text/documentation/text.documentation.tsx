import * as React from 'react';
import { SFC } from 'react';

import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';

/**
 * Text Component Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.15
 */
const TextDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => <div>{name}</div>;

export default TextDocumentation;
