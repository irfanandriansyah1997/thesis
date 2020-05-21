import React, { SFC, useState } from 'react';
import PropTypes from 'prop-types';

import IconComponent from '../../atomic/icon/icon.component';
import ImageComponent from '../../atomic/image/image.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CarouselItemInterface,
    CarouselPropsInterface
} from './interface/component.interface';
import {
    ARROW_ON_NEXT,
    ARROW_ON_PREVIOUS
} from '../../../shared/constant/component.constant';

/**
 * Default Carousel Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const CarouselComponent: SFC<CarouselPropsInterface> = ({
    className,
    item,
    indicator,
    scrollEffect
}) => {
    const [position, setPosition] = useState(0);

    const name: ComponentClassnameDefaultInterface = {
        relative: true,
        'ui-molecules-carousel': true,
        [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
    };

    const contentClassname: ComponentClassnameDefaultInterface = {
        'ui-molecules-carousel__content': true,
        [`ui-molecules-carousel__content-scroll`]: ValidatorHelper.verifiedIsNotFalse(
            scrollEffect
        ),
        flex: true,
        relative: true
    };

    /**
     * Handler function for covering prev & next click
     */
    const handleClick = (type: string): void => {
        if (type === 'prev') {
            setPosition(position === 0 ? item.length - 1 : position - 1);
        } else if (type === 'next') {
            setPosition(position + 1 === item.length ? 0 : position + 1);
        }
    };

    return (
        <div className={StringHelper.objToString(name)}>
            <div
                className={StringHelper.objToString(contentClassname)}
                style={{
                    transform: `translateX(${position * -100}%)`
                }}
            >
                {item.map((image: CarouselItemInterface) => (
                    <div
                        className="ui-molecules-carousel__item relative"
                        key={image.id}
                    >
                        <ImageComponent
                            width="100%"
                            height="100%"
                            src={image.src}
                            alt={image.alt}
                            objectFit="cover"
                            className="ui-molecules-carousel__item"
                        />
                    </div>
                ))}
            </div>
            <div className="ui-molecules-carousel__action">
                <div className="ui-molecules-carousel__action--prev absolute">
                    <IconComponent
                        color="white"
                        size={30}
                        onClick={(): void => handleClick('prev')}
                    >
                        {indicator ? indicator.previous : ''}
                    </IconComponent>
                </div>
                <div className="ui-molecules-carousel__action--next absolute">
                    <IconComponent
                        color="white"
                        size={30}
                        onClick={(): void => handleClick('next')}
                    >
                        {indicator ? indicator.next : ''}
                    </IconComponent>
                </div>
            </div>
        </div>
    );
};

CarouselComponent.defaultProps = {
    className: '',
    scrollEffect: false,
    indicator: {
        next: ARROW_ON_NEXT,
        previous: ARROW_ON_PREVIOUS
    }
};

CarouselComponent.propTypes = {
    className: PropTypes.string,
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    scrollEffect: PropTypes.bool,
    indicator: PropTypes.shape({
        previous: PropTypes.string.isRequired,
        next: PropTypes.string.isRequired
    })
};

export default CarouselComponent;
