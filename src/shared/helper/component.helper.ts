import LogHelperAbstract from '../abstract/log/log-helper.abstract';
import ValidatorHelper from './validator.helper';

/**
 * Component Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.31
 */
class ComponentHelper extends LogHelperAbstract {
    /**
     * Is Urbanindo Icon
     * @param {ComponentClassnameDefaultInterface} obj - object classname
     * @return {string}
     */
    static isUrbanindoIcon(className: string): boolean {
        return /^uif-/.test(className);
    }

    /**
     * Is Rumah123 Icon
     * @param {ComponentClassnameDefaultInterface} obj - object classname
     * @return {string}
     */
    static isRumah123Icon(className: string): boolean {
        return /^rui-/.test(className);
    }

    /**
     * Register Attribute Style CSS
     * @param {string | number | undefined} value - value attribute (width, height, min-width, min-height)
     * @return {string}
     */
    static registerAttributeStyle(value: string | number | undefined): string {
        if (ValidatorHelper.verifiedIsNotEmpty(value)) {
            if (ValidatorHelper.isNumber(value)) {
                return `${value}px`;
            }

            if (ValidatorHelper.isString(value)) {
                return `${value}`;
            }
        }

        return 'initial';
    }
}

export default ComponentHelper;
