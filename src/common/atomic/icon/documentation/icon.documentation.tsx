import * as React from 'react';
import { SFC } from 'react';

import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';
import IconComponent from '../icon.component';

/**
 * Icon Component Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.15
 */
const IconDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <div>
        {name}
        <IconComponent color="primary200" size="default">
            close
        </IconComponent>
    </div>
);

export default IconDocumentation;
