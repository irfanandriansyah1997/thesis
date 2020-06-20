import { ClickEventValue, MapOptions, Props } from 'google-map-react';

import { ComponentDefaultInterface } from '../../../../shared/interface/component/component-default.interface';
import { DefaultLocationMapsInterface } from '../../../../shared/interface/common/location.interface';

/**
 * Map Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.02
 */
export type MapsPropsInterface = Omit<ComponentDefaultInterface, 'children'> & {
    id: string;
    width: string;
    height: string;
    mapKey: string;
    mapOptions?: Props;
    options?: MapOptions;
    location: DefaultLocationMapsInterface;
    onClick?: (param: ClickEventValue) => void;
};

export interface MapsPinPropsInterface extends DefaultLocationMapsInterface {
    alt: string;
    src: string;
}
