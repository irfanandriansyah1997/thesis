/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import CheckboxComponent from '../../checkbox.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import DividerDocsComponent from '../../../../../.storybook/component/atomic/divider/divider.component';
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
    `    type="${props.type}"\n` +
    `    onChange={(): void => {}}\n` +
    `    value={[]}\n` +
    '>\n' +
    `    <CheckboxComponent.Item\n` +
    `        id="${props.type}-1"\n` +
    `        value={1}\n` +
    `        label="Label ${props.type} 1"\n` +
    `    />\n` +
    `    <CheckboxComponent.Item\n` +
    `        id="${props.type}-2"\n` +
    `        value={2}\n` +
    `        label="Label ${props.type} 2"\n` +
    `    />\n` +
    `</BadgeComponent>`;

/**
 * Section Type Checkbox
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionTypeCheckboxComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectionCheckbox: [1],
            selectionRadio: [2]
        };
    }

    render(): ReactNode {
        const { selectionCheckbox, selectionRadio } = this.state;

        return (
            <>
                <HeadingDocsComponent>Type Props</HeadingDocsComponent>
                <TextDocsComponent>
                    We can choose 1 of 2 type in checkbox type
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={[
                        docs({
                            name: 'sample',
                            type: 'checkbox',
                            styling: 'horizontal',
                            onChange: (): void => {},
                            value: []
                        }),
                        docs({
                            type: 'radio',
                            name: 'sample',
                            styling: 'vertical',
                            onChange: (): void => {},
                            value: []
                        })
                    ].join('\n')}
                >
                    <HeadingDocsComponent>
                        Checkbox With Type Checklist
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change type to checklist with set props type
                        checkbox
                    </TextDocsComponent>
                    <CheckboxComponent
                        name="sample"
                        styling="horizontal"
                        type="checkbox"
                        onChange={(res: (string | number)[]): void => {
                            this.setState(
                                { selectionCheckbox: res },
                                (): void => console.debug(this.state)
                            );
                        }}
                        value={
                            (selectionCheckbox as unknown) as (
                                | string
                                | number
                            )[]
                        }
                    >
                        <CheckboxComponent.Item
                            id="checkbox-1"
                            value={1}
                            label="Label checkbox 1"
                        />
                        <CheckboxComponent.Item
                            id="checkbox-2"
                            value={2}
                            label="Label checkbox 2"
                        />
                    </CheckboxComponent>
                    <DividerDocsComponent />
                    <HeadingDocsComponent>
                        Checkbox With Type Radio
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change type to radio with set props type radio
                    </TextDocsComponent>
                    <CheckboxComponent
                        name="sample"
                        styling="horizontal"
                        type="radio"
                        onChange={(res: (string | number)[]): void => {
                            this.setState({ selectionRadio: res }, (): void =>
                                console.debug(this.state)
                            );
                        }}
                        value={
                            (selectionRadio as unknown) as (string | number)[]
                        }
                    >
                        <CheckboxComponent.Item
                            id="radio-1"
                            value={1}
                            label="Label radio 1"
                        />
                        <CheckboxComponent.Item
                            id="radio-2"
                            value={2}
                            label="Label radio 2"
                        />
                    </CheckboxComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionTypeCheckboxComponent;
