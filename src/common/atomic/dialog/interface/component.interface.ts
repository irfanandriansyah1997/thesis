import { DefaultDynamicObject } from '../../../../shared/interface/common/object.interface';

/**
 * Link Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.14
 */
export type PropsInterface = DefaultDynamicObject & {
    type?: DialogType;
    show: boolean;
    className?: string;
    animation?: string;
    onCloseDialog: () => void;
    isPortal?: boolean;
};

export interface StateInterface {
    show: boolean;
}

export enum DialogType {
    POPUP = 0,
    FULLSCREEN = 1
}
