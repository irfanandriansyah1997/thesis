/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import ComboboxComponent from '../../combobox.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

// /**
//  * Generate Docs
//  * @param {string} type - type props image
//  * @return {string}
//  */
// const docs = (props: ComponentCheckboxInterface): string =>
//     `<CheckboxComponent \n` +
//     `    name="${props.name}"\n` +
//     `    styling="${props.styling}"\n` +
//     `    onChange={(): void => {}}\n` +
//     `    value={[]}\n` +
//     '>\n' +
//     `    <CheckboxComponent.Item\n` +
//     `        id="hello-1"\n` +
//     `        value={1}\n` +
//     `        label="Label 1"\n` +
//     `    />\n` +
//     `    <CheckboxComponent.Item\n` +
//     `        id="hello-2"\n` +
//     `        value={2}\n` +
//     `        label="Label 2"\n` +
//     `    />\n` +
//     `    <CheckboxComponent.Item\n` +
//     `        id="hello-3"\n` +
//     `        value={3}\n` +
//     `        label="Label 3"\n` +
//     `    />\n` +
//     `</BadgeComponent>`;

/**
 * Section Default Combobox
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultComboboxComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selection: 1
        };

        this.onChange = this.onChange.bind(this);
    }

    /**
     * On Change Value
     * @param {string | number} param - param
     */
    public onChange(param: string | number): void {
        this.setState({
            selection: param
        });
    }

    render(): ReactNode {
        const { onChange } = this;
        const { selection } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>Basic combobox component</TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="">
                    <ComboboxComponent
                        name="id"
                        value={selection as number}
                        onChange={onChange}
                    >
                        <ComboboxComponent.Item
                            id="1"
                            value="1"
                            label="All Residential"
                        />
                        <ComboboxComponent.Item
                            id="2"
                            value="2"
                            subOption
                            label="House"
                        />
                        <ComboboxComponent.Item
                            id="3"
                            value="3"
                            subOption
                            label="Apartment"
                        />
                        <ComboboxComponent.Item
                            id="4"
                            value="4"
                            label="Shophouse"
                        />
                        <ComboboxComponent.Item id="5" value="5" label="Land" />
                    </ComboboxComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultComboboxComponent;
