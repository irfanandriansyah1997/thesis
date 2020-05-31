/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { mount } from 'enzyme';

import MultiSelectionContext from '../context/multiple-selection.context';
import { FixtureMultipleSelectionContext } from './fixture-multiple-selection.spec';
import MultipleSelectionContentComponent from '../multiple-selection-content.component';
import {
    MultipleSelectionContextInterface,
    MultipleSelectionContentItemInterface
} from '../interface/component.interface';
import DropdownComponent from '../../dropdown/dropdown.component';

const MOCK_MULTIPLE_OPTION: MultipleSelectionContentItemInterface[] = [
    {
        type: 'MultipleSelectionHeadingComponent',
        content: {
            id: 'heading',
            children: 'heading text'
        }
    },
    {
        type: 'MultipleSelectionItemComponent',
        content: {
            id: 'f574128d9944326385f1aa7be08b8685',
            label: 'Cimahi, Jawa Barat',
            value: 'f574128d9944326385f1aa7be08b8685',
            others: {
                id: '1'
            },
            children: 'Cimahi, Jawa Barat'
        }
    },
    {
        type: 'MultipleSelectionItemComponent',
        content: {
            id: '167411a051e8f85e5949b8712d5b59fa',
            label: 'Cimahi Selatan, Cimahi',
            value: '167411a051e8f85e5949b8712d5b59fa',
            others: {
                id: '2'
            },
            children: 'Cimahi Selatan, Cimahi'
        }
    },
    {
        type: 'MultipleSelectionItemComponent',
        content: {
            id: 'b9addc94e54625e8eb6b1ed933b89233',
            label: 'Cimahi Tengah, Cimahi',
            value: 'b9addc94e54625e8eb6b1ed933b89233',
            others: {
                id: '2'
            },
            children: 'Cimahi Tengah, Cimahi'
        }
    },
    {
        type: 'MultipleSelectionItemComponent',
        content: {
            id: 'f33fc7510f0d5ebfecbe278642ee00e1',
            label: 'Cimahi Utara, Cimahi',
            value: 'f33fc7510f0d5ebfecbe278642ee00e1',
            others: {
                id: '3'
            },
            children: 'Cimahi Utara, Cimahi'
        }
    }
];

describe('Testing Multiple Selection Component', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    it('simulation render component', () => {
        const context: MultipleSelectionContextInterface = {
            ...FixtureMultipleSelectionContext,
            textValue: 'sample',
            optionListActive: undefined
        };

        const component = mount(
            <MultiSelectionContext.Provider value={context}>
                <MultipleSelectionContentComponent
                    list={MOCK_MULTIPLE_OPTION}
                />
            </MultiSelectionContext.Provider>
        );

        expect(component.find(DropdownComponent.Item).length).toBe(5);
    });
});
