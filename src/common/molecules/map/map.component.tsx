import React, { SFC } from 'react';

import { MapInterface } from './interface/component.interface';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Map Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.02
 */
const MapComponent: SFC<MapInterface> = ({
    name,
    title,
    mapSource,
    className,
    onClickMap,
    ...res
}: MapInterface) => {
    const classname: ComponentClassnameDefaultInterface = {
        'ui-molecules-map': true,
        relative: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    return (
        <div
            role="link"
            tabIndex={0}
            onClick={onClickMap}
            onKeyPress={undefined}
            style={{ width: '100%', ...res.style }}
            className={StringHelper.objToString(classname)}
        >
            <iframe title={title} src={mapSource} name={name} />
        </div>
    );
};

export default MapComponent;
