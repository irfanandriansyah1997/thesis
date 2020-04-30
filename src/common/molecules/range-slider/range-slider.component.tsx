/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, {
    SFC,
    useRef,
    useState,
    useEffect,
    ValidationMap,
    ChangeEvent
} from 'react';

import TextComponent from '../../atomic/text/text.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import ComponentHelper from '../../../shared/helper/component.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    RangeSliderPropsInterface,
    RangeSliderValueInterface,
    RangeSliderLabelInterface,
    RangeSliderEventHandler
} from './interface/component.interface';

/**
 * Range Slider Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.29
 */
const RangeSliderComponent: SFC<RangeSliderPropsInterface> = ({
    max,
    min,
    step,
    label,
    value,
    onChange,
    ...res
}) => {
    const startElement = useRef<HTMLInputElement>(null);
    const endElement = useRef<HTMLInputElement>(null);
    const rangeSection = useRef<HTMLDivElement>(null);
    const startThumb = useRef<HTMLDivElement>(null);
    const endThumb = useRef<HTMLDivElement>(null);
    const [valueComponent, setValueComponent] = useState<
        RangeSliderValueInterface
    >(value);

    /**
     * Set Attribute Component
     * @param {RangeSliderEventHandler} param
     * @return {ReactNode}
     */
    const setAttributeComponent = ({
        range,
        endPosition,
        startPosition,
        ...resOption
    }: RangeSliderEventHandler): void => {
        if (rangeSection.current && startThumb.current && endThumb.current) {
            rangeSection.current.style.left = `${startPosition}%`;
            rangeSection.current.style.width = `${range}%`;
            startThumb.current.style.left = `${startPosition}%`;
            startThumb.current.style.transform = `translate(-${resOption.value.start}%, -50%)`;
            endThumb.current.style.left = `${endPosition}%`;
            endThumb.current.style.transform = `translate(-${resOption.value.end}%, -50%)`;
        }
    };

    /**
     * Validate Setter Value
     * @param param
     * @param source
     * @return {void}
     */
    const validation = ({ end, start }: RangeSliderValueInterface): void => {
        if (ValidatorHelper.verifiedGreatherThan(end, start)) {
            setValueComponent({ end, start });
            onChange(start, end);
        }
    };

    /**
     * On Change Value
     * @param {ChangeEvent<HTMLInputElement>} e - callback variable on change value
     * @param {'min' | 'max'} type - type input
     * @return {void}
     */
    const onChangeValue = (
        e: ChangeEvent<HTMLInputElement>,
        type: 'min' | 'max'
    ): void => {
        const { end, start } = valueComponent;
        const output: RangeSliderValueInterface = {
            ...valueComponent,
            start: type === 'min' ? parseInt(e.target.value, 10) : start,
            end: type === 'max' ? parseInt(e.target.value, 10) : end
        };
        const isValid = ComponentHelper.rangeSliderEventHandler(
            max,
            min,
            valueComponent
        );

        if (isValid !== false) {
            validation(output);
        }
    };

    useEffect(() => {
        const config = ComponentHelper.rangeSliderEventHandler(
            max,
            min,
            valueComponent
        );

        if (config !== false) {
            setAttributeComponent(config);
        }
    }, [valueComponent]);

    const className: ComponentClassnameDefaultInterface = {
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className),
        relative: true,
        'ui-molecules-range-slider': true
    };
    delete res.className;

    return (
        <div className={StringHelper.objToString(className)} {...res}>
            {label ? (
                <div
                    className={StringHelper.objToString({
                        flex: true,
                        'flex-row': true,
                        'flex-justify-between': true,
                        'ui-molecules-range-slider__label': true
                    })}
                >
                    <TextComponent tag="p" styling="caption">
                        {label.minLabel}
                    </TextComponent>
                    <TextComponent tag="p" styling="caption">
                        {label.maxLabel}
                    </TextComponent>
                </div>
            ) : null}
            <input
                max={max}
                min={min}
                step={step}
                type="range"
                tabIndex={0}
                className={StringHelper.objToString({
                    absolute: true
                })}
                ref={startElement}
                value={valueComponent.start}
                onChange={(e): void => onChangeValue(e, 'min')}
            />
            <input
                max={max}
                min={min}
                step={step}
                type="range"
                tabIndex={0}
                ref={endElement}
                className={StringHelper.objToString({
                    absolute: true
                })}
                value={valueComponent.end}
                onChange={(e): void => onChangeValue(e, 'max')}
            />
            <div className="relative ui-molecules-range-slider__content">
                <div className="ui-molecules-range-slider__doted absolute" />
                <div
                    ref={rangeSection}
                    className={StringHelper.objToString({
                        absolute: true,
                        'ui-molecules-range-slider__range': true
                    })}
                />
                <div
                    ref={startThumb}
                    style={{ left: 0 }}
                    className={StringHelper.objToString({
                        absolute: true,
                        'ui-molecules-range-slider__thumb': true,
                        'ui-molecules-range-slider__start-thumb': true
                    })}
                />
                <div
                    ref={endThumb}
                    style={{ right: 0 }}
                    className={StringHelper.objToString({
                        absolute: true,
                        'ui-molecules-range-slider__thumb': true,
                        'ui-molecules-range-slider__end-thumb': true
                    })}
                />
            </div>
        </div>
    );
};

RangeSliderComponent.propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    step: PropTypes.number,
    label: PropTypes.shape<ValidationMap<RangeSliderLabelInterface>>({
        maxLabel: PropTypes.string.isRequired,
        minLabel: PropTypes.string.isRequired
    }),
    value: PropTypes.shape<ValidationMap<RangeSliderValueInterface>>({
        end: PropTypes.number.isRequired,
        start: PropTypes.number.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
};

RangeSliderComponent.defaultProps = {
    step: 1,
    label: undefined
};

export default RangeSliderComponent;
