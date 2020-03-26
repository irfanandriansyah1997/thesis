import * as React from 'react';
import { SFC } from 'react';

import LabelComponent from '../label.component';
import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';

import '../style/style.scss';

/**
 * Text Component Documentation
 * @author Cathrine <cathrine@99.co>
 * @since 2020.03.23
 */
const LabelDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <div>
        {name}
        <LabelComponent rounded icon labelText="Label" iconText="close" />
    </div>
);

export default LabelDocumentation;
