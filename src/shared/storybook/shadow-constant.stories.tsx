import React, { CSSProperties } from 'react';

import ColorDefaultConstant from '../constant/color.constant';
import StorybookDocumentationBuilder from '../../.storybook/builder/storybook-documentation.builder';
import CardShowcaseDocsComponent from '../../.storybook/component/atomic/card-showcase/card-showcase.component';
import IconComponent from '../../common/atomic/icon/icon.component';

const shadow: Record<string, CSSProperties> = {
    'default-1': {
        boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.2)'
    },
    'default-2': {
        boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)'
    },
    'elevate-xs': {
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)'
    },
    'elevate-sm': {
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)'
    },
    'elevate-md': {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.15)'
    },
    'elevate-lg': {
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
    },
    'elevate-xl': {
        boxShadow: '0 10px 50px 0 rgba(0, 0, 0, 0.08)'
    },
    r123: {
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)'
    }
};

((): void => {
    new StorybookDocumentationBuilder('Shadow', 'style')
        .setSection('general')
        .setDescriptionComponent('Shadow constant in R123 styleguide')
        .registerDocumentation(
            <>
                <div className="ui-showcase">
                    {Object.keys(shadow).map((item) => (
                        <CardShowcaseDocsComponent
                            key={item}
                            title={item}
                            desc="Box Shadow"
                            syntax={item}
                        >
                            <div
                                className="flex flex-align-center flex-justify-center"
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: 20,
                                    backgroundColor:
                                        ColorDefaultConstant.secondary,
                                    ...shadow[item]
                                }}
                            >
                                <IconComponent color="white" size={30}>
                                    uif-osl-fitting-out
                                </IconComponent>
                            </div>
                        </CardShowcaseDocsComponent>
                    ))}
                </div>
            </>
        )
        .execute();
})();
