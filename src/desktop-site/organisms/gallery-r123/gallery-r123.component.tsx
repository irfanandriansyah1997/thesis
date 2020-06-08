import PropTypes from 'prop-types';
import React, { FunctionComponent, useState, Validator } from 'react';

import GalleryR123Context from './context/gallery-r123.context';
import ImageComponent from '../../../common/atomic/image/image.component';
import { ExpandTextToggleButtonInterface } from '../../../common/molecules/expand-text/interfaces/component.interface';
import {
    GalleryR123PropsInterface,
    GalleryR123BadgesItemInterface,
    GalleryR123ContextInterface
} from './interface/component.interface';

/**
 * Gallery R123 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.06.08
 */
const GalleryR123Component: FunctionComponent<GalleryR123PropsInterface> = ({
    media,
    video,
    title,
    address,
    blueprint,
    onClickSave,
    labelToggle,
    isNewLaunch,
    onChangeActive
}) => {
    let mainPicture = '';
    const [showDialog, setShowDialog] = useState<boolean>(false);

    /**
     * Generate Badges
     * @return {GalleryR123BadgesItemInterface[]}
     */
    const generateBadges = (): GalleryR123BadgesItemInterface[] => {
        const param: GalleryR123BadgesItemInterface[] = [
            {
                count: media.length,
                icon: '',
                type: 'media'
            },
            {
                count: blueprint.length,
                icon: '',
                type: 'blueprint'
            },
            {
                count: video.length,
                icon: '',
                type: 'video'
            }
        ];

        return param.filter(({ count }) => count > 0);
    };

    if (media.length > 0) {
        mainPicture = media[0].src;
    }

    const contextValue: GalleryR123ContextInterface = {
        media,
        title,
        video,
        address,
        blueprint,
        showDialog,
        onClickSave,
        labelToggle,
        setShowDialog,
        onChangeActive,
        badges: generateBadges()
    };

    return (
        <GalleryR123Context.Provider value={contextValue}>
            <div className="ui-molecules-gallery-r123">
                <div className="ui-molecules-gallery-r123__content">
                    <ImageComponent
                        src={mainPicture}
                        alt=""
                        objectFit={isNewLaunch ? 'cover' : 'contain'}
                        onClick={(): void => setShowDialog(false)}
                    />
                </div>
            </div>
        </GalleryR123Context.Provider>
    );
};

GalleryR123Component.propTypes = {
    media: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    isNewLaunch: PropTypes.bool,
    video: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    blueprint: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            alt: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    onClickSave: PropTypes.func.isRequired,
    labelToggle: PropTypes.shape({
        onCLose: PropTypes.string,
        onExpand: PropTypes.string
    }) as Validator<ExpandTextToggleButtonInterface>,
    onChangeActive: PropTypes.func.isRequired
};

GalleryR123Component.defaultProps = {
    isNewLaunch: false,
    labelToggle: {
        onCLose: 'Sembunyikan Thumbnail',
        onExpand: 'Tampilkan Thumbnail'
    }
};

export default GalleryR123Component;
