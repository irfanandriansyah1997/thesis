/* eslint-disable @typescript-eslint/no-explicit-any */
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

    /**
     * Remove Duplicate Array
     * @param {Record<string, unknown>[]} list - list array
     * @param {Record<string, unknown>} objectItem - object array
     * @param {string} key - object key
     * @return {Record<string, unknown>}
     */
    static removeDulicateArray(
        list: Record<string, unknown>[],
        objectItem: Record<string, unknown>,
        key: string
    ): Record<string, unknown>[] {
        const isExist =
            list.filter((item) => {
                return item[key] === objectItem[key];
            }).length > 0;

        if (isExist) {
            return list;
        }

        return [...list, objectItem];
    }

    /**
     * Remive Last Item Array
     * @param {any[]} arrayList - array list
     * @return {any[]}
     */
    static removeLastItemArray(arrayList: any[]): any[] {
        if (arrayList.length > 1) {
            return arrayList.splice(-1, 1);
        }

        return [];
    }
}

export default ObjectHelper;
