import { MapHTMLAttributes } from 'react';

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
