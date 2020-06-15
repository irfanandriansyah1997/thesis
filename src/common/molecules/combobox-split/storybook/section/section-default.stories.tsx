/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, FunctionComponent, ReactText } from 'react';

import ComboboxSplitComponent from '../../combobox-split.component';
import IconComponent from '../../../../atomic/icon/icon.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import { ComboboxSplitMultipleOption } from '../../interface/component.interface';

/**
 * Generate Docs
 * @param {string} type - type props image
 * @return {string}
 */
const docs = (props: ComboboxSplitMultipleOption): string =>
    `<ComboboxSplitComponent \n` +
    `    name="${props.name}"\n` +
    `    onChange={(): void => {}}\n` +
    `    onClick={(): void => {}}\n` +
    `    value={1}\n` +
    `    icon={<SomeIcon />}` +
    '>\n' +
    `    <ComboboxSplitComponent.\n` +
    `        id="3"\n` +
    `        value="{3}"\n` +
    `        label="+628521231..."\n` +
    `    />\n` +
    `    <ComboboxSplitComponent.Item\n` +
    `        id="4"\n` +
    `        value="{4}"\n` +
    `        label="+628521232..."\n` +
    `    />\n` +
    `    <ComboboxSplitComponent.Item\n` +
    `        id="5"\n` +
    `        value="{5}"\n` +
    `        label="+628521233..."\n` +
    `    />\n` +
    `    <ComboboxSplitComponent.Item\n` +
    `        id="6"\n` +
    `        value="{6}"\n` +
    `        label="+628521234..."\n` +
    `    />\n` +
    `    <ComboboxSplitComponent.Item\n` +
    `        id="7"\n` +
    `        value="{7}"\n` +
    `        label="+628521235..."\n` +
    `    />\n` +
    `</ComboboxSplitComponent>`;

/**
 * Call Icon
 * @return {FunctionComponent}
 */
const CallIcon: FunctionComponent = () => (
    <IconComponent color="black" size={20}>
        rui-icon-call-small
    </IconComponent>
);

/**
 * Section Default ComboboxSplit
 */
class SectionDefaultComboboxSplitComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedValue: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    /**
     * On Change Value
     * @param {string | number} param - param
     */
    public onChange(res: ReactText): void {
        this.setState({ selectedValue: res.toString() });
    }

    /**
     * On Click Value
     * @param React.MouseEvent<HTMLButtonElement, React.MouseEvent>
     */
    public onClick(event: React.MouseEvent<HTMLButtonElement>): void {
        // eslint-disable-next-line no-console
        console.log(event.target);
    }

    render(): ReactNode {
        const { onChange, onClick } = this;
        const { selectedValue } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic combobox split component
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        name: 'combobox-split',
                        onChange: (): void => console.debug('change'),
                        onClick: (): void => console.debug('click')
                    })}
                >
                    <ComboboxSplitComponent
                        name="id"
                        value={selectedValue as string}
                        onChange={onChange}
                        onClick={onClick}
                        icon={<CallIcon />}
                    >
                        <ComboboxSplitComponent.Item
                            id="+628521234..."
                            value="+628521234..."
                            label="+628521234..."
                        />
                        <ComboboxSplitComponent.Item
                            id="+628521235..."
                            value="+628521235..."
                            label="+628521235..."
                        />
                        <ComboboxSplitComponent.Item
                            id="+628521236..."
                            value="+628521236..."
                            label="+628521236..."
                        />
                        <ComboboxSplitComponent.Item
                            id="+628521237..."
                            value="+628521237..."
                            label="+628521237..."
                        />
                        <ComboboxSplitComponent.Item
                            id="+628521238..."
                            value="+628521238..."
                            label="+628521238..."
                        />
                    </ComboboxSplitComponent>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultComboboxSplitComponent;
