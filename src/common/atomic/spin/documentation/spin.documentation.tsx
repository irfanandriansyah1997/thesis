import * as React from 'react';
import { SFC } from 'react';

import SpinComponent from '../spin.component';
import { DocumentRouterItemComponentInterface } from '../../../../shared/interface/documentation/documentation-router.interface';

import '../style/style.scss';

/**
 * Spin Component Documentation
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.15
 */
const SpinDocumentation: SFC<DocumentRouterItemComponentInterface> = ({
    name
}: DocumentRouterItemComponentInterface) => (
    <div>
        {name}
        <SpinComponent color="primary" show>
            <div
                style={{ backgroundColor: '#f0f0f0', width: 300, height: 200 }}
            />
        </SpinComponent>
        <SpinComponent color="warning400" show />
    </div>
);

export default SpinDocumentation;
