import PropTypes from 'prop-types';
import React, {
    useRef,
    useState,
    useEffect,
    Validator,
    FunctionComponent
} from 'react';

import TextComponent from '../../atomic/text/text.component';
import ImageComponent from '../../atomic/image/image.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { GalleryPropsInterface } from './interface/component.interface';
import CarouselComponent from '../../molecules/carousel/carousel.component';
import { ExpandTextToggleButtonInterface } from '../../molecules/expand-text/interfaces/component.interface';
import {
    ARROW_LEFT_KEY_CHARCODE,
    ARROW_RIGHT_KEY_CHARCODE
} from '../../../shared/constant/keyboard.constant';
import IconComponent from '../../atomic/icon/icon.component';
import {
    ARROW_ON_EXPAND,
    ARROW_ON_HIDE
} from '../../../shared/constant/component.constant';

/**
 * Gallery Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
const GalleryComponent: FunctionComponent<GalleryPropsInterface> = ({
    labelToggle,
    showNumbering,
    onChangeActive,
    ...res
}) => {
    const [position, setPosition] = useState<number>(0);
    const componentElement = useRef<HTMLDivElement>(null);
    const containerElement = useRef<HTMLDivElement>(null);
    const [showToggle, setShowToggle] = useState<boolean>(true);

    /**
     * On Change Active Carousel
     * @param {number} carouselPosition - position active
     * @return {void}
     */
    const onCarouselChangeActive = (carouselPosition: number): void => {
        if (
            containerElement.current &&
            containerElement.current.scrollBy &&
            carouselPosition !== position
        ) {
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

    /**
     * Get Thumbnail
     * @param {}
     */
    const getThumbnail = (
        src: string,
        type: 'image' | 'youtube' | undefined
    ): string => {
        return type === 'youtube'
            ? `https://img.youtube.com/vi/${src}/0.jpg`
            : src;
    };

    useEffect(() => {
        setPosition(0);
    }, [res.item]);

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
            className={StringHelper.objToString({
                'ui-organism-gallery': true,
                'ui-organism-gallery--hide-thumbnail': !showToggle,
                flex: true,
                'flex-column': true
            })}
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
                <div className="ui-organism-gallery__label flex flex-align-center">
                    {showNumbering && (
                        <TextComponent
                            tag="p"
                            color="white"
                            fontWeight={500}
                            styling="heading-6"
                            className={StringHelper.objToString({
                                'ui-organism-gallery__numbering': true,
                                flex: true,
                                'flex-align-center': true
                            })}
                        >
                            {`${position + 1}/${res.item.length}`}
                        </TextComponent>
                    )}
                    {ValidatorHelper.verifiedIsNotEmpty(
                        res.item[position].alt
                    ) && (
                        <TextComponent
                            tag="p"
                            color="white"
                            fontWeight={500}
                            styling="heading-6"
                            className={StringHelper.objToString({
                                'ui-organism-gallery__caption': true,
                                flex: true,
                                'flex-align-center': true
                            })}
                        >
                            {res.item[position].alt}
                        </TextComponent>
                    )}
                    <TextComponent
                        tag="p"
                        color="white"
                        fontWeight={500}
                        styling="heading-6"
                        className={StringHelper.objToString({
                            'ui-organism-gallery__toggle-text': true,
                            flex: true,
                            'flex-justify-end': true,
                            'flex-align-center': true
                        })}
                        onClick={(): void => setShowToggle(!showToggle)}
                    >
                        <IconComponent color="white" size={16}>
                            {showToggle ? ARROW_ON_HIDE : ARROW_ON_EXPAND}
                        </IconComponent>
                        {showToggle
                            ? labelToggle.onCLose
                            : labelToggle.onExpand}
                    </TextComponent>
                </div>
                {showToggle && (
                    <div
                        className="ui-organism-gallery__thumbnail block"
                        ref={containerElement}
                        tabIndex={-1}
                    >
                        <ul
                            className="flex flex-align-center"
                            style={{ width: res.item.length * 115 }}
                        >
                            {res.item.map(({ id, src, alt, type }, index) => (
                                <li
                                    key={`thumbnail-${id}-${src}`}
                                    className={StringHelper.objToString({
                                        'ui-organism-gallery__thumbnail-item': true,
                                        'ui-organism-gallery__thumbnail-item--active':
                                            index === position,
                                        relative: true
                                    })}
                                >
                                    <ImageComponent
                                        width={107}
                                        height={71}
                                        src={getThumbnail(src, type)}
                                        alt={alt}
                                        onClick={(): void => setPosition(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

GalleryComponent.propTypes = {
    labelToggle: PropTypes.shape({
        onCLose: PropTypes.string,
        onExpand: PropTypes.string
    }) as Validator<ExpandTextToggleButtonInterface>,
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
    showNumbering: false,
    labelToggle: {
        onCLose: 'Sembunyikan Thumbnail',
        onExpand: 'Tampilkan Thumbnail'
    }
};

export default GalleryComponent;
