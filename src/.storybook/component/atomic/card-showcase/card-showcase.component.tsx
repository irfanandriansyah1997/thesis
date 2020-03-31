import React, { SFC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import TextDocsComponent from '../text/text.component';
import { CardShowcaseComponentPropsInterface } from './interface/component.interface';

import './style/style.scss';

/**
 * Card-Showcase Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const CardShowcaseDocsComponent: SFC<CardShowcaseComponentPropsInterface> = ({
    desc,
    title,
    syntax,
    children
}: CardShowcaseComponentPropsInterface) => (
    <CopyToClipboard text={syntax}>
        <div className="ui-card-showcase">
            <div className="ui-card-showcase__children">{children}</div>
            <TextDocsComponent>
                {title}
                {desc ? <span>{desc}</span> : null}
            </TextDocsComponent>
        </div>
    </CopyToClipboard>
);

export default CardShowcaseDocsComponent;
