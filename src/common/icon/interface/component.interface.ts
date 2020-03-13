import { ComponentDefaultInterface } from '../../../shared/interface/component/componen-default.interface';

export type IconType = 'material' | '99';

/**
 * Icon Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.12
 */
export interface IconPropsInterface extends ComponentDefaultInterface {
    icon: string;
    type: IconType;
    color: string;
}
