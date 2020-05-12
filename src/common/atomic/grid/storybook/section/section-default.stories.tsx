import React, { ReactNode } from 'react';

import Grid from '../../grid.component';
import TextComponent from '../../../text/text.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import {
    GridRowPropsInterface,
    GridRowPaddingInterface,
    GridColumnPropsInterface,
    GridColumnDefaultSizeType,
    GridContainerPropsInterface
} from '../../interface/component.interface';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (
    row: GridRowPropsInterface,
    column: GridColumnPropsInterface[],
    container: GridContainerPropsInterface
): string =>
    `${`<Grid.Container className="${container.className}"> \n` +
        `    <Grid.Row padding={{ vertical: ${
            (row.padding as GridRowPaddingInterface).vertical
        }, horizontal: ${
            (row.padding as GridRowPaddingInterface).vertical
        } }}> \n`}${column
        .map((item): string => {
            return (
                `        <Grid.Column\n` +
                `            defaultSize={${item.defaultSize}}\n` +
                `            id="${item.id}"\n` +
                `        > \n` +
                `            <div /> \n` +
                `        </Grid.Column> \n`
            );
        })
        .join('')}` +
    `    </Grid.Row> \n` +
    `</Grid.Container> \n`;

const grid = [2, 10, 3, 9, 4, 8, 5, 7, 6, 6];

/**
 * Section Default Grid
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
class SectionDefaultGridComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic Grid Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs(
                        {
                            padding: {
                                horizontal: 10,
                                vertical: 20
                            }
                        },
                        grid.map(
                            (item): GridColumnPropsInterface => ({
                                id: `column-${item}`,
                                defaultSize: item as GridColumnDefaultSizeType
                            })
                        ),
                        {
                            className: 'container-example'
                        }
                    )}
                >
                    <Grid.Container className="container-example">
                        <Grid.Row padding={{ vertical: 20, horizontal: 20 }}>
                            {grid.map((item) => (
                                <Grid.Column
                                    key={item}
                                    defaultSize={
                                        item as GridColumnDefaultSizeType
                                    }
                                    id="column-2"
                                >
                                    <div
                                        className="flex flex-column flex-justify-center"
                                        style={{
                                            padding: 10,
                                            width: '100%',
                                            borderRadius: 5,
                                            background: '#fff',
                                            border: '1px dashed #69acec'
                                        }}
                                    >
                                        <TextComponent
                                            tag="h5"
                                            color="primary"
                                            styling="heading-5"
                                            fontWeight={600}
                                        >
                                            {`Col ${item}`}
                                        </TextComponent>
                                        <TextComponent
                                            tag="p"
                                            color="text"
                                            fontWeight={400}
                                            styling="default"
                                            style={{ marginTop: 8 }}
                                        >
                                            Column Size
                                        </TextComponent>
                                    </div>
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    </Grid.Container>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultGridComponent;
