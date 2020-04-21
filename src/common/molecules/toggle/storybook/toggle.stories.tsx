import React, { SFC } from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import ToggleComponent from '../toggle.component';
import TextComponent from '../../../atomic/text/text.component';

import '../style/style.scss';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import ButtonComponent from '../../../atomic/button/button.component';

/**
 * Component Toggle
 */
const Toggle: SFC = () => (
    <ButtonComponent size="default">Toggle</ButtonComponent>
);

((): void => {
    new StorybookDocumentationBuilder('Togggle Component', 'molecules')
        .setSection('common')
        .setDescriptionComponent(
            'Expand text is used to create a toggle section and you can show and hide section based on height these children props'
        )
        .registerDocumentation(
            <>
                <ToggleComponent
                    show
                    gradient
                    selector={<Toggle />}
                    collapsedHeight={40}
                >
                    <TextComponent tag="span" color="heading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste ratione consequatur cumque nobis expedita
                        temporibus eligendi esse reiciendis ab minus asperiores
                        voluptate aliquam natus, eius accusantium saepe itaque?
                        Odit, laudantium?
                    </TextComponent>
                    <DividerDocsComponent />
                    <TextComponent tag="span" color="heading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste ratione consequatur cumque nobis expedita
                        temporibus eligendi esse reiciendis ab minus asperiores
                        voluptate aliquam natus, eius accusantium saepe itaque?
                        Odit, laudantium?
                    </TextComponent>
                </ToggleComponent>
            </>
        )
        .execute();
})();
