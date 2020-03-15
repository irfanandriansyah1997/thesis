import * as React from 'react';
import { SFC } from 'react';

import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';

/**
 * Icon Component Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.15
 */
const IconDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <div>
        <p>asas</p>
        <p>{name}</p>
    </div>
);

export default IconDocumentation;
