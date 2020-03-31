import LogHelperAbstract from '../abstract/log/log-helper.abstract';

/**
 * Object Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
class ObjectHelper extends LogHelperAbstract {
    /**
     * Exclude Destructure Object
     * @param {Record<string, unknown> | undefined} obj - object for destructure
     * @return {Record<string, unknown>}
     */
    static excludeDestructureObject(
        obj: Record<string, unknown> | undefined,
        excludeField: string[]
    ): Record<string, unknown> {
        try {
            if (obj !== undefined) {
                return Object.keys(obj)
                    .filter(
                        (item: string) =>
                            excludeField.filter(
                                (excludeItem: string) => item === excludeItem
                            ).length === 0
                    )
                    .reduce(
                        (prev: Record<string, unknown>, current: string) => ({
                            ...prev,
                            [`${current}`]: obj[current]
                        }),
                        {}
                    );
            }

            throw new Error(
                '[Error] parameter obj must be Record<string, any> type'
            );
        } catch (e) {
            ObjectHelper.logError(e);
            throw e;
        }
    }
}

export default ObjectHelper;
