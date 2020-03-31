import React from 'react';

import R123Icon from './rumah123-icon.stories';
import IconComponent from '../icon.component';
import TextDocsComponent from '../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../.storybook/component/atomic/heading/heading.component';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import CodingViewerDocsComponent from '../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import CardShowcaseDocsComponent from '../../../../.storybook/component/atomic/card-showcase/card-showcase.component';

import '../style/style.scss';

const IconDocumentation = require('./icon.documentation.md');

((): void => {
    new StorybookDocumentationBuilder('Icon Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'Icon komponen digunakan untuk memanggil icon pada material icon / urbanindo / rumah123 icon font'
        )
        .setMarkdownFile(IconDocumentation)
        .registerDocumentation(
            <>
                <>
                    <HeadingDocsComponent>
                        Penggunaan Komponen Material Icon
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Contoh penggunaan komponent icon pada material-icon
                    </TextDocsComponent>
                    <CodingViewerDocsComponent sourceCode="<IconComponent color='primary' size={32}>close</IconComponent>">
                        <IconComponent color="primary" size={32}>
                            close
                        </IconComponent>
                    </CodingViewerDocsComponent>
                </>
                <DividerDocsComponent />
                <>
                    <HeadingDocsComponent>
                        Penggunaan Komponen Material Icon
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Contoh penggunaan komponent icon pada urbanindo icon
                    </TextDocsComponent>
                    <CodingViewerDocsComponent sourceCode="<IconComponent color='secondary' size={32}>uif-osl-fitting-out</IconComponent>">
                        <IconComponent color="secondary" size={32}>
                            uif-osl-fitting-out
                        </IconComponent>
                    </CodingViewerDocsComponent>
                </>
                <DividerDocsComponent />
                <>
                    <HeadingDocsComponent>
                        Penggunaan Komponen Rumah123 Icon
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Contoh penggunaan komponent icon pada rumah123 icon
                    </TextDocsComponent>
                    <CodingViewerDocsComponent sourceCode="<IconComponent color='success' size={32}>rui-icon-multi-user-small</IconComponent>">
                        <IconComponent color="success" size={32}>
                            rui-icon-multi-user-small
                        </IconComponent>
                    </CodingViewerDocsComponent>
                </>
                <DividerDocsComponent />
                <>
                    <HeadingDocsComponent>
                        List Icon Rumah 123
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        Berikut adalah list icon yang digunakan didalam rumah
                        123
                    </TextDocsComponent>
                    <div className="ui-showcase">
                        {R123Icon.map((item) => (
                            <CardShowcaseDocsComponent
                                key={item}
                                title={item.replace('rui-icon-', '')}
                            >
                                <IconComponent color="primary" size={42}>
                                    {item}
                                </IconComponent>
                            </CardShowcaseDocsComponent>
                        ))}
                    </div>
                </>
            </>
        )
        .execute();
})();
