import LogHelperAbstract from '../abstract/log/log-helper.abstract';

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
}

export default ComponentHelper;
