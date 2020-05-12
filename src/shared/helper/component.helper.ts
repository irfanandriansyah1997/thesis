import StringHelper from './string.helper';
import ValidatorHelper from './validator.helper';
import LogHelperAbstract from '../abstract/log/log-helper.abstract';
import { GridColumnDefaultSizeType } from '../../common/atomic/grid/interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../interface/component/component-default.interface';
import {
    RangeSliderEventHandler,
    RangeSliderValueInterface
} from '../../common/molecules/range-slider/interface/component.interface';

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

    /**
     * Range Slider Event Handler
     * @param {number} max - max output
     * @param {number} min - min output
     * @param {RangeSliderValueInterface} input - input props range slider component
     * @return {}
     */
    static rangeSliderEventHandler(
        max: number,
        min: number,
        { start, end }: RangeSliderValueInterface
    ): RangeSliderEventHandler | false {
        if (
            ValidatorHelper.verifiedGreatherThan(end, start) &&
            ValidatorHelper.verifiedGreatherThan(max, end, true) &&
            ValidatorHelper.verifiedGreatherThan(start, min, true)
        ) {
            let minValue = Math.min(start, end - 1);
            minValue =
                (100 / (max - min)) * minValue - (100 / (max - min)) * min;

            let maxValue = Math.max(end, start + 1);
            maxValue =
                (100 / (max - min)) * maxValue - (100 / (max - min)) * min;

            return {
                startPosition: minValue,
                endPosition: maxValue,
                value: {
                    start,
                    end
                },
                range: maxValue - minValue
            };
        }
        return false;
    }

    /**
     * Generate Classname Grid
     * @param {GridColumnDefaultSizeType} defaultSize - default size column
     * @param {string | undefined} defaultSize - classname component
     * @param {GridColumnDefaultSizeType[]} viewport - viewport
     * @return {ComponentClassnameDefaultInterface}
     */
    static generateClassnameGrid(
        defaultSize: GridColumnDefaultSizeType,
        className: string | undefined,
        ...viewport: (GridColumnDefaultSizeType | undefined)[]
    ): string {
        const key = ['xs', 'sm', 'md', 'lg', 'xl'];
        const response: ComponentClassnameDefaultInterface = {
            [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className),
            'ui-col': defaultSize === 'default',
            [`ui-col-${defaultSize}`]: defaultSize !== 'default',
            relative: true
        };

        viewport.forEach((element, index) => {
            if (element) {
                response[`ui-col-${key[index]}`] = element === 'default';
                response[`ui-col-${key[index]}-${element}`] =
                    element !== 'default' &&
                    ValidatorHelper.verifiedIsNotEmpty(element);
            }
        });

        return StringHelper.objToString(response);
    }
}

export default ComponentHelper;
