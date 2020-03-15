import ErrorHelperAbstract from '../abstract/error/error-helper.abstract';
import { DefaultDynamicObject } from '../interface/common/object.interface';

/**
 * ValidatorHelper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.13
 */
class ValidatorHelper extends ErrorHelperAbstract {
    /**
     * Check is number
     * @param {unknown} param - parameter to check
     * @return {boolean}
     */
    static isNumber(param: unknown): boolean {
        return typeof param === 'number' || typeof param === 'bigint';
    }

    /**
     * Check is number
     * @param {unknown} param - parameter to check
     * @return {boolean}
     */
    static isString(param: unknown): boolean {
        return typeof param === 'string';
    }

    /**
     * Verified Is Not Empty
     * @param {unknown} param - parameter to check
     * Validator checking parameter input is undefined / null
     */
    static verifiedIsNotEmpty(param: unknown): boolean {
        try {
            return (
                [undefined, null, ''].filter((item: unknown) => param === item)
                    .length === 0
            );
        } catch (e) {
            ValidatorHelper.logError(e);
            throw e;
        }
    }

    /**
     * Verified Key Is Available
     * @param {DefaultDynamicObject} obj
     * @param {string} key
     * @return {boolean}
     */
    static verifiedKeyIsExist(
        obj: DefaultDynamicObject,
        key: string | undefined
    ): boolean {
        try {
            if (key) {
                return Object.prototype.hasOwnProperty.call(obj, key);
            }

            return false;
        } catch (e) {
            ValidatorHelper.logError(e);
            throw e;
        }
    }
}

export default ValidatorHelper;
