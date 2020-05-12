import React, { ReactNode } from 'react';

import ListComponent from '../../list.component';
import { ListPropsInterface } from '../../interface/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import DividerDocsComponent from '../../../../../.storybook/component/atomic/divider/divider.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ListPropsInterface): string =>
    `<ListComponent \n` +
    `    space={${props.space}} \n` +
    `    divider="${props.divider}" \n` +
    `    styling="${props.styling}" \n` +
    `    dividerColor="${props.dividerColor}" \n` +
    '>\n' +
    `    <ListComponent.Item>List Number 1</ListComponent.Item> \n` +
    `    <ListComponent.Item>List Number 2</ListComponent.Item> \n` +
    `    <ListComponent.Item>List Number 3</ListComponent.Item> \n` +
    `</ListComponent>`;

/**
 * Section Position List
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
class SectionPositionListComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Styling Props</HeadingDocsComponent>
                <TextDocsComponent>
                    We can choose 1 of 2 option in list styling
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={[
                        docs({
                            space: 20,
                            divider: 'line',
                            styling: 'horizontal',
                            dividerColor: 'heading'
                        }),
                        docs({
                            space: 20,
                            divider: 'line',
                            styling: 'vertical',
                            dividerColor: 'heading'
                        })
                    ].join('\n\n')}
                >
                    <HeadingDocsComponent>Horizontal List</HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change position to horizontal with set props
                        styling horizontal
                    </TextDocsComponent>
                    <ListComponent
                        space={20}
                        divider="line"
                        styling="horizontal"
                        dividerColor="heading"
                    >
                        <ListComponent.Item>List Number 1</ListComponent.Item>
                        <ListComponent.Item>List Number 2</ListComponent.Item>
                        <ListComponent.Item>List Number 3</ListComponent.Item>
                    </ListComponent>
                    <DividerDocsComponent />
                    <HeadingDocsComponent>Vertical List</HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change position to vertical with set props
                        styling vertical
                    </TextDocsComponent>
                    <ListComponent
                        space={20}
                        divider="line"
                        styling="vertical"
                        dividerColor="heading"
                    >
                        <ListComponent.Item>List Number 1</ListComponent.Item>
                        <ListComponent.Item>List Number 2</ListComponent.Item>
                        <ListComponent.Item>List Number 3</ListComponent.Item>
                    </ListComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionPositionListComponent;
