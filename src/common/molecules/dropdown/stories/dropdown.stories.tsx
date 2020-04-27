import React from 'react';

import DropdownComponent from '../dropdown.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Dropdown Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Combobox is used to create a new multiple choice input and we can choose one from this option'
        )
        .registerDocumentation(
            <>
                <DropdownComponent
                    label="Hello"
                    name="hello"
                    trigger="click"
                    icon="rui-icon-arrow-up-small"
                >
                    <DropdownComponent.Item>
                        Hello World 1
                    </DropdownComponent.Item>
                    <DropdownComponent.Item>
                        Hello World 2
                    </DropdownComponent.Item>
                    <DropdownComponent.Divider />
                    <DropdownComponent.Item>
                        Hello World 2
                    </DropdownComponent.Item>
                </DropdownComponent>
            </>
        )
        .execute();
})();
