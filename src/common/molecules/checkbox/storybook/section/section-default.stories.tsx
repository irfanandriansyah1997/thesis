/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import CheckboxComponent from '../../checkbox.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import { ComponentCheckboxInterface } from '../../../../../shared/interface/component/component-input.interface';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ComponentCheckboxInterface): string =>
    `<CheckboxComponent \n` +
    `    name="${props.name}"\n` +
    `    styling="${props.styling}"\n` +
    `    onChange={(): void => {}}\n` +
    `    value={[]}\n` +
    '>\n' +
    `    <CheckboxComponent.Item\n` +
    `        id="hello-1"\n` +
    `        value={1}\n` +
    `        label="Label 1"\n` +
    `    />\n` +
    `    <CheckboxComponent.Item\n` +
    `        id="hello-2"\n` +
    `        value={2}\n` +
    `        label="Label 2"\n` +
    `    />\n` +
    `    <CheckboxComponent.Item\n` +
    `        id="hello-3"\n` +
    `        value={3}\n` +
    `        label="Label 3"\n` +
    `    />\n` +
    `</BadgeComponent>`;

/**
 * Section Default Checkbox
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultCheckboxComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selection: [1, 3]
        };
    }

    render(): ReactNode {
        const { selection } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic checkbox component</TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        name: 'sample',
                        styling: 'horizontal',
                        onChange: (): void => {},
                        value: []
                    })}
                >
                    <CheckboxComponent
                        name="sample"
                        styling="horizontal"
                        type="checkbox"
                        onChange={(res: (string | number)[]): void => {
                            this.setState({ selection: res }, (): void =>
                                console.debug(this.state)
                            );
                        }}
                        value={(selection as unknown) as (string | number)[]}
                    >
                        <CheckboxComponent.Item
                            id="hello-1"
                            value={1}
                            label="Label 1"
                        />
                        <CheckboxComponent.Item
                            id="hello-2"
                            value={2}
                            label="Label 2"
                        />
                        <CheckboxComponent.Item
                            id="hello-3"
                            value={3}
                            label="Label 3"
                        />
                    </CheckboxComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultCheckboxComponent;
