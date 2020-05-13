/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import SearchFilter from '../../search-filter.component';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';

import { FilterNavbarComponent } from '../../interface/component.interface';

const subChannel = [
    {
        id: '1',
        value: '1',
        label: 'Baru/seken'
    },
    {
        id: '2',
        value: '2',
        label: 'Properti baru'
    },
    {
        id: '3',
        value: '3',
        label: 'Property seken'
    }
];

/**
 * Default Search Filter Section
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.05.13
 */
class DeafultSearchFilterSectionComponent extends React.PureComponent<
    FilterNavbarComponent,
    Record<string, unknown>
> {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selection: 1
    //     };
    // }

    render(): ReactNode {
        const { filterItem } = this.props;
        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Default search filter component
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode="sourceCode">
                    <SearchFilter
                        searchText="Rumah dijual di Jakarta"
                        filterItem={filterItem.map((item) => {
                            item.onChange;
                        })}
                        sortingItem={{
                            value: 1,
                            sortingText: '',
                            option: subChannel
                        }}
                    />
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default DeafultSearchFilterSectionComponent;
