/* eslint-disable react/no-array-index-key */

import React, { SFC, useState } from 'react';
import PropTypes from 'prop-types';

import ImageComponent from '../../atomic/image/image.component';
import IconComponent from '../../atomic/icon/icon.component';

import {
    CarouselPropsInterface,
    CarouselItemInterface
} from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';

/**
 * Default Carousel Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const CarouselComponent: SFC<CarouselPropsInterface> = ({
    className,
    item,
    scrollEffect
}) => {
    const [position, setPosition] = useState(0);

    const name: ComponentClassnameDefaultInterface = {
        [`ui-molecules-carousel`]: true,
        relative: true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    const contentClassname: ComponentClassnameDefaultInterface = {
        'ui-molecules-carousel__content': true,
        [`ui-molecules-carousel__content-scroll`]: ValidatorHelper.verifiedIsNotFalse(
            scrollEffect
        ),
        flex: true,
        absolute: true
    }

    const goNext = () => {
        setPosition(position + 1 === item.length ? 0 : position + 1);
    }

    const goPrev = () => {
        setPosition(position === 0 ? item.length - 1 : position - 1);
    }

    return (
        <div className={StringHelper.objToString(name)} style={{ height: 420, width: 750 }}>
            <div
                className={StringHelper.objToString(contentClassname)}
                style={{ transform: `translate3d(${position * -750}px, 0px, 0px)` }}
            >
                {item.map((image: CarouselItemInterface, index) => (
                    <ImageComponent
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="ui-molecules-carousel__item"
                        width='100%'
                        height='100%'
                        objectFit="cover"
                    />
                ))}
            </div>
            <div className="ui-molecules-carousel__action">
                <div className="ui-molecules-carousel__action--prev absolute" onClick={() => goPrev()}>
                    <IconComponent color="white" size={48}>rui-icon-arrow-left</IconComponent>
                </div>
                <div className="ui-molecules-carousel__action--next absolute" onClick={() => goNext()}>
                    <IconComponent color="white" size={48}>rui-icon-arrow-right</IconComponent>
                </div>
            </div>
        </div>
    );
};

CarouselComponent.defaultProps = {
    className: '',
    scrollEffect: false
};

CarouselComponent.propTypes = {
    className: PropTypes.string,
    item: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    scrollEffect: PropTypes.bool
};

export default CarouselComponent;
