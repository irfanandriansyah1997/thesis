import React from 'react';

import ColorDefaultConstant from '../constant/color.constant';
import StorybookDocumentationBuilder from '../../.storybook/builder/storybook-documentation.builder';
import CardShowcaseDocsComponent from '../../.storybook/component/atomic/card-showcase/card-showcase.component';

((): void => {
    new StorybookDocumentationBuilder('Color Pallete', 'style')
        .setSection('general')
        .setDescriptionComponent(
            'Color pallete yang digunakan di R123 Styleguide'
        )
        .registerDocumentation(
            <>
                <div className="ui-showcase">
                    {Object.keys(ColorDefaultConstant).map((item) => (
                        <CardShowcaseDocsComponent
                            key={item}
                            title={item}
                            desc="pallete warna"
                            syntax={item}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: ColorDefaultConstant[item]
                                }}
                            />
                        </CardShowcaseDocsComponent>
                    ))}
                </div>
            </>
        )
        .execute();
})();
