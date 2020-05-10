import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';
import ListComponent from '../list.component';

((): void => {
    new StorybookDocumentationBuilder('List Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Combobox is used to create a new multiple choice input and we can choose one from this option'
        )
        .registerDocumentation(
            <>
                <div className="block" style={{ margin: '20px 0' }}>
                    <ListComponent divider="line" direction="column">
                        <ListComponent.Item>Helo Column</ListComponent.Item>
                        <ListComponent.Item>Helo Column 2</ListComponent.Item>
                    </ListComponent>
                </div>
                <div className="block" style={{ margin: '20px 0' }}>
                    <ListComponent divider="none" direction="row">
                        <ListComponent.Item>Helo Row</ListComponent.Item>
                        <ListComponent.Item>Helo Row 2</ListComponent.Item>
                    </ListComponent>
                </div>
            </>
        )
        .execute();
})();
