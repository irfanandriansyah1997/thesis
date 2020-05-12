import React from 'react';

import '../style/style.scss';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import GridContainerComponent from '../grid-container.component';
import GridRowComponent from '../grid-row.component';
import GridColumnComponent from '../grid-column.component';

((): void => {
    new StorybookDocumentationBuilder('Grid Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'A card can be used to display content related to a single subject.'
        )
        .registerDocumentation(
            <>
                <GridContainerComponent>
                    <GridRowComponent>
                        <GridColumnComponent
                            sm={{ size: 12 }}
                            xs={{ size: 12 }}
                            md={{ size: 8 }}
                            lg={{ size: 6 }}
                            xl={{ size: 7 }}
                            id="id-12"
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </GridColumnComponent>
                        <GridColumnComponent
                            id="id-123"
                            sm={{ size: 12 }}
                            xs={{ size: 12 }}
                            md={{ size: 4 }}
                            lg={{ size: 6 }}
                            xl={{ size: 5 }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </GridColumnComponent>
                    </GridRowComponent>
                </GridContainerComponent>
            </>
        )
        .execute();
})();
