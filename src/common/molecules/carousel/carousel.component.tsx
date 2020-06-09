import React, {
    FunctionComponent,
    useState,
    useEffect,
    ReactNode
} from 'react';
import PropTypes from 'prop-types';
import { ObjectFitProperty } from 'csstype';

import IconComponent from '../../atomic/icon/icon.component';
import LinkComponent from '../../atomic/link/link.component';
import ImageComponent from '../../atomic/image/image.component';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';
import {
    CarouselItemInterface,
    CarouselPropsInterface,
    CarouselIndicatorInterface
} from './interface/component.interface';
import {
    ARROW_ON_NEXT,
    ARROW_ON_PREVIOUS
} from '../../../shared/constant/component.constant';
import MediaPlayerComponent from '../../atomic/media-player/media-player.component';

/**
 * Default Carousel Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.04
 */
const CarouselComponent: FunctionComponent<CarouselPropsInterface> = ({
    item,
    value,
    itemLink,
    className,
    indicator,
    scrollEffect,
    onChangeActive
}) => {
    const [position, setPosition] = useState(value || 0);

    useEffect(() => {
        onChangeActive(position);
    }, [position]);

    useEffect(() => {
        if (ValidatorHelper.verifiedIsNotEmpty(value)) {
            setPosition(value || 0);
        }
    }, [value]);

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
     *
     * @param itemLink
     * @param src
     * @param alt
     * @param objectFit
     */
    const generateCarouselImageItem = (
        link: string,
        src: string,
        alt: string,
        objectFit: ObjectFitProperty
    ): ReactNode => {
        if (link) {
            return (
                <LinkComponent noUnderline href={link}>
                    <ImageComponent
                        width="100%"
                        height="100%"
                        src={src}
                        alt={alt}
                        objectFit={objectFit}
                        className="ui-molecules-carousel__item"
                    />
                </LinkComponent>
            );
        }
        return (
            <ImageComponent
                width="100%"
                height="100%"
                src={src}
                alt={alt}
                objectFit={objectFit}
                className="ui-molecules-carousel__item"
            />
        );
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
                {item.map(
                    ({
                        alt,
                        id,
                        src,
                        type,
                        objectFit
                    }: CarouselItemInterface) => (
                        <div
                            className="ui-molecules-carousel__item relative"
                            key={id}
                        >
                            {type === 'youtube' ? (
                                <MediaPlayerComponent
                                    youtubeId={src}
                                    width="100%"
                                    height="100%"
                                />
                            ) : (
                                generateCarouselImageItem(
                                    itemLink || '',
                                    src,
                                    alt,
                                    objectFit || 'cover'
                                )
                            )}
                        </div>
                    )
                )}
            </div>
            <div className="ui-molecules-carousel__action">
                <div className="ui-molecules-carousel__action--prev absolute">
                    <IconComponent
                        color="white"
                        size={
                            indicator && indicator.fontSizeIcon
                                ? indicator.fontSizeIcon
                                : 30
                        }
                        onClick={(): void => handleClick('prev')}
                    >
                        {(indicator as CarouselIndicatorInterface).previous}
                    </IconComponent>
                </div>
                <div className="ui-molecules-carousel__action--next absolute">
                    <IconComponent
                        color="white"
                        size={
                            indicator && indicator.fontSizeIcon
                                ? indicator.fontSizeIcon
                                : 30
                        }
                        onClick={(): void => handleClick('next')}
                    >
                        {(indicator as CarouselIndicatorInterface).next}
                    </IconComponent>
                </div>
            </div>
        </div>
    );
};

CarouselComponent.defaultProps = {
    itemLink: '',
    className: '',
    scrollEffect: false,
    value: 0,
    indicator: {
        next: ARROW_ON_NEXT,
        previous: ARROW_ON_PREVIOUS,
        fontSizeIcon: 30
    }
};

CarouselComponent.propTypes = {
    value: PropTypes.number,
    itemLink: PropTypes.string,
    className: PropTypes.string,
    scrollEffect: PropTypes.bool,
    onChangeActive: PropTypes.func.isRequired,
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    indicator: PropTypes.shape({
        previous: PropTypes.string.isRequired,
        next: PropTypes.string.isRequired,
        fontSizeIcon: PropTypes.number
    })
};

export default CarouselComponent;
