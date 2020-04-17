import React from 'react';

import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';
import ExpandTextComponent from '../expand-text.component';
import TextComponent from '../../../atomic/text/text.component';

((): void => {
    new StorybookDocumentationBuilder('Expand Text Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Checkbox is used to create a new multiple choice input and we can multiple selection this option'
        )
        .registerDocumentation(
            <>
                <ExpandTextComponent
                    maxHeight={100}
                    color="warning"
                    textToggleButton={{
                        onCLose: 'Tampilkan lebih lengkap',
                        onExpand: 'Tampilkan lebih sedikit'
                    }}
                >
                    <TextComponent tag="p" color="text" styling="heading-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus amet aliquam doloremque adipisci quos sunt
                        nisi blanditiis maiores unde dolorum debitis qui natus
                        facere veritatis temporibus obcaecati, itaque fuga
                        dolores!
                    </TextComponent>
                    <TextComponent tag="p" color="text" styling="heading-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus amet aliquam doloremque adipisci quos sunt
                        nisi blanditiis maiores unde dolorum debitis qui natus
                        facere veritatis temporibus obcaecati, itaque fuga
                        dolores!
                    </TextComponent>
                </ExpandTextComponent>
                <DividerDocsComponent />
            </>
        )
        .execute();
})();
