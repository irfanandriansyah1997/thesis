import PropTypes from 'prop-types';
import React, { FunctionComponent, useState, Validator } from 'react';

import GalleryR123Context from './context/gallery-r123.context';
import IconComponent from '../../../common/atomic/icon/icon.component';
import TextComponent from '../../../common/atomic/text/text.component';
import GalleryR123DialogComponent from './gallery-r123-dialog.component';
import ListComponent from '../../../common/molecules/list/list.component';
import ImageComponent from '../../../common/atomic/image/image.component';
import {
    GalleryR123LabelInterface,
    GalleryR123PropsInterface,
    GalleryR123ContextInterface,
    GalleryR123BadgesItemInterface
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
                icon: 'rui-icon-camera-small',
                label: labelToggle.mediaBadges,
                type: 'media'
            },
            {
                count: blueprint.length,
                icon: 'rui-icon-floorplan-small',
                label: labelToggle.blueprintBadges,
                type: 'blueprint'
            },
            {
                count: video.length,
                icon: 'rui-icon-play-small',
                label: labelToggle.videoBadges,
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
        labelToggle,
        onClickSave,
        setShowDialog,
        onChangeActive,
        badges: generateBadges()
    };

    return (
        <GalleryR123Context.Provider value={contextValue}>
            <div className="ui-molecules-gallery-r123">
                <div className="ui-molecules-gallery-r123__content relative">
                    <ImageComponent
                        src={mainPicture}
                        alt=""
                        width="100%"
                        height="100%"
                        objectFit={isNewLaunch ? 'cover' : 'contain'}
                        onClick={(): void => setShowDialog(true)}
                    />
                    <ListComponent
                        className="ui-molecules-gallery-r123__badges absolute"
                        space={0}
                    >
                        {contextValue.badges.map((item) => {
                            return (
                                <ListComponent.Item key={item.type}>
                                    <IconComponent
                                        size={18}
                                        color="headingR123"
                                        className={
                                            item.type === 'video'
                                                ? 'youtube'
                                                : undefined
                                        }
                                    >
                                        {item.icon}
                                    </IconComponent>
                                    {item.type !== 'video' && (
                                        <TextComponent
                                            tag="p"
                                            color="headingR123"
                                        >
                                            {item.count}
                                        </TextComponent>
                                    )}
                                </ListComponent.Item>
                            );
                        })}
                    </ListComponent>
                </div>
            </div>
            <GalleryR123DialogComponent />
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
        onExpand: PropTypes.string,
        videoBadges: PropTypes.string,
        mediaBadges: PropTypes.string,
        blueprintBadges: PropTypes.string
    }) as Validator<GalleryR123LabelInterface>,
    onChangeActive: PropTypes.func.isRequired
};

GalleryR123Component.defaultProps = {
    isNewLaunch: false,
    labelToggle: {
        videoBadges: 'Video',
        mediaBadges: 'Media',
        blueprintBadges: 'Denah',
        onExpand: 'Tampilkan Thumbnail',
        onCLose: 'Sembunyikan Thumbnail'
    }
};

export default GalleryR123Component;
