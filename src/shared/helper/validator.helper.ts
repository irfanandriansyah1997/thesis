import ErrorHelperAbstract from '../abstract/error/error-helper.abstract';

/**
 * ValidatorHelper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.13
 */
class ValidatorHelper extends ErrorHelperAbstract {
    /**
     * Verified Is Not Empty
     * @param {unknown} param - parameter to check
     * Validator checking parameter input is undefined / null
     */
    static verifiedIsNotEmpty(param: unknown): boolean {
        try {
            return (
                [undefined, null, ''].filter((item: unknown) => param === item)
                    .length > 0
            );
        } catch (e) {
            ValidatorHelper.logError(e);
            throw e;
        }
    }
}

export default ValidatorHelper;
