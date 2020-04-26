import React, { SFC } from 'react';

import StringHelper from '../../../../shared/helper/string.helper';
import { ComponentClassnameDefaultInterface } from '../../../../shared/interface/component/component-default.interface';

import './style/style.scss';

/**
 * Divider Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const DividerDocsComponent: SFC = () => {
    const name: ComponentClassnameDefaultInterface = {
        'ui-divider': true
    };

    return <hr className={StringHelper.objToString(name)} />;
};

export default DividerDocsComponent;
