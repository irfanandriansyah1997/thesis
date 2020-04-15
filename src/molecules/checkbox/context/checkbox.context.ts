/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

import { ComponentCheckboxContextInterface } from '../../../shared/interface/component/component-input.interface';

const CheckboxContext = createContext<ComponentCheckboxContextInterface>({
    name: '',
    onChange: () => {},
    value: []
});

export default CheckboxContext;
