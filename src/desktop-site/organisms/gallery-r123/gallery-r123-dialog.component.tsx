import React, {
    FunctionComponent,
    useContext,
    useState,
    useEffect
} from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import GalleryR123Context from './context/gallery-r123.context';
import IconComponent from '../../../common/atomic/icon/icon.component';
import TextComponent from '../../../common/atomic/text/text.component';
import ListComponent from '../../../common/molecules/list/list.component';
import DialogComponent from '../../../common/atomic/dialog/dialog.component';
import {
    GaleryR123BadgesType,
    GalleryR123ContextInterface
} from './interface/component.interface';
import GalleryComponent from '../../../common/organisms/gallery/gallery.component';
import HollowLinkComponent from '../../../common/molecules/hollow-link/hollow-link.component';
import { CarouselItemInterface } from '../../../common/molecules/carousel/interface/component.interface';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.06.09
 */
const GalleryR123DialogComponent: FunctionComponent = () => {
    const {
        media,
        title,
        video,
        badges,
        address,
        blueprint,
        showDialog,
        onClickSave,
        labelToggle,
        setShowDialog,
        onChangeActive
    } = useContext<GalleryR123ContextInterface>(GalleryR123Context);
    const [selection, setSelection] = useState<GaleryR123BadgesType>('media');
    const [listCarousel, setListCarousel] = useState<CarouselItemInterface[]>(
        media
    );

    useEffect(() => {
        if (selection === 'media') {
            setListCarousel(media);
        }
        if (selection === 'video') {
            setListCarousel(video);
        }

        if (selection === 'blueprint') {
            setListCarousel(blueprint);
        }
    }, [selection]);

    useEffect(() => {
        setSelection('media');
    }, [showDialog]);

    /**
     * On Click Save Property
     * @return {void}
     */
    const onClickSaveProperty = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ): void => {
        e.preventDefault();

        onClickSave();
    };

    return (
        <DialogComponent
            show={showDialog}
            type="fullscreen"
            className="ui-molecules-gallery-r123__dialog"
            onCloseDialog={(): void => setShowDialog(false)}
        >
            <IconComponent
                color="white"
                size={32}
                className="ui-molecules-gallery-r123__dialog-close absolute"
                onClick={(): void => setShowDialog(false)}
            >
                rui-icon-cross
            </IconComponent>
            <div
                className={StringHelper.objToString({
                    'ui-molecules-gallery-r123__dialog-heading': true,
                    flex: true,
                    'flex-align-start': true,
                    'flex-justify-between': true
                })}
            >
                <div>
                    <TextComponent
                        tag="h2"
                        color="white"
                        fontWeight={400}
                        styling="heading-5"
                    >
                        {title}
                    </TextComponent>
                    <TextComponent
                        tag="span"
                        color="white"
                        fontWeight={400}
                        className="block"
                    >
                        {address}
                    </TextComponent>
                </div>
                <div
                    className={StringHelper.objToString({
                        flex: true,
                        'flex-column': true,
                        'flex-align-start': true,
                        'flex-justify-between': true
                    })}
                >
                    <HollowLinkComponent
                        onClick={onClickSaveProperty}
                        icon="rui-icon-save-hollow"
                    >
                        Simpan
                    </HollowLinkComponent>
                    <ListComponent>
                        {badges.map((item) => (
                            <ListComponent.Item
                                key={item.type}
                                onClick={(): void => setSelection(item.type)}
                            >
                                <IconComponent size={18} color="white">
                                    {item.icon}
                                </IconComponent>
                                <TextComponent
                                    tag="p"
                                    color="white"
                                    fontWeight={500}
                                    className={
                                        item.type === selection
                                            ? 'active'
                                            : undefined
                                    }
                                >
                                    {`${item.label} (${item.count})`}
                                </TextComponent>
                            </ListComponent.Item>
                        ))}
                    </ListComponent>
                </div>
            </div>
            <div className="ui-molecules-gallery-r123__dialog-content block">
                <GalleryComponent
                    item={listCarousel}
                    labelToggle={labelToggle}
                    onChangeActive={onChangeActive}
                    showNumbering
                />
            </div>
        </DialogComponent>
    );
};

export default GalleryR123DialogComponent;
