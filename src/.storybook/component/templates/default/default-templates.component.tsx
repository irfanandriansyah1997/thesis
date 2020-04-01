import React, { SFC } from 'react';
import PropTypes from 'prop-types';

import TextDocsComponent from '../../atomic/text/text.component';
import HeadingDocsComponent from '../../atomic/heading/heading.component';
import { DefaultTemplatePropsInterface } from './interface/component.interface';

import './style/style.scss';

/**
 * Default Template Documentation Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
const DefaultTemplateDocsComponent: SFC<DefaultTemplatePropsInterface> = ({
    children,
    description,
    componentName
}: DefaultTemplatePropsInterface) => {
    return (
        <div className="ui ui-default">
            <div className="ui-default__heading">
                <div className="ui-default__heading__logo">
                    <img
                        src="https://i.ibb.co/60tV5Ts/doc.png"
                        alt="documentation component"
                    />
                </div>
                <div className="ui-default__heading__text">
                    <h1>{`Dokumentasi ${componentName}`}</h1>
                    <p>{`Berikut adalah penjelasan dokumentasi ${componentName}`}</p>
                </div>
            </div>
            <div className="ui-default__content">
                <div className="ui-default__content__heading">
                    <HeadingDocsComponent parent>
                        {`${componentName}`}
                    </HeadingDocsComponent>
                    <TextDocsComponent>{description}</TextDocsComponent>
                </div>
                {children}
            </div>
        </div>
    );
};

DefaultTemplateDocsComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    description: PropTypes.string.isRequired,
    componentName: PropTypes.string.isRequired
};

export default DefaultTemplateDocsComponent;
