/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

import { GalleryR123ContextInterface } from '../interface/component.interface';

const GalleryR123Context = createContext<GalleryR123ContextInterface>({
    address: '',
    title: '',
    media: [],
    video: [],
    badges: [],
    blueprint: [],
    showDialog: false,
    labelToggle: {
        onCLose: '',
        onExpand: '',
        videoBadges: '',
        mediaBadges: '',
        blueprintBadges: ''
    },
    onClickSave: (): void => {},
    setShowDialog: (): void => {},
    onChangeActive: (): void => {}
});

export default GalleryR123Context;
