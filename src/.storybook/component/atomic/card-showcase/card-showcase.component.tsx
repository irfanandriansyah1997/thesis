import React, { SFC } from 'react';

import TextDocsComponent from '../text/text.component';
import { CardShowcaseComponentPropsInterface } from './interface/component.interface';

import './style/style.scss';

/**
 * Card-Showcase Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const CardShowcaseDocsComponent: SFC<CardShowcaseComponentPropsInterface> = ({
    children,
    title
}: CardShowcaseComponentPropsInterface) => (
    <div className="ui-card-showcase">
        <div className="ui-card-showcase__children">{children}</div>
        <TextDocsComponent>{title}</TextDocsComponent>
    </div>
);

export default CardShowcaseDocsComponent;
