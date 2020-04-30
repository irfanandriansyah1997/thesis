import ValidatorHelper from './validator.helper';
import LogHelperAbstract from '../abstract/log/log-helper.abstract';
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
}

export default ComponentHelper;
