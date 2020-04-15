import { DefaultDynamicObject } from '../../../../shared/interface/common/object.interface';
import { DialogType } from '../../../../shared/interface/component/componen-default.interface';

/**
 * Link Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.14
 */
export type DialogPropsInterface = DefaultDynamicObject & {
    type?: DialogType;
    show: boolean;
    className?: string;
    animation?: string;
    onCloseDialog: () => void;
    isPortal?: boolean;
};

export interface DialogStateInterface {
    show: boolean;
}
