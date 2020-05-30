import LogHelperAbstract from '../abstract/log/log-helper.abstract';
import { DefaultDynamicObject } from '../interface/common/object.interface';

/**
 * ValidatorHelper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.13
 */
class ValidatorHelper extends LogHelperAbstract {
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
     * Validator checking parameter input is not undefined / null
     */
    static verifiedIsNotEmpty(param: unknown): boolean {
        return (
            [undefined, null, ''].filter((item: unknown) => param === item)
                .length === 0
        );
    }

    /**
     * Verified Is Not False
     * @param {boolean | undefined | null} param - parameter to check
     * Validator checking parameter input is true
     */
    static verifiedIsNotFalse(param: unknown): boolean {
        const stage1 =
            [undefined, null, false].filter((i: unknown) => param === i)
                .length === 0;

        if (stage1 && param !== false) {
            return true;
        }

        return false;
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

    /**
     * Verified param max greater than min
     * @param {number} max - parameter number 1
     * @param {number} min - parameter number 2
     * @param {boolean} isEqual - is equal to param 2 ?
     * @return {boolean}
     */
    static verifiedGreatherThan(
        max: number,
        min: number,
        isEqual = false
    ): boolean {
        try {
            if (
                ValidatorHelper.isNumber(max) &&
                ValidatorHelper.isNumber(min)
            ) {
                if (max >= min && isEqual) {
                    return true;
                }

                if (max > min) {
                    return true;
                }

                return false;
            }

            throw new Error(
                '[Error] parameter max and min must be integer or float'
            );
        } catch (e) {
            ValidatorHelper.logError(e);
            throw e;
        }
    }
}

export default ValidatorHelper;
