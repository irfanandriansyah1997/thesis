/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

import { MultipleSelectionContextInterface } from '../interface/component.interface';

const MultiSelectionContext = createContext<MultipleSelectionContextInterface>({
    isActive: false,
    textValue: '',
    optionList: [],
    positionDropdownContent: -1,
    optionListActive: undefined,
    onChangeSearch: (): void => {},
    onEditTextFocus: (): void => {},
    onEditTextChange: (): void => {},
    onChangePositionDropdownContent: (): void => {}
});

export default MultiSelectionContext;
