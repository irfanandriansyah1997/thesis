import * as React from 'react';
import { SFC } from 'react';

import LabelComponent from '../label.component';
import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';

/**
 * Text Component Documentation
 * @author Cathrine <cathrine@99.co>
 * @since 2020.03.23
 */
const LabelDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <LabelComponent color="text" rounded>
        {name}
    </LabelComponent>
);

export default LabelDocumentation;
