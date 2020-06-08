import PropTypes from 'prop-types';
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';

import TextComponent from '../../atomic/text/text.component';
import ImageComponent from '../../atomic/image/image.component';
import StringHelper from '../../../shared/helper/string.helper';
import { GalleryPropsInterface } from './interface/component.interface';
import CarouselComponent from '../../molecules/carousel/carousel.component';
import {
    ARROW_LEFT_KEY_CHARCODE,
    ARROW_RIGHT_KEY_CHARCODE
} from '../../../shared/constant/keyboard.constant';

/**
 * Gallery Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
const GalleryComponent: FunctionComponent<GalleryPropsInterface> = ({
    showNumbering,
    onChangeActive,
    ...res
}) => {
    const componentElement = useRef<HTMLDivElement>(null);
    const containerElement = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<number>(0);

    /**
     * On Change Active Carousel
     * @param {number} carouselPosition - position active
     * @return {void}
     */
    const onCarouselChangeActive = (carouselPosition: number): void => {
        if (containerElement.current && carouselPosition !== position) {
            const diffRange = carouselPosition - position;
            containerElement.current.scrollBy({
                left: diffRange * 115
            });
        }

        setPosition(carouselPosition);
        onChangeActive(carouselPosition);
    };

    /**
     * Callback Event Listener
     * @param {KeyboardEvent} event - keyboard event
     * @return {void}
     */
    const callbackEventListener = (event: KeyboardEvent): void => {
        const isLast = position === res.item.length - 1;
        const isFirst = position === 0;

        if (event.keyCode === ARROW_LEFT_KEY_CHARCODE) {
            event.preventDefault();
            onCarouselChangeActive(
                isFirst ? res.item.length - 1 : position - 1
            );
        }

        if (event.keyCode === ARROW_RIGHT_KEY_CHARCODE) {
            event.preventDefault();
            onCarouselChangeActive(isLast ? 0 : position + 1);
        }
    };

    useEffect(() => {
        if (componentElement.current) {
            componentElement.current.focus();
            componentElement.current.addEventListener(
                'keydown',
                callbackEventListener
            );
        }

        return (): void => {
            if (componentElement.current) {
                componentElement.current.removeEventListener(
                    'keydown',
                    callbackEventListener
                );
            }
        };
    });

    return (
        <div
            tabIndex={-1}
            ref={componentElement}
            className="ui-organism-gallery flex flex-column"
        >
            <CarouselComponent
                {...res}
                value={position}
                onChangeActive={onCarouselChangeActive}
                indicator={{
                    next: 'rui-icon-arrow-right',
                    previous: 'rui-icon-arrow-left',
                    fontSizeIcon: 60
                }}
            />
            <div className="ui-organism-gallery__footer">
                {showNumbering && (
                    <TextComponent
                        tag="p"
                        color="white"
                        fontWeight={600}
                        styling="heading-6"
                        className="flex flex-align-center"
                    >
                        {`${position + 1}/${res.item.length}`}
                    </TextComponent>
                )}
                <div
                    className="ui-organism-gallery__thumbnail block"
                    ref={containerElement}
                    tabIndex={-1}
                >
                    <ul
                        className="flex flex-align-center"
                        style={{ width: res.item.length * 115 }}
                    >
                        {res.item.map(({ id, ...resItem }, index) => (
                            <li
                                key={`thumbnail-${id}-${resItem.src}`}
                                className={StringHelper.objToString({
                                    'ui-organism-gallery__thumbnail-item': true,
                                    'ui-organism-gallery__thumbnail-item--active':
                                        index === position,
                                    relative: true
                                })}
                            >
                                <ImageComponent
                                    {...resItem}
                                    width={107}
                                    height={71}
                                    onClick={(): void => setPosition(index)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

GalleryComponent.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onChangeActive: PropTypes.func.isRequired,
    showNumbering: PropTypes.bool
};

GalleryComponent.defaultProps = {
    showNumbering: false
};

export default GalleryComponent;
