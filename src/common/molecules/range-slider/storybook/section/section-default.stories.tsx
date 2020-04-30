/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import RangeSliderComponent from '../../range-slider.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import { RangeSliderPropsInterface } from '../../interface/component.interface';

/**
 * Generate Docs
 * @return {string}
 */
const docs = (props: RangeSliderPropsInterface): string =>
    `<RangeSliderComponent\n` +
    `    max={${props.max}}\n` +
    `    min={${props.min}}\n` +
    `    step={${props.step}}\n` +
    `    onChange={(start, end): void => {}}\n` +
    `    value={{\n` +
    `        start: ${props.value.start},\n` +
    `        end: ${props.value.end}\n` +
    `    }}\n` +
    `/>\n`;

/**
 * Section Default Range Slider
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.29
 */
class SectionDefaultRangeSliderComponent extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    constructor(props: {}) {
        super(props);

        this.state = {
            start: 30,
            end: 70
        };
    }

    render(): ReactNode {
        const { ...res } = this.state;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage range slider component
                </TextDocsComponent>
                <CodingViewerDocsComponent
                    sourceCode={docs({
                        max: 100,
                        min: 20,
                        step: 1,
                        onChange: () => {},
                        value: {
                            start: res.start as number,
                            end: res.end as number
                        }
                    })}
                >
                    <RangeSliderComponent
                        max={100}
                        min={20}
                        step={1}
                        onChange={(start, end): void => {
                            this.setState({ start, end });
                        }}
                        value={{
                            start: res.start as number,
                            end: res.end as number
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultRangeSliderComponent;
