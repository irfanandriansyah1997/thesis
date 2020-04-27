import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DropdownComponent from '../dropdown.component';

((): void => {
    new StorybookDocumentationBuilder('Dropdown Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Combobox is used to create a new multiple choice input and we can choose one from this option'
        )
        .registerDocumentation(
            <>
                <DropdownComponent label="Hello" name="hello" trigger="click">
                    <DropdownComponent.Item>
                        Hello World 1
                    </DropdownComponent.Item>
                    <DropdownComponent.Item>
                        Hello World 2
                    </DropdownComponent.Item>
                    <DropdownComponent.Divider />
                </DropdownComponent>
            </>
        )
        .execute();
})();
