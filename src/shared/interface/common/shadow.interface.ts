import ShadowDefaultConstant from '../../constant/shadow.constant';

/**
 * Box-shadow type
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.24
 */
export type ShadowType = keyof typeof ShadowDefaultConstant;

/**
 * Box-shadow props interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.24
 */
export interface ShadowInterface {
    color?: ShadowType;
}
