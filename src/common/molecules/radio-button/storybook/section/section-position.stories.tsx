/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import RadioButtonComponent from '../../radio-button.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import { ComponentCheckboxInterface } from '../../../../../shared/interface/component/component-input.interface';
import DividerDocsComponent from '../../../../../.storybook/component/atomic/divider/divider.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ComponentCheckboxInterface): string =>
    `<RadioButtonComponent \n` +
    `    name="${props.name}"\n` +
    `    styling="${props.styling}"\n` +
    `    onChange={(): void => {}}\n` +
    `    value={${props.value}}\n` +
    '>\n' +
    `    <RadioButtonComponent.Item\n` +
    `        id="${props.styling}-1"\n` +
    `        value={1}\n` +
    `        label="Label ${props.styling} 1"\n` +
    `    />\n` +
    `    <RadioButtonComponent.Item\n` +
    `        id="${props.styling}-2"\n` +
    `        value={2}\n` +
    `        label="Label ${props.styling} 2"\n` +
    `    />\n` +
    `</BadgeComponent>`;

/**
 * Section Position Radio Button
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionPositionRadioButtonComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectionHorizontal: 1,
            selectionVertical: 2
        };
    }

    render(): ReactNode {
        const { selectionHorizontal, selectionVertical } = this.state;

        return (
            <>
                <HeadingDocsComponent>Styling Props</HeadingDocsComponent>
                <TextDocsComponent>
                    We can choose 1 of 2 option in checkbox styling
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={[
                        docs({
                            name: 'sample',
                            styling: 'horizontal',
                            onChange: (): void => {},
                            value: []
                        }),
                        docs({
                            name: 'sample',
                            styling: 'vertical',
                            onChange: (): void => {},
                            value: []
                        })
                    ].join('\n')}
                >
                    <HeadingDocsComponent>
                        Horizontal Checkbox
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change position to horizontal with set props
                        styling horizontal
                    </TextDocsComponent>
                    <RadioButtonComponent
                        name="horizontal"
                        styling="horizontal"
                        onChange={(res: string | number): void => {
                            this.setState(
                                { selectionHorizontal: res },
                                (): void => console.debug(this.state)
                            );
                        }}
                        value={
                            (selectionHorizontal as unknown) as string | number
                        }
                    >
                        <RadioButtonComponent.Item
                            id="horizontal-1"
                            value={1}
                            label="Label horizontal 1"
                        />
                        <RadioButtonComponent.Item
                            id="horizontal-2"
                            value={2}
                            label="Label horizontal 2"
                        />
                    </RadioButtonComponent>
                    <DividerDocsComponent />
                    <HeadingDocsComponent>
                        Vertical Checkbox
                    </HeadingDocsComponent>
                    <TextDocsComponent>
                        We can change position to vertical with set props
                        styling vertical
                    </TextDocsComponent>
                    <RadioButtonComponent
                        name="vertical"
                        styling="vertical"
                        onChange={(res: string | number): void => {
                            this.setState(
                                { selectionVertical: res },
                                (): void => console.debug(this.state)
                            );
                        }}
                        value={
                            (selectionVertical as unknown) as string | number
                        }
                    >
                        <RadioButtonComponent.Item
                            id="vertical-1"
                            value={1}
                            label="Label vertical 1"
                        />
                        <RadioButtonComponent.Item
                            id="vertical-2"
                            value={2}
                            label="Label vertical 2"
                        />
                    </RadioButtonComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionPositionRadioButtonComponent;
