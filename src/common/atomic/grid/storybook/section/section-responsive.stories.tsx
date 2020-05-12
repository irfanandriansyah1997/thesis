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
                `        <Grid.Column` +
                ` defaultSize={${item.defaultSize}}` +
                ` xs={${item.xs}}` +
                ` sm={${item.sm}}` +
                ` md={${item.md}}` +
                ` lg={${item.lg}}` +
                ` xl={${item.xl}}` +
                ` id="${item.id}">\n` +
                `            <div /> \n` +
                `        </Grid.Column> \n`
            );
        })
        .join('')}` +
    `    </Grid.Row> \n` +
    `</Grid.Container> \n`;

const grid: GridColumnPropsInterface[] = [
    {
        id: 'column-responsive-1',
        defaultSize: 6,
        xs: 12,
        sm: 12,
        md: 8,
        lg: 7,
        xl: 6
    },
    {
        id: 'column-responsive-2',
        defaultSize: 6,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 5,
        xl: 6
    }
];

/**
 * Section Responsive Grid
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
class SectionResponsiveGridComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Responsive Grid</HeadingDocsComponent>
                <TextDocsComponent>
                    You can choose size based on viewport browser
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs(
                        {
                            padding: {
                                horizontal: 10,
                                vertical: 20
                            }
                        },
                        grid,
                        {
                            className: 'container-example'
                        }
                    )}
                >
                    <HeadingDocsComponent>
                        Responsive Column Props
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change size based on view port with change props
                        xs, sm, md, lg, xl
                    </TextDocsComponent>
                    <Grid.Container className="container-example">
                        <Grid.Row padding={{ vertical: 20, horizontal: 20 }}>
                            {grid.map((item) => (
                                <Grid.Column key={item.id} {...item}>
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
                                            Responsive
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

export default SectionResponsiveGridComponent;
