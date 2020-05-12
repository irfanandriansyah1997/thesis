import React from 'react';

import Grid from '../grid.component';
import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';

import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Grid Component', 'atomic')
        .setSection('common')
        .setDescriptionComponent(
            'A card can be used to display content related to a single subject.'
        )
        .registerDocumentation(
            <>
                <Grid.Container>
                    <Grid.Row padding={{ vertical: 10, horizontal: 10 }}>
                        <Grid.Column defaultSize={5} id="id-12">
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column id="id-123" defaultSize={7}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row padding={{ vertical: 10, horizontal: 10 }}>
                        <Grid.Column defaultSize={8} id="id-12">
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column id="id-123" defaultSize={4}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    background: '#69acec'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <div>Hello World</div>
                </Grid.Container>
            </>
        )
        .execute();
})();
