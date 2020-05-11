import React, { ReactNode } from 'react';

import ListComponent from '../../list.component';
import { ListPropsInterface } from '../../interface/component.interface';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

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
 * Section Default List
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
class SectionDefaultListComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    render(): ReactNode {
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic List Component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        space: 20,
                        divider: 'line',
                        styling: 'horizontal',
                        dividerColor: 'primary'
                    })}
                >
                    <ListComponent
                        space={20}
                        divider="line"
                        styling="horizontal"
                        dividerColor="primary"
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

export default SectionDefaultListComponent;
