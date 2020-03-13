import ErrorHelperAbstract from '../abstract/error/error-helper.abstract';
import { ComponentClassnameDefaultInterface } from '../interface/component/componen-default.interface';

/**
 * String Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
class StringHelper extends ErrorHelperAbstract {
    /**
     * Object To String
     * @param {ComponentClassnameDefaultInterface} obj - object classname
     * @return {string}
     */
    static objToString(obj: ComponentClassnameDefaultInterface): string {
        try {
            return Object.keys(obj)
                .filter((item: string) => obj[item])
                .map((item: string) => item)
                .join('');
        } catch (e) {
            StringHelper.logError(e);
            throw e;
        }
    }
}

export default StringHelper;
