/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

import { MultipleSelectionContextInterface } from '../interface/component.interface';

const MultiSelectionContext = createContext<MultipleSelectionContextInterface>({
    value: [],
    fontSize: 18,
    textValue: '',
    optionList: [],
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
});

export default MultiSelectionContext;
