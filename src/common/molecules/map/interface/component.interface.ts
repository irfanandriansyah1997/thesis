import { MapHTMLAttributes } from 'react';

/**
 * Map Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.02
 */
export type MapInterface = MapHTMLAttributes<HTMLMapElement> & {
    title: string;
    mapSource: string;
    onClickMap?: () => void;
};
