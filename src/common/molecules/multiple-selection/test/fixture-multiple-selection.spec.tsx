import { MultipleSelectionContextInterface } from '../interface/component.interface';

test.skip('it is not snowing', (): void => {});

export const FixtureMultipleSelectionContext: MultipleSelectionContextInterface = {
    value: [
        {
            label: 'Cimahi, Jawa Barat',
            others: { id: '1' },
            value: 'f574128d9944326385f1aa7be08b8685'
        }
    ],
    fontSize: 18,
    textValue: '',
    optionList: [
        {
            label: 'Cimahi Selatan, Cimahi',
            value: '167411a051e8f85e5949b8712d5b59fa',
            others: { id: '2' },
            position: 0
        },
        {
            label: 'Cimahi Tengah, Cimahi',
            value: 'b9addc94e54625e8eb6b1ed933b89233',
            others: { id: '2' },
            position: 1
        },
        {
            label: 'Cimahi Utara, Cimahi',
            value: 'f33fc7510f0d5ebfecbe278642ee00e1',
            others: { id: '3' },
            position: 2
        }
    ],
    isActive: false,
    showDropdownContent: false,
    positionDropdownContent: -1,
    optionListActive: undefined,
    onCloseBadges: (): void => {},
    onChangeSearch: (): void => {},
    onEditTextFocus: (): void => {},
    onEditTextChange: (): void => {},
    onEditTextBackSpaceKeyDown: (): void => {},
    onChangePositionDropdownContent: (): void => {}
};

export default {
    content: FixtureMultipleSelectionContext
};
